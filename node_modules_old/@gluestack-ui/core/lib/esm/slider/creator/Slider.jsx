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
import React, { forwardRef } from 'react';
import { useSliderState } from '@react-stately/slider';
import { useLayout } from '@gluestack-ui/utils/hooks';
import { SliderContext } from './Context';
import { useSlider } from '../aria';
import { useFormControlContext } from '../../form-control/creator';
function Slider(StyledSlider) {
    return forwardRef((_a, ref) => {
        var { orientation = 'horizontal', isReversed = false, 'isHovered': isHoveredProp, 'isDisabled': isDisabledProp, 'isFocused': isFocusedProp, 'isFocusVisible': isFocusVisibleProp, 'isPressed': isPressedProp, 
        // @ts-ignore
        'aria-label': ariaLabel = 'Slider', sliderTrackHeight, step, children } = _a, props = __rest(_a, ["orientation", "isReversed", 'isHovered', 'isDisabled', 'isFocused', 'isFocusVisible', 'isPressed', 'aria-label', "sliderTrackHeight", "step", "children"]);
        const formControlContext = useFormControlContext();
        const [isFocused, setIsFocused] = React.useState(false);
        const [isFocusVisible, setIsFocusVisible] = React.useState(false);
        const [isHovered, setIsHovered] = React.useState(false);
        const [isPressed, setIsPressed] = React.useState(false);
        const _b = Object.assign(Object.assign(Object.assign({}, formControlContext), props), { 'aria-label': ariaLabel }), { isDisabled, isReadOnly } = _b, newProps = __rest(_b, ["isDisabled", "isReadOnly"]);
        if (typeof props.value === 'number') {
            //@ts-ignore - React Native Aria slider accepts array of values
            newProps.value = [props.value];
        }
        if (typeof props.defaultValue === 'number') {
            //@ts-ignore - React Native Aria slider accepts array of values
            newProps.defaultValue = [props.defaultValue];
        }
        props = newProps;
        // orientation / isReversed are destructured out of the incoming props object, so `props`
        // no longer contains them — hooks that read props.orientation must receive them explicitly.
        const ariaSliderProps = Object.assign(Object.assign({}, props), { orientation,
            isReversed });
        const { onLayout, layout: trackLayout } = useLayout();
        const trackRef = React.useRef(null);
        const updatedProps = Object.assign({}, props, {
            orientation,
            isReversed,
        });
        if (isReadOnly || isDisabled) {
            updatedProps.isDisabled = true;
        }
        const state = useSliderState(Object.assign(Object.assign({}, updatedProps), { 
            //@ts-ignore
            numberFormatter: { format: (e) => e }, minValue: props.minValue, maxValue: props.maxValue, step, onChange: (val) => {
                props.onChange && props.onChange(val[0]);
            }, onChangeEnd: (val) => {
                props.onChangeEnd && props.onChangeEnd(val[0]);
            } }));
        const { trackProps } = useSlider(ariaSliderProps, state, trackLayout, isReversed, trackRef);
        const contextValue = React.useMemo(() => {
            return {
                isDisabled: isDisabled || isDisabledProp,
                isFocused: isFocused || isFocusedProp,
                isFocusVisible: isFocusVisible || isFocusVisibleProp,
                isPressed: isPressed || isPressedProp,
                isHovered: isHovered || isHoveredProp,
                isReadOnly,
                isReversed,
                trackLayout,
                state,
                orientation,
                setIsFocused,
                setIsFocusVisible,
                setIsPressed,
                setIsHovered,
                trackProps,
                onTrackLayout: onLayout,
                trackRef,
                sliderTrackHeight,
            };
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [
            trackLayout,
            state,
            orientation,
            isDisabled,
            isReversed,
            isReadOnly,
            onLayout,
            isFocused,
            setIsFocused,
            isFocusVisible,
            setIsFocusVisible,
            isPressed,
            setIsPressed,
            isHoveredProp,
            isDisabledProp,
            isFocusedProp,
            isFocusVisibleProp,
            isPressedProp,
            sliderTrackHeight,
            trackRef,
        ]);
        return (<SliderContext.Provider value={contextValue}>
          <StyledSlider {...props} ref={ref} states={{
                hover: isHovered || isHoveredProp,
                disabled: isDisabled || isDisabledProp,
                focus: isFocused || isFocusedProp,
                focusVisible: isFocusVisible || isFocusVisibleProp,
                active: isPressed || isPressedProp,
            }} 
        // data attributes for uniwind
        data-hover={isHovered || isHoveredProp ? 'true' : 'false'} data-disabled={isDisabled || isDisabledProp ? 'true' : 'false'} data-focus={isFocused || isFocusedProp ? 'true' : 'false'} data-focus-visible={isFocusVisible || isFocusVisibleProp ? 'true' : 'false'} data-active={isPressed || isPressedProp ? 'true' : 'false'} 
        // data attributes for nativewind
        dataSet={{
                hover: isHovered || isHoveredProp ? 'true' : 'false',
                disabled: isDisabled || isDisabledProp ? 'true' : 'false',
                focus: isFocused || isFocusedProp ? 'true' : 'false',
                focusVisible: isFocusVisible || isFocusVisibleProp ? 'true' : 'false',
                active: isPressed || isPressedProp ? 'true' : 'false',
            }} orientation={orientation !== null && orientation !== void 0 ? orientation : 'horizontal'} isReversed={isReversed !== null && isReversed !== void 0 ? isReversed : false}>
            {children}
          </StyledSlider>
        </SliderContext.Provider>);
    });
}
export default Slider;
//# sourceMappingURL=Slider.jsx.map