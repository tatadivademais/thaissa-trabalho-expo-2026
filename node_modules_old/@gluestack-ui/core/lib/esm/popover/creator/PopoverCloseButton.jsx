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
import { usePress, useHover } from '@gluestack-ui/utils/aria';
import { useFocusRing, useFocus } from '@gluestack-ui/utils/aria';
import { composeEventHandlers } from '@gluestack-ui/utils/common';
import { usePopoverContent } from './PopoverContext';
const PopoverCloseButton = (StyledPopoverCloseButton) => forwardRef((_a, ref) => {
    var { children, isDisabled, isHovered: isHoveredProp, isPressed: isPressedProp, isFocused: isFocusedProp, isFocusVisible: isFocusVisibleProp } = _a, props = __rest(_a, ["children", "isDisabled", "isHovered", "isPressed", "isFocused", "isFocusVisible"]);
    const { value } = usePopoverContent('PopoverContext');
    const { handleClose } = value;
    const { hoverProps, isHovered } = useHover();
    const { pressProps, isPressed } = usePress({ isDisabled });
    const { focusProps, isFocused } = useFocus();
    const { isFocusVisible, focusProps: focusRingProps } = useFocusRing();
    const { onPressIn, onPressOut, onHoverIn, onHoverOut, onFocus, onBlur } = props, resolvedProps = __rest(props, ["onPressIn", "onPressOut", "onHoverIn", "onHoverOut", "onFocus", "onBlur"]);
    return (<StyledPopoverCloseButton role="button" states={{
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
        }} ref={ref} disabled={isDisabled} onPressIn={composeEventHandlers(onPressIn, pressProps.onPressIn)} onPressOut={composeEventHandlers(onPressOut, pressProps.onPressOut)} 
    // @ts-ignore - web only
    onHoverIn={composeEventHandlers(onHoverIn, hoverProps.onHoverIn)} 
    // @ts-ignore - web only
    onHoverOut={composeEventHandlers(onHoverOut, hoverProps.onHoverOut)} 
    // @ts-ignore - web only
    onFocus={composeEventHandlers(composeEventHandlers(onFocus, focusProps.onFocus), focusRingProps.onFocus)} 
    // @ts-ignore - web only
    onBlur={composeEventHandlers(composeEventHandlers(onBlur, focusProps.onBlur), focusRingProps.onBlur)} onPress={() => {
            handleClose();
        }} {...resolvedProps}>
          {children}
        </StyledPopoverCloseButton>);
});
export default PopoverCloseButton;
//# sourceMappingURL=PopoverCloseButton.jsx.map