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
import { getYear } from './utils/dateUtils';
export const CalendarHeaderYearSelectMain = (StyledCalendarHeaderYearSelect) => forwardRef((props, ref) => {
    const { renderOption, children } = props, rest = __rest(props, ["renderOption", "children"]);
    const { currentMonth, setYear, minYear, maxYear } = useCalendarContext();
    const currentYear = getYear(currentMonth);
    const startYear = minYear || currentYear - 100;
    const endYear = maxYear || currentYear + 100;
    const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);
    const handleSelect = (year) => {
        setYear(year);
    };
    const items = years.map((year) => ({
        label: renderOption ? String(renderOption(year)) : String(year),
        value: year,
    }));
    return (<StyledCalendarHeaderYearSelect ref={ref} items={items} selectedValue={currentYear} onValueChange={handleSelect} {...rest}>
        {children}
      </StyledCalendarHeaderYearSelect>);
});
//# sourceMappingURL=CalendarHeaderYearSelect.jsx.map