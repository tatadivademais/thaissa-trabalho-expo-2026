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
export const CalendarWeekNumberMain = (StyledCalendarWeekNumber) => forwardRef((props, ref) => {
    const { week, children } = props, rest = __rest(props, ["week", "children"]);
    return (<StyledCalendarWeekNumber ref={ref} {...rest}>
        {children || week}
      </StyledCalendarWeekNumber>);
});
//# sourceMappingURL=CalendarWeekNumber.jsx.map