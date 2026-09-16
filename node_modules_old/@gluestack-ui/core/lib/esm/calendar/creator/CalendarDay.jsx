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
import React, { forwardRef, useMemo } from 'react';
import { useCalendarContext } from './CalendarContext';
import { format } from './utils/dateUtils';
export const CalendarDayMain = (StyledCalendarDay) => forwardRef((props, ref) => {
    const { date, state: stateProp, children } = props, rest = __rest(props, ["date", "state", "children"]);
    const { getDayState, handleDayPress, handleDayLongPress, setHoveredDate, isDisabled: calendarDisabled, isReadOnly, showOutsideDays, renderDay, } = useCalendarContext();
    // Get day state
    const dayState = useMemo(() => stateProp || getDayState(date), [stateProp, getDayState, date]);
    // Don't render outside days if showOutsideDays is false
    if (!showOutsideDays && dayState.isOutsideMonth) {
        return null;
    }
    const isInteractive = !dayState.isDisabled && !calendarDisabled && !isReadOnly;
    const handlePress = () => {
        if (!isInteractive)
            return;
        handleDayPress(date);
    };
    const handleLongPress = () => {
        if (!isInteractive)
            return;
        handleDayLongPress(date);
    };
    const handleHoverIn = () => {
        if (!isInteractive)
            return;
        setHoveredDate(date);
    };
    const handleHoverOut = () => {
        setHoveredDate(null);
    };
    // Custom render function
    if (renderDay) {
        const customContent = renderDay(date, dayState);
        if (customContent) {
            return (<StyledCalendarDay ref={ref} onPress={handlePress} onLongPress={handleLongPress} onHoverIn={handleHoverIn} onHoverOut={handleHoverOut} disabled={!isInteractive} role="gridcell" aria-label={format(date, 'MMMM d, yyyy')} aria-selected={dayState.isSelected} aria-disabled={dayState.isDisabled} data-state={getDayDataState(dayState)} {...rest}>
            {customContent}
          </StyledCalendarDay>);
        }
    }
    return (<StyledCalendarDay ref={ref} onPress={handlePress} onLongPress={handleLongPress} onHoverIn={handleHoverIn} onHoverOut={handleHoverOut} disabled={!isInteractive} role="gridcell" aria-label={format(date, 'MMMM d, yyyy')} aria-selected={dayState.isSelected} aria-disabled={dayState.isDisabled} data-state={getDayDataState(dayState)} {...rest}>
        {children}
      </StyledCalendarDay>);
});
// Helper to get data-state attribute for styling
function getDayDataState(state) {
    if (state.isSelected && state.isRangeStart)
        return 'range-start';
    if (state.isSelected && state.isRangeEnd)
        return 'range-end';
    if (state.isInRange)
        return 'range-middle';
    if (state.isSelected)
        return 'selected';
    if (state.isToday)
        return 'today';
    if (state.isDisabled)
        return 'disabled';
    if (state.isOutsideMonth)
        return 'outside-month';
    return 'default';
}
//# sourceMappingURL=CalendarDay.jsx.map