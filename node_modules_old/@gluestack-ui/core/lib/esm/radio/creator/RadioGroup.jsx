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
import { useRadioGroup } from '../aria';
import { useRadioGroupState } from '@react-stately/radio';
import { RadioGroupProvider } from './RadioGroupContext';
import { useFormControlContext } from '../../form-control/creator';
export const RadioGroup = (StyledRadioGroup) => forwardRef((_a, ref) => {
    var { children, isInvalid } = _a, props = __rest(_a, ["children", "isInvalid"]);
    const formControlContext = useFormControlContext();
    const state = useRadioGroupState(Object.assign(Object.assign({}, props), { validationState: isInvalid ? 'invalid' : 'valid' }));
    const radioGroupState = useRadioGroup(Object.assign(Object.assign(Object.assign({}, formControlContext), props), { 'aria-label': props['aria-label'] || 'RadioGroup' }), state);
    const contextValue = React.useMemo(() => {
        return Object.assign(Object.assign({}, formControlContext), { state });
    }, [formControlContext, state]);
    return (<RadioGroupProvider state={contextValue}>
        <StyledRadioGroup {...radioGroupState.radioGroupProps} {...props} ref={ref}>
          {children}
        </StyledRadioGroup>
      </RadioGroupProvider>);
});
//# sourceMappingURL=RadioGroup.jsx.map