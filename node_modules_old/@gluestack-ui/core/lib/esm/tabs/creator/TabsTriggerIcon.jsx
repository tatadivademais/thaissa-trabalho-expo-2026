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
export const TabsTriggerIcon = (StyledTabsTriggerIcon) => forwardRef((_a, ref) => {
    var { as: AsComp } = _a, props = __rest(_a, ["as"]);
    const context = useTabsTriggerContext('TabsTriggerIcon');
    const { isSelected, isDisabled, isHovered } = context;
    return (<StyledTabsTriggerIcon ref={ref} as={AsComp} dataSet={{
            selected: isSelected,
            disabled: isDisabled,
            hover: isHovered,
        }} {...props}/>);
});
//# sourceMappingURL=TabsTriggerIcon.jsx.map