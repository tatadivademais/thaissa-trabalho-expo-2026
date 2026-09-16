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
const FormControlHelper = (StyledFormControlHelper) => forwardRef((_a, ref) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const formControlContext = useFormControlContext();
    const combinedProps = combineContextAndProps(formControlContext, props);
    React.useEffect(() => {
        combinedProps === null || combinedProps === void 0 ? void 0 : combinedProps.setHasHelpText(true);
        return () => {
            combinedProps === null || combinedProps === void 0 ? void 0 : combinedProps.setHasHelpText(false);
        };
    });
    return (<StyledFormControlHelper ref={ref} {...combinedProps} id={combinedProps === null || combinedProps === void 0 ? void 0 : combinedProps.labelId}>
        {children}
      </StyledFormControlHelper>);
});
export default FormControlHelper;
//# sourceMappingURL=FormControlHelper.jsx.map