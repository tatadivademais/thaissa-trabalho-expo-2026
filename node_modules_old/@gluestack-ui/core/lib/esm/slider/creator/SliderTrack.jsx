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
import { SliderContext } from './Context';
import { mergeRefs } from '@gluestack-ui/utils/common';
import { useHover } from '@gluestack-ui/utils/aria';
function SliderTrack(StyledSliderTrack) {
    return forwardRef((_a, ref) => {
        var { children, style } = _a, props = __rest(_a, ["children", "style"]);
        const _ref = React.useRef(null);
        const { isHovered } = useHover({}, _ref);
        const { trackProps, onTrackLayout, trackRef, isFocused, isFocusVisible, isDisabled, isPressed, sliderTrackHeight, } = React.useContext(SliderContext);
        return (<StyledSliderTrack onLayout={onTrackLayout} ref={mergeRefs([trackRef, _ref, ref])} {...trackProps} style={[{ height: sliderTrackHeight }, style]} {...props} isDisabled={isDisabled} tabIndex={-1} states={{
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
            }} disabled={isDisabled}>
        {children}
      </StyledSliderTrack>);
    });
}
export default SliderTrack;
//# sourceMappingURL=SliderTrack.jsx.map