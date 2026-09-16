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
import React, { forwardRef, useEffect } from 'react';
import { Platform } from 'react-native';
import { useSliderThumb } from '../aria';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { SliderContext } from './Context';
import { useHover } from '@gluestack-ui/utils/aria';
import { mergeRefs } from '@gluestack-ui/utils/common';
import { useFocusRing, useFocus } from '@gluestack-ui/utils/aria';
import { composeEventHandlers } from '@gluestack-ui/utils/common';
const positionMap = new Map([
    ['horizontal true', 'right'],
    ['horizontal false', 'left'],
    ['vertical true', 'top'],
    ['vertical false', 'bottom'],
]);
function SliderThumb(StyledSliderThumb, StyledSliderThumbInteraction) {
    return forwardRef((_a, ref) => {
        var _b;
        var { children, scaleOnPressed = 1, style } = _a, props = __rest(_a, ["children", "scaleOnPressed", "style"]);
        const [thumbSize, setThumbSize] = React.useState({
            height: 0,
            width: 0,
        });
        const _ref = React.useRef(null);
        const { isHovered } = useHover({}, _ref);
        const { state, trackLayout, orientation, isDisabled, isReversed, isPressed, setIsHovered, setIsPressed, setIsFocused, setIsFocusVisible, } = React.useContext(SliderContext);
        const inputRef = React.useRef(null);
        const { thumbProps, inputProps } = useSliderThumb({
            index: 0,
            trackLayout,
            inputRef,
            isDisabled,
            orientation: orientation,
        }, state, isReversed);
        const { isFocusVisible, focusProps: focusRingProps } = useFocusRing();
        const { isFocused, focusProps } = useFocus();
        const thumbStyles = {
            transform: orientation === 'vertical'
                ? [
                    {
                        translateY: isReversed
                            ? -(thumbSize === null || thumbSize === void 0 ? void 0 : thumbSize.height) / 2
                            : (thumbSize === null || thumbSize === void 0 ? void 0 : thumbSize.height) / 2,
                    },
                ]
                : [
                    {
                        translateX: isReversed
                            ? (thumbSize === null || thumbSize === void 0 ? void 0 : thumbSize.height) / 2
                            : -(thumbSize === null || thumbSize === void 0 ? void 0 : thumbSize.height) / 2,
                    },
                ],
        };
        thumbStyles[`${positionMap.get(`${orientation} ${isReversed}`)}`] = `${state.getThumbPercent(0) * 100}%`;
        (_b = thumbStyles === null || thumbStyles === void 0 ? void 0 : thumbStyles.transform) === null || _b === void 0 ? void 0 : _b.push({
            scale: state.isThumbDragging(0) ? scaleOnPressed : 1,
        });
        useEffect(() => {
            setIsPressed(state.isThumbDragging(0));
        }, [state, setIsPressed, isPressed]);
        useEffect(() => {
            setIsFocused(isFocused);
        }, [isFocused, setIsFocused]);
        useEffect(() => {
            setIsFocusVisible(isFocusVisible);
        }, [isFocusVisible, setIsFocusVisible]);
        useEffect(() => {
            setIsHovered(isHovered);
        }, [isHovered, setIsHovered]);
        return (<StyledSliderThumb onLayout={(layout) => {
                var _a, _b, _c, _d;
                setThumbSize({
                    height: (_b = (_a = layout === null || layout === void 0 ? void 0 : layout.nativeEvent) === null || _a === void 0 ? void 0 : _a.layout) === null || _b === void 0 ? void 0 : _b.height,
                    width: (_d = (_c = layout === null || layout === void 0 ? void 0 : layout.nativeEvent) === null || _c === void 0 ? void 0 : _c.layout) === null || _d === void 0 ? void 0 : _d.width,
                });
            }} states={{
                hover: isHovered,
                disabled: isDisabled,
                focus: isFocused,
                focusVisible: isFocusVisible,
                active: isPressed,
            }} 
        // data attributes for uniwind
        data-hover={isHovered ? 'true' : 'false'} data-disabled={isDisabled ? 'true' : 'false'} data-focus={isFocused ? 'true' : 'false'} data-focus-visible={isFocusVisible ? 'true' : 'false'} data-active={isPressed ? 'true' : 'false'} 
        // data attributes for nativewind
        dataSet={{
                hover: isHovered ? 'true' : 'false',
                disabled: isDisabled ? 'true' : 'false',
                focus: isFocused ? 'true' : 'false',
                focusVisible: isFocusVisible ? 'true' : 'false',
                active: isPressed ? 'true' : 'false',
            }} disabled={isDisabled} {...thumbProps} style={[style, thumbStyles]} 
        // @ts-ignore - web only
        onFocus={composeEventHandlers(composeEventHandlers(props === null || props === void 0 ? void 0 : props.onFocus, focusProps.onFocus), focusRingProps.onFocus)} 
        // @ts-ignore - web only
        onBlur={composeEventHandlers(composeEventHandlers(props === null || props === void 0 ? void 0 : props.onBlur, focusProps.onBlur), focusRingProps.onBlur)} ref={mergeRefs([_ref, ref])} {...props}>
          {/* @ts-ignore */}
          <StyledSliderThumbInteraction states={{
                hover: isHovered,
                focus: isFocused,
                focusVisible: isFocusVisible,
                disabled: isDisabled,
                active: isPressed,
            }} dataSet={{
                hover: isHovered ? 'true' : 'false',
                focus: isFocused ? 'true' : 'false',
                focusVisible: isFocusVisible ? 'true' : 'false',
                disabled: isDisabled ? 'true' : 'false',
                active: isPressed ? 'true' : 'false',
            }}>
            {children}
            {Platform.OS === 'web' && (<VisuallyHidden>
                <input ref={inputRef} {...inputProps}/>
              </VisuallyHidden>)}
          </StyledSliderThumbInteraction>
        </StyledSliderThumb>);
    });
}
export default SliderThumb;
//# sourceMappingURL=SliderThumb.jsx.map