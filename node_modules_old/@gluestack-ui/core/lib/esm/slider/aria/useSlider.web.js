var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { clamp, mergeProps, useGlobalListeners } from '@react-aria/utils';
import { getSliderThumbId, sliderIds } from './utils';
import { useRef } from 'react';
import { setInteractionModality } from '@react-aria/interactions';
import { useLabel } from '@react-aria/label';
import { mapDomPropsToRN, isRTL } from '@gluestack-ui/utils/aria';
import { useMove } from './useMove';
/** Viewport client coords → offset along the track (RN onLayout has x/y, not top/left). */
function getTrackPointerOffset(e, clientX, clientY, isVertical, trackLayout) {
    var _a, _b, _c, _d;
    const current = e.currentTarget;
    if (current && typeof current.getBoundingClientRect === 'function') {
        const rect = current.getBoundingClientRect();
        return isVertical ? clientY - rect.top : clientX - rect.left;
    }
    const trackPos = isVertical
        ? ((_b = (_a = trackLayout.top) !== null && _a !== void 0 ? _a : trackLayout.y) !== null && _b !== void 0 ? _b : 0)
        : ((_d = (_c = trackLayout.left) !== null && _c !== void 0 ? _c : trackLayout.x) !== null && _d !== void 0 ? _d : 0);
    return (isVertical ? clientY : clientX) - trackPos;
}
function useSliderWeb(props, state, trackLayout, isReversed) {
    var _a;
    let { labelProps, fieldProps } = useLabel(props);
    let isVertical = props.orientation === 'vertical';
    // Attach id of the label to the state so it can be accessed by useSliderThumb.
    sliderIds.set(state, (_a = labelProps.id) !== null && _a !== void 0 ? _a : fieldProps.id);
    const direction = isRTL() ? 'rtl' : undefined;
    let { addGlobalListener, removeGlobalListener } = useGlobalListeners();
    // When the user clicks or drags the track, we want the motion to set and drag the
    // closest thumb.  Hence we also need to install useMove() on the track element.
    // Here, we keep track of which index is the "closest" to the drag start point.
    // It is set onMouseDown/onTouchDown; see trackProps below.
    const realTimeTrackDraggingIndex = useRef(null);
    const stateRef = useRef(null);
    // @ts-ignore
    stateRef.current = state;
    const reverseX = isReversed || direction === 'rtl';
    const currentPosition = useRef(null);
    const { moveProps } = useMove({
        onMoveStart() {
            // @ts-ignore
            currentPosition.current = null;
        },
        onMove({ deltaX, deltaY }) {
            let size = isVertical ? trackLayout.height : trackLayout.width;
            if (currentPosition.current == null) {
                // @ts-ignore
                currentPosition.current =
                    stateRef.current.getThumbPercent(realTimeTrackDraggingIndex.current) *
                        size;
            }
            let delta = isVertical ? deltaY : deltaX;
            if (reverseX) {
                if (!isVertical) {
                    delta = -delta;
                }
            }
            else {
                if (isVertical) {
                    delta = -delta;
                }
            }
            currentPosition.current += delta;
            if (realTimeTrackDraggingIndex.current != null) {
                const percent = clamp(currentPosition.current / size, 0, 1);
                stateRef.current.setThumbPercent(realTimeTrackDraggingIndex.current, percent);
            }
        },
        onMoveEnd() {
            if (realTimeTrackDraggingIndex.current != null) {
                stateRef.current.setThumbDragging(realTimeTrackDraggingIndex.current, false);
                realTimeTrackDraggingIndex.current = null;
            }
        },
    });
    let currentPointer = useRef(undefined);
    let onDownTrack = (e, id, clientX, clientY) => {
        // We only trigger track-dragging if the user clicks on the track itself and nothing is currently being dragged.
        if (!props.isDisabled &&
            state.values.every((_, i) => !state.isThumbDragging(i))) {
            let size = isVertical ? trackLayout.height : trackLayout.width;
            let offset = getTrackPointerOffset(e, clientX, clientY, isVertical, trackLayout);
            offset = clamp(offset, 0, size);
            let percent = size > 0 ? offset / size : 0;
            if (reverseX) {
                if (!isVertical) {
                    percent = 1 - percent;
                }
            }
            else {
                if (isVertical) {
                    percent = 1 - percent;
                }
            }
            let value = state.getPercentValue(percent);
            // to find the closet thumb we split the array based on the first thumb position to the "right/end" of the click.
            let closestThumb;
            let split = state.values.findIndex((v) => value - v < 0);
            if (split === 0) {
                // If the index is zero then the closetThumb is the first one
                closestThumb = split;
            }
            else if (split === -1) {
                // If no index is found they've clicked past all the thumbs
                closestThumb = state.values.length - 1;
            }
            else {
                let lastLeft = state.values[split - 1];
                let firstRight = state.values[split];
                // Pick the last left/start thumb, unless they are stacked on top of each other, then pick the right/end one
                if (Math.abs(lastLeft - value) < Math.abs(firstRight - value)) {
                    closestThumb = split - 1;
                }
                else {
                    closestThumb = split;
                }
            }
            // Confirm that the found closest thumb is editable, not disabled, and move it
            if (closestThumb >= 0 && state.isThumbEditable(closestThumb)) {
                // Don't unfocus anything
                e.preventDefault();
                realTimeTrackDraggingIndex.current = closestThumb;
                state.setFocusedThumb(closestThumb);
                currentPointer.current = id;
                state.setThumbDragging(realTimeTrackDraggingIndex.current, true);
                state.setThumbValue(closestThumb, value);
                addGlobalListener(window, 'mouseup', onUpTrack, false);
                addGlobalListener(window, 'touchend', onUpTrack, false);
                addGlobalListener(window, 'pointerup', onUpTrack, false);
            }
            else {
                realTimeTrackDraggingIndex.current = null;
            }
        }
    };
    //@ts-ignore
    let onUpTrack = (e) => {
        var _a, _b;
        let id = (_a = e.pointerId) !== null && _a !== void 0 ? _a : (_b = e.changedTouches) === null || _b === void 0 ? void 0 : _b[0].identifier;
        if (id === currentPointer.current) {
            if (realTimeTrackDraggingIndex.current != null) {
                state.setThumbDragging(realTimeTrackDraggingIndex.current, false);
                realTimeTrackDraggingIndex.current = null;
            }
            removeGlobalListener(window, 'mouseup', onUpTrack, false);
            removeGlobalListener(window, 'touchend', onUpTrack, false);
            removeGlobalListener(window, 'pointerup', onUpTrack, false);
        }
    };
    //@ts-ignore
    if (labelProps.htmlFor !== undefined) {
        // Ideally the `for` attribute should point to the first thumb, but VoiceOver on iOS
        // causes this to override the `aria-labelledby` on the thumb. This causes the first
        // thumb to only be announced as the slider label rather than its individual name as well.
        // See https://bugs.webkit.org/show_bug.cgi?id=172464.
        //@ts-ignore
        delete labelProps.htmlFor;
        labelProps.onClick = () => {
            var _a;
            // Safari does not focus <input type="range"> elements when clicking on an associated <label>,
            // so do it manually. In addition, make sure we show the focus ring.
            (_a = document.getElementById(getSliderThumbId(state, 0))) === null || _a === void 0 ? void 0 : _a.focus();
            setInteractionModality('keyboard');
        };
    }
    return {
        labelProps,
        // The root element of the Slider will have role="group" to group together
        // all the thumb inputs in the Slider.  The label of the Slider will
        // be used to label the group.
        groupProps: Object.assign({ role: 'group' }, fieldProps),
        trackProps: mergeProps({
            onMouseDown(e) {
                if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) {
                    return;
                }
                onDownTrack(e, undefined, e.clientX, e.clientY);
            },
            onPointerDown(e) {
                if (e.pointerType === 'mouse' &&
                    (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey)) {
                    return;
                }
                onDownTrack(e, e.pointerId, e.clientX, e.clientY);
            },
            onTouchStart(e) {
                onDownTrack(e, e.changedTouches[0].identifier, e.changedTouches[0].clientX, e.changedTouches[0].clientY);
            },
        }, moveProps),
        outputProps: {
            'htmlFor': state.values
                .map((_, index) => getSliderThumbId(state, index))
                .join(' '),
            'aria-live': 'off',
        },
    };
}
export const useSlider = (props, state, ref, isReversed, _trackRef) => {
    let _a = useSliderWeb(props, state, ref, isReversed), { groupProps: webGroupProps } = _a, rest = __rest(_a, ["groupProps"]);
    let groupProps = mapDomPropsToRN(webGroupProps);
    let labelProps = mapDomPropsToRN(rest.labelProps);
    return Object.assign(Object.assign({ groupProps }, rest), { labelProps });
};
//# sourceMappingURL=useSlider.web.js.map