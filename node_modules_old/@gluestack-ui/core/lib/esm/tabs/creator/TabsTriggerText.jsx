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
import { useTabsTriggerContext } from './Context';
export const TabsTriggerText = (StyledTabsTriggerText) => forwardRef((_a, ref) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const context = useTabsTriggerContext('TabsTriggerText');
    const { isSelected, isDisabled, isHovered } = context;
    return (<StyledTabsTriggerText ref={ref} dataSet={{
            selected: isSelected,
            disabled: isDisabled,
            hover: isHovered,
        }} {...props}>
        {children}
      </StyledTabsTriggerText>);
});
//# sourceMappingURL=TabsTriggerText.jsx.map