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
import { combineContextAndProps } from '@gluestack-ui/utils/common';
import { useFormControlContext } from './useFormControl';
const FormControlError = (StyledFormControlError) => forwardRef((_a, ref) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const formControlContext = useFormControlContext();
    const combinedProps = combineContextAndProps(formControlContext, props);
    const { isInvalid } = combinedProps, remainingProps = __rest(combinedProps, ["isInvalid"]);
    React.useEffect(() => {
        remainingProps === null || remainingProps === void 0 ? void 0 : remainingProps.setHasFeedbackText(true);
        return () => {
            remainingProps === null || remainingProps === void 0 ? void 0 : remainingProps.setHasFeedbackText(false);
        };
    });
    return isInvalid && children ? (<StyledFormControlError ref={ref} {...remainingProps}>
        {children}
      </StyledFormControlError>) : null;
});
export default FormControlError;
//# sourceMappingURL=FormControlError.jsx.map