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
import React, { forwardRef, useMemo } from 'react';
import { AccordionContext } from './Context';
import { useAccordion } from '../aria';
import { useControlledState } from '@react-stately/utils';
export const Accordion = (StyledAccordion) => forwardRef((_a, ref) => {
    var { type = 'single', isCollapsible = true, isDisabled = false, value, defaultValue = [], onValueChange, children } = _a, props = __rest(_a, ["type", "isCollapsible", "isDisabled", "value", "defaultValue", "onValueChange", "children"]);
    const [selectedValues, setSelectedValues] = useControlledState(value, defaultValue, (incomingValue) => {
        onValueChange && onValueChange(incomingValue);
    });
    const { state } = useAccordion({
        type,
        isCollapsible,
        selectedValues,
        setSelectedValues,
    });
    const contextValue = useMemo(() => {
        return {
            state,
            isDisabledAccordion: isDisabled,
            selectedValues,
        };
    }, [state, isDisabled, selectedValues]);
    return (<AccordionContext.Provider value={contextValue}>
          <StyledAccordion ref={ref} {...props}>
            {children}
          </StyledAccordion>
        </AccordionContext.Provider>);
});
//# sourceMappingURL=Accordion.jsx.map