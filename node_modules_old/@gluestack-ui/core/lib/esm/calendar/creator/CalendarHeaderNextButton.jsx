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
import { isAfter, endOfMonth } from './utils/dateUtils';
export const CalendarHeaderNextButtonMain = (StyledCalendarHeaderNextButton) => forwardRef((props, ref) => {
    const { onPress, disabled, children, icon } = props, rest = __rest(props, ["onPress", "disabled", "children", "icon"]);
    const { navigateMonth, currentMonth, maxDate, isDisabled } = useCalendarContext();
    // Check if next button should be disabled
    const isNextDisabled = React.useMemo(() => {
        if (disabled || isDisabled)
            return true;
        if (!maxDate)
            return false;
        // Disable if current month is the maximum allowed month
        const nextMonth = new Date(currentMonth);
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        return isAfter(endOfMonth(nextMonth), endOfMonth(maxDate));
    }, [disabled, isDisabled, currentMonth, maxDate]);
    const handlePress = () => {
        if (isNextDisabled)
            return;
        navigateMonth('next');
        onPress === null || onPress === void 0 ? void 0 : onPress();
    };
    return (<StyledCalendarHeaderNextButton ref={ref} onPress={handlePress} disabled={isNextDisabled} {...rest}>
        {icon || children}
      </StyledCalendarHeaderNextButton>);
});
//# sourceMappingURL=CalendarHeaderNextButton.jsx.map