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
import { useFocusRing, useFocus } from '@gluestack-ui/utils/aria';
import React, { forwardRef, useMemo } from 'react';
import { composeEventHandlers } from '@gluestack-ui/utils/common';
import { useHover, usePress } from '@gluestack-ui/utils/aria';
import { ButtonContext } from './Context';
export const Button = (StyledButton) => forwardRef((_a, ref) => {
    var _b;
    var { children, isDisabled, isHovered: isHoveredProp, isPressed: isPressedProp, isFocused: isFocusedProp, isFocusVisible: isFocusVisibleProp } = _a, props = __rest(_a, ["children", "isDisabled", "isHovered", "isPressed", "isFocused", "isFocusVisible"]);
    const { isFocusVisible, focusProps: focusRingProps } = useFocusRing();
    const { pressProps: pressableProps, isPressed } = usePress({
        isDisabled,
    });
    const { isFocused, focusProps } = useFocus();
    const { isHovered, hoverProps } = useHover();
    const contextValue = useMemo(() => {
        return {
            hover: isHoveredProp || isHovered,
            focus: isFocusedProp || isFocused,
            active: isPressedProp || isPressed,
            disabled: isDisabled,
            focusVisible: isFocusVisibleProp || isFocusVisible,
        };
    }, [
        isHovered,
        isHoveredProp,
        isFocused,
        isFocusedProp,
        isPressed,
        isPressedProp,
        isDisabled,
        isFocusVisible,
        isFocusVisibleProp,
    ]);
    return (<ButtonContext.Provider value={contextValue}>
          <StyledButton ref={ref} role={(props === null || props === void 0 ? void 0 : props.role) || 'button'} states={{
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
        }} disabled={isDisabled} {...props} onPressIn={composeEventHandlers(props === null || props === void 0 ? void 0 : props.onPressIn, pressableProps.onPressIn)} onPressOut={composeEventHandlers(props === null || props === void 0 ? void 0 : props.onPressOut, pressableProps.onPressOut)} 
    // @ts-ignore - web only
    onHoverIn={composeEventHandlers(props === null || props === void 0 ? void 0 : props.onHoverIn, hoverProps.onHoverIn)} 
    // @ts-ignore - web only
    onHoverOut={composeEventHandlers(props === null || props === void 0 ? void 0 : props.onHoverOut, hoverProps.onHoverOut)} 
    // @ts-ignore - web only
    onFocus={composeEventHandlers(composeEventHandlers(props === null || props === void 0 ? void 0 : props.onFocus, focusProps.onFocus), focusRingProps.onFocus)} 
    // @ts-ignore - web only
    onBlur={composeEventHandlers(composeEventHandlers(props === null || props === void 0 ? void 0 : props.onBlur, focusProps.onBlur), focusRingProps.onBlur)}>
            {typeof children === 'function'
            ? children({
                hovered: isHovered,
                focused: isFocused,
                pressed: isPressed,
                disabled: (_b = props.disabled) !== null && _b !== void 0 ? _b : undefined,
                focusVisible: isFocusVisible,
            })
            : children}
          </StyledButton>
        </ButtonContext.Provider>);
});
//# sourceMappingURL=Button.jsx.map