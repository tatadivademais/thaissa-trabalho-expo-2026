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
import React, { forwardRef, useContext, useMemo, useState } from 'react';
import { AccordionContext, AccordionItemContext } from './Context';
import { useAccordionItem } from '../aria';
export const AccordionItem = (StyledAccordionItem) => forwardRef((_a, ref) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const [titleText, setTitleText] = useState('');
    const { state, isDisabledAccordion, selectedValues } = useContext(AccordionContext);
    const { isDisabled, value } = props;
    const { regionProps, buttonProps, isExpanded } = useAccordionItem(state, {
        value,
        isExpanded: selectedValues.includes(value),
        isDisabled: isDisabled !== undefined ? isDisabled : isDisabledAccordion,
    });
    const context = useMemo(() => {
        return {
            isDisabled: isDisabled !== undefined ? isDisabled : isDisabledAccordion,
            isExpanded,
            value,
            buttonProps,
            regionProps,
            titleText,
            setTitleText,
        };
    }, [
        isDisabled,
        isDisabledAccordion,
        isExpanded,
        value,
        buttonProps,
        regionProps,
        titleText,
    ]);
    return (<AccordionItemContext.Provider value={context}>
        <StyledAccordionItem ref={ref} {...props}>
          {children}
        </StyledAccordionItem>
      </AccordionItemContext.Provider>);
});
//# sourceMappingURL=AccordionItem.jsx.map