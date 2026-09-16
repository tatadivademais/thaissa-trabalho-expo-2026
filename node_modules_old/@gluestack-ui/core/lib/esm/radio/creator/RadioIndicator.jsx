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
import { useRadio } from './RadioProvider';
export const RadioIndicator = (StyledRadioIndicator) => forwardRef((_a, ref) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const { isChecked, isDisabled, isFocusVisible, isInvalid, isHovered, isReadOnly, isIndeterminate, isFocused, isPressed, } = useRadio('RadioContext');
    return (<StyledRadioIndicator states={{
            checked: isChecked,
            disabled: isDisabled,
            focusVisible: isFocused || isFocusVisible,
            hover: isHovered,
            invalid: isInvalid,
            readonly: isReadOnly,
            indeterminate: isIndeterminate,
            focus: isFocused,
            active: isPressed,
        }} 
    // data attributes for uniwind
    data-checked={isChecked ? 'true' : 'false'} data-disabled={isDisabled ? 'true' : 'false'} data-focus-visible={isFocused || isFocusVisible ? 'true' : 'false'} data-invalid={isInvalid ? 'true' : 'false'} data-readonly={isReadOnly ? 'true' : 'false'} data-indeterminate={isIndeterminate ? 'true' : 'false'} data-focus={isFocused ? 'true' : 'false'} data-active={isPressed ? 'true' : 'false'} 
    // data attributes for nativewind
    dataSet={{
            checked: isChecked ? 'true' : 'false',
            disabled: isDisabled ? 'true' : 'false',
            focusVisible: isFocused || isFocusVisible ? 'true' : 'false',
            hover: isHovered ? 'true' : 'false',
            invalid: isInvalid ? 'true' : 'false',
            readonly: isReadOnly ? 'true' : 'false',
            indeterminate: isIndeterminate ? 'true' : 'false',
            focus: isFocused ? 'true' : 'false',
            active: isPressed ? 'true' : 'false',
        }} {...props} ref={ref}>
        {children}
      </StyledRadioIndicator>);
});
//# sourceMappingURL=RadioIndicator.jsx.map