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
import { useHover, usePress } from '@gluestack-ui/utils/aria';
import { useFocusRing, useFocus } from '@gluestack-ui/utils/aria';
import { composeEventHandlers } from '@gluestack-ui/utils/common';
function Fab(StyledFab) {
    return forwardRef((_a, ref) => {
        var { children, isDisabled, isHovered: isHoveredProp, isPressed: isPressedProp, isFocused: isFocusedProp, isFocusVisible: isFocusVisibleProp } = _a, props = __rest(_a, ["children", "isDisabled", "isHovered", "isPressed", "isFocused", "isFocusVisible"]);
        const { isFocusVisible, focusProps: focusRingProps } = useFocusRing();
        const { pressProps, isPressed } = usePress({ isDisabled });
        const { isFocused, focusProps } = useFocus();
        const { isHovered, hoverProps } = useHover();
        return (<StyledFab ref={ref} role={(props === null || props === void 0 ? void 0 : props.role) || 'button'} states={{
                hover: isHoveredProp || isHovered,
                focus: isFocusedProp || isFocused,
                active: isPressedProp || isPressed,
                disabled: isDisabled,
                focusVisible: isFocusVisibleProp || isFocusVisible,
            }} 
        // data attributes for uniwind
        data-hover={isHoveredProp || isHovered ? 'true' : 'false'} data-focus={isFocusedProp || isFocused ? 'true' : 'false'} data-active={isPressedProp || isPressed ? 'true' : 'false'} data-disabled={isDisabled ? 'true' : 'false'} data-focus-visible={isFocusVisibleProp || isFocusVisible ? 'true' : 'false'} 
        // data attributes for nativewind
        dataSet={{
                hover: isHoveredProp || isHovered ? 'true' : 'false',
                focus: isFocusedProp || isFocused ? 'true' : 'false',
                active: isPressedProp || isPressed ? 'true' : 'false',
                disabled: isDisabled ? 'true' : 'false',
                focusVisible: isFocusVisibleProp || isFocusVisible ? 'true' : 'false',
            }} disabled={isDisabled} {...props} onPressIn={composeEventHandlers(props === null || props === void 0 ? void 0 : props.onPressIn, pressProps.onPressIn)} onPressOut={composeEventHandlers(props === null || props === void 0 ? void 0 : props.onPressOut, pressProps.onPressOut)} onHoverIn={composeEventHandlers(props === null || props === void 0 ? void 0 : props.onHoverIn, hoverProps.onHoverIn)} onHoverOut={composeEventHandlers(props === null || props === void 0 ? void 0 : props.onHoverOut, hoverProps.onHoverOut)} onFocus={composeEventHandlers(composeEventHandlers(props === null || props === void 0 ? void 0 : props.onFocus, focusProps.onFocus), focusRingProps.onFocus)} onBlur={composeEventHandlers(composeEventHandlers(props === null || props === void 0 ? void 0 : props.onBlur, focusProps.onBlur), focusRingProps.onBlur)}>
          {children}
        </StyledFab>);
    });
}
export default Fab;
//# sourceMappingURL=Fab.jsx.map