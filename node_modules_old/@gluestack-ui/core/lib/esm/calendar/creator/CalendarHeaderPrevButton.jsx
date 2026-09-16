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
import { isBefore, startOfMonth } from './utils/dateUtils';
export const CalendarHeaderPrevButtonMain = (StyledCalendarHeaderPrevButton) => forwardRef((props, ref) => {
    const { onPress, disabled, children, icon } = props, rest = __rest(props, ["onPress", "disabled", "children", "icon"]);
    const { navigateMonth, currentMonth, minDate, isDisabled } = useCalendarContext();
    // Check if prev button should be disabled
    const isPrevDisabled = React.useMemo(() => {
        if (disabled || isDisabled)
            return true;
        if (!minDate)
            return false;
        // Disable if current month is the minimum allowed month
        const prevMonth = new Date(currentMonth);
        prevMonth.setMonth(prevMonth.getMonth() - 1);
        return isBefore(startOfMonth(prevMonth), startOfMonth(minDate));
    }, [disabled, isDisabled, currentMonth, minDate]);
    const handlePress = () => {
        if (isPrevDisabled)
            return;
        navigateMonth('prev');
        onPress === null || onPress === void 0 ? void 0 : onPress();
    };
    return (<StyledCalendarHeaderPrevButton ref={ref} onPress={handlePress} disabled={isPrevDisabled} {...rest}>
        {icon || children}
      </StyledCalendarHeaderPrevButton>);
});
//# sourceMappingURL=CalendarHeaderPrevButton.jsx.map