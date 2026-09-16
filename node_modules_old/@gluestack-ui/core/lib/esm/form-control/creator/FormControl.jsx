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
import { useFormControlProvider, FormControlContext } from './useFormControl';
const FormControl = (StyledFormControlBox) => forwardRef((_a, ref) => {
    var props = __rest(_a, []);
    const _b = useFormControlProvider(props), { htmlProps } = _b, context = __rest(_b, ["htmlProps"]);
    const { isDisabled, isInvalid } = context, remainingProps = __rest(context, ["isDisabled", "isInvalid"]);
    return (<FormControlContext.Provider value={context}>
        <StyledFormControlBox ref={ref} {...remainingProps} {...htmlProps} states={{
            disabled: isDisabled,
            invalid: isInvalid,
        }} 
    // data attributes for uniwind
    data-disabled={isDisabled ? 'true' : 'false'} data-invalid={isInvalid ? 'true' : 'false'} 
    // data attributes for nativewind
    dataSet={{
            disabled: isDisabled ? 'true' : 'false',
            invalid: isInvalid ? 'true' : 'false',
        }}/>
      </FormControlContext.Provider>);
});
export default FormControl;
//# sourceMappingURL=FormControl.jsx.map