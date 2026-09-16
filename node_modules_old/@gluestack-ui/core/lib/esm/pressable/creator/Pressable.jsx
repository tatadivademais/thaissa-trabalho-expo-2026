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
import React, { forwardRef } from 'react';
import { useHover, usePress } from '@gluestack-ui/utils/aria';
import { composeEventHandlers } from '@gluestack-ui/utils/common';
function Pressable(StyledPressable) {
    return forwardRef((_a, ref) => {
        var _b, _c;
        var { children } = _a, props = __rest(_a, ["children"]);
        const { focusProps: focusRingProps, isFocusVisible } = useFocusRing();
        const { pressProps, isPressed } = usePress({
            isDisabled: (_b = props.disabled) !== null && _b !== void 0 ? _b : undefined,
        });
        const { isFocused, focusProps } = useFocus();
        const { isHovered, hoverProps } = useHover();
        return (<StyledPressable ref={ref} states={{
                hover: isHovered,
                focus: isFocused,
                active: isPressed,
                disabled: props.disabled,
                focusVisible: isFocusVisible,
            }} 
        // data attributes for uniwind
        data-hover={isHovered ? 'true' : 'false'} data-focus={isFocused ? 'true' : 'false'} data-active={isPressed ? 'true' : 'false'} data-disabled={props.disabled ? 'true' : 'false'} data-focus-visible={isFocusVisible ? 'true' : 'false'} 
        // data attributes for nativewind
        dataSet={{
                hover: isHovered ? 'true' : 'false',
                focus: isFocused ? 'true' : 'false',
                active: isPressed ? 'true' : 'false',
                disabled: props.disabled ? 'true' : 'false',
                focusVisible: isFocusVisible ? 'true' : 'false',
            }} {...props} onPressIn={composeEventHandlers(props === null || props === void 0 ? void 0 : props.onPressIn, pressProps.onPressIn)} onPressOut={composeEventHandlers(props === null || props === void 0 ? void 0 : props.onPressOut, pressProps.onPressOut)} 
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
                    disabled: (_c = props.disabled) !== null && _c !== void 0 ? _c : undefined,
                    focusVisible: isFocusVisible,
                })
                : children}
        </StyledPressable>);
    });
}
export default Pressable;
//# sourceMappingURL=Pressable.jsx.map