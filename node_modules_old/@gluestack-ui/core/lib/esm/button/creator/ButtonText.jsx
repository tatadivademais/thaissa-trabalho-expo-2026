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
import { useButtonContext } from './Context';
export const ButtonText = (StyledButtonText) => forwardRef((_a, ref) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const { hover, focus, active, disabled, focusVisible } = useButtonContext();
    return (<StyledButtonText ref={ref} {...props} states={{
            hover: hover,
            focus: focus,
            active: active,
            disabled: disabled,
            focusVisible: focusVisible,
        }} 
    // data attributes for uniwind
    data-hover={hover ? 'true' : 'false'} data-focus={focus ? 'true' : 'false'} data-active={active ? 'true' : 'false'} data-disabled={disabled ? 'true' : 'false'} data-focus-visible={focusVisible ? 'true' : 'false'} 
    // data attributes for nativewind
    dataSet={{
            hover: hover,
            focus: focus,
            active: active,
            disabled: disabled,
            focusVisible: focusVisible,
        }}>
        {children}
      </StyledButtonText>);
});
//# sourceMappingURL=ButtonText.jsx.map