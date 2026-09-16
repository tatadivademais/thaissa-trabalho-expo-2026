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
import { getMonth } from './utils/dateUtils';
const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
export const CalendarHeaderMonthSelectMain = (StyledCalendarHeaderMonthSelect) => forwardRef((props, ref) => {
    const { renderOption, children } = props, rest = __rest(props, ["renderOption", "children"]);
    const { currentMonth, setMonth } = useCalendarContext();
    const currentMonthIndex = getMonth(currentMonth);
    const handleSelect = (monthIndex) => {
        const newMonth = new Date(currentMonth);
        newMonth.setMonth(monthIndex);
        setMonth(newMonth);
    };
    const items = MONTHS.map((month, index) => ({
        label: renderOption ? String(renderOption(month)) : month,
        value: index,
    }));
    return (<StyledCalendarHeaderMonthSelect ref={ref} items={items} selectedValue={currentMonthIndex} onValueChange={handleSelect} {...rest}>
        {children}
      </StyledCalendarHeaderMonthSelect>);
});
//# sourceMappingURL=CalendarHeaderMonthSelect.jsx.map