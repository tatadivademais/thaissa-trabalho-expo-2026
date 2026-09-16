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
import { useInput } from './InputContext';
import { useFormControl } from '../../form-control/creator';
export const InputSlot = (StyledInputSlot) => forwardRef((_a, ref) => {
    var { children, onPress, focusOnPress = true } = _a, props = __rest(_a, ["children", "onPress", "focusOnPress"]);
    const { inputFieldRef, isDisabled } = useInput('InputContext');
    const handleFocus = () => {
        var _a;
        focusOnPress && ((_a = inputFieldRef.current) === null || _a === void 0 ? void 0 : _a.focus());
    };
    const inputProps = useFormControl({
        isDisabled: props.isDisabled,
    });
    return (<StyledInputSlot states={{
            disabled: isDisabled || inputProps.isDisabled,
        }} 
    // data attributes for uniwind
    data-disabled={isDisabled || inputProps.isDisabled ? 'true' : 'false'} 
    // data attributes for nativewind
    dataSet={{
            disabled: isDisabled || inputProps.isDisabled ? 'true' : 'false',
        }} onPress={() => {
            if (onPress)
                onPress();
            handleFocus();
        }} accessibilityElementsHidden={true} tabIndex={-1} ref={ref} {...props}>
          {children}
        </StyledInputSlot>);
});
//# sourceMappingURL=InputSlot.jsx.map