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
import { useCalendarContext } from './CalendarContext';
import { format } from './utils/dateUtils';
export const CalendarHeaderTitleMain = (StyledCalendarHeaderTitle) => forwardRef((props, ref) => {
    const { format: formatString = 'MMMM yyyy', as = 'text', children } = props, rest = __rest(props, ["format", "as", "children"]);
    const { currentMonth } = useCalendarContext();
    const formattedTitle = format(currentMonth, formatString);
    return (<StyledCalendarHeaderTitle ref={ref} {...rest}>
        {children || formattedTitle}
      </StyledCalendarHeaderTitle>);
});
//# sourceMappingURL=CalendarHeaderTitle.jsx.map