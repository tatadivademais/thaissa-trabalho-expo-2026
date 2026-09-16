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
import { useLinkContext } from './Context';
export const LinkText = (StyledButtonText) => forwardRef((_a, ref) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const { isHovered, isFocused, isPressed, isDisabled, isFocusVisible } = useLinkContext();
    return (<StyledButtonText ref={ref} {...props} states={{
            hover: isHovered,
            focus: isFocused,
            active: isPressed,
            disabled: isDisabled,
            focusVisible: isFocusVisible,
        }} 
    // data attributes for uniwind
    data-hover={isHovered ? 'true' : 'false'} data-focus={isFocused ? 'true' : 'false'} data-active={isPressed ? 'true' : 'false'} data-disabled={isDisabled ? 'true' : 'false'} data-focus-visible={isFocusVisible ? 'true' : 'false'} 
    // data attributes for nativewind
    dataSet={{
            hover: isHovered,
            focus: isFocused,
            active: isPressed,
            disabled: isDisabled,
            focusVisible: isFocusVisible,
        }}>
        {children}
      </StyledButtonText>);
});
//# sourceMappingURL=LinkText.jsx.map