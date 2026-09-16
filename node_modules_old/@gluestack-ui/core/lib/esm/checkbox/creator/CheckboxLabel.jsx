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
import { useCheckbox } from './CheckboxProvider';
const CheckboxLabel = (StyledCheckboxLabel) => forwardRef((_a, ref) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const { isChecked, isDisabled, isHovered, isInvalid, isReadOnly, isPressed, isFocused, isIndeterminate, isFocusVisible, } = useCheckbox('CheckboxContext');
    return (<StyledCheckboxLabel states={{
            hover: isHovered,
            checked: isChecked,
            disabled: isDisabled,
            focusVisible: isFocusVisible,
            invalid: isInvalid,
            readOnly: isReadOnly,
            pressed: isPressed,
            focused: isFocused,
            indeterminate: isIndeterminate,
        }} 
    // data attributes for uniwind
    data-hover={isHovered ? 'true' : 'false'} data-checked={isChecked ? 'true' : 'false'} data-disabled={isDisabled ? 'true' : 'false'} data-focus-visible={isFocusVisible ? 'true' : 'false'} data-invalid={isInvalid ? 'true' : 'false'} data-readonly={isReadOnly ? 'true' : 'false'} data-active={isPressed ? 'true' : 'false'} data-focused={isFocused ? 'true' : 'false'} data-indeterminate={isIndeterminate ? 'true' : 'false'} 
    // data attributes for nativewind
    dataSet={{
            hover: isHovered ? 'true' : 'false',
            checked: isChecked ? 'true' : 'false',
            disabled: isDisabled ? 'true' : 'false',
            focusVisible: isFocusVisible ? 'true' : 'false',
            invalid: isInvalid ? 'true' : 'false',
            readOnly: isReadOnly ? 'true' : 'false',
            pressed: isPressed ? 'true' : 'false',
            focused: isFocused ? 'true' : 'false',
            indeterminate: isIndeterminate ? 'true' : 'false',
        }} {...props} ref={ref}>
        {children}
      </StyledCheckboxLabel>);
});
export default CheckboxLabel;
//# sourceMappingURL=CheckboxLabel.jsx.map