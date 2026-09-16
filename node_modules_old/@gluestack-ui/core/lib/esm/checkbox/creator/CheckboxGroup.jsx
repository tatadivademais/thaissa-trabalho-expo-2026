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
import React, { createContext, forwardRef } from 'react';
import { useCheckboxGroup } from '../aria';
import { useCheckboxGroupState } from '@react-stately/checkbox';
import { useFormControlContext } from '../../form-control/creator';
export const CheckboxGroupContext = createContext(null);
const CheckboxGroup = (StyledCheckboxGroup) => forwardRef((_a, ref) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const state = useCheckboxGroupState(Object.assign(Object.assign({}, props), { validationState: props.isInvalid ? 'invalid' : 'valid' }));
    const { groupProps } = useCheckboxGroup(Object.assign(Object.assign({}, props), { 'aria-label': props['aria-label'] }), 
    //@ts-ignore
    state);
    const formControlContext = useFormControlContext();
    return (<CheckboxGroupContext.Provider value={{ state: Object.assign(Object.assign({}, formControlContext), state) }}>
        <StyledCheckboxGroup {...groupProps} {...props} ref={ref}>
          {children}
        </StyledCheckboxGroup>
      </CheckboxGroupContext.Provider>);
});
export default CheckboxGroup;
//# sourceMappingURL=CheckboxGroup.jsx.map