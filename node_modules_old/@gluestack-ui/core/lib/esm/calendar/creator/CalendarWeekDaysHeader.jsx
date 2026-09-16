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
import { getWeekdays } from './utils/dateUtils';
export const CalendarWeekDaysHeaderMain = (StyledCalendarWeekDaysHeader, WeekDayComponent, WeekNumberComponent) => forwardRef((props, ref) => {
    const { format = 'short', children } = props, rest = __rest(props, ["format", "children"]);
    const { firstDayOfWeek = 0, showWeekNumbers } = useCalendarContext();
    const weekdays = getWeekdays(firstDayOfWeek, format);
    // If children provided, use them (custom rendering)
    if (children) {
        return (<StyledCalendarWeekDaysHeader ref={ref} {...rest}>
          {children}
        </StyledCalendarWeekDaysHeader>);
    }
    // Auto-render weekday headers
    return (<StyledCalendarWeekDaysHeader ref={ref} {...rest}>
        {showWeekNumbers && <WeekNumberPlaceholder />}
        {weekdays.map((day, index) => (<WeekDayComponent key={index}>{day}</WeekDayComponent>))}
      </StyledCalendarWeekDaysHeader>);
});
// Empty placeholder for week number column header
const WeekNumberPlaceholder = () => {
    return <></>;
};
//# sourceMappingURL=CalendarWeekDaysHeader.jsx.map