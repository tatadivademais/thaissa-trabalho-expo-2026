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
import React, { forwardRef, useMemo, useState, useCallback } from 'react';
import { CalendarContext } from './CalendarContext';
//thss is the calendar component testv 
import { generateCalendarGrid, isDateDisabled as utilIsDateDisabled, isDateSelectedSingle, isDateSelectedMultiple, isDateSelectedRange, dateToKey, isSameDay, isSameMonth, isToday, addMonths, subMonths, } from './utils/dateUtils';
// Import useControllableState from utils
// This should match the pattern used in other gluestack components
const useControllableState = ({ value, defaultValue, onChange, }) => {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;
    const setValue = useCallback((newValue) => {
        if (!isControlled) {
            setInternalValue(newValue);
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
    }, [isControlled, onChange]);
    return [currentValue, setValue];
};
export const CalendarMain = (StyledCalendar) => forwardRef((props, ref) => {
    const { mode = 'single', value: valueProp, defaultValue, onValueChange, minDate, maxDate, disabledDates, initialMonth, numberOfMonths = 1, showWeekNumbers = false, showOutsideDays = true, firstDayOfWeek = 0, fixedWeeks = false, markers, enableMonthYearPicker = false, minYear, maxYear, onMonthChange, onDayPress, onDayLongPress, enableAnimation = true, animationDuration = 300, locale, isDisabled = false, isReadOnly = false, renderDay, children } = props, rest = __rest(props, ["mode", "value", "defaultValue", "onValueChange", "minDate", "maxDate", "disabledDates", "initialMonth", "numberOfMonths", "showWeekNumbers", "showOutsideDays", "firstDayOfWeek", "fixedWeeks", "markers", "enableMonthYearPicker", "minYear", "maxYear", "onMonthChange", "onDayPress", "onDayLongPress", "enableAnimation", "animationDuration", "locale", "isDisabled", "isReadOnly", "renderDay", "children"]);
    // Controllable state for value
    const [value, setValue] = useControllableState({
        value: valueProp,
        defaultValue,
        onChange: onValueChange,
    });
    // Get initial month from value or initialMonth or current date
    const getInitialMonth = () => {
        if (initialMonth)
            return initialMonth;
        if (value instanceof Date)
            return value;
        if (Array.isArray(value) && value.length > 0)
            return value[0];
        if (value && 'from' in value && value.from)
            return value.from;
        return new Date();
    };
    // View state (current month/year being displayed)
    const [currentMonth, setCurrentMonth] = useState(getInitialMonth());
    // Hover state for range selection preview
    const [hoveredDate, setHoveredDate] = useState(null);
    // Memoized calendar grid calculation
    const calendarGrid = useMemo(() => generateCalendarGrid(currentMonth, firstDayOfWeek, fixedWeeks), [currentMonth, firstDayOfWeek, fixedWeeks]);
    // Check if date is disabled
    const isDateDisabled = useCallback((date) => {
        return utilIsDateDisabled(date, minDate, maxDate, disabledDates);
    }, [minDate, maxDate, disabledDates]);
    // Get complete day state for rendering
    const getDayState = useCallback((date) => {
        const disabled = isDateDisabled(date);
        const outsideMonth = !isSameMonth(date, currentMonth);
        const today = isToday(date);
        const key = dateToKey(date);
        const marker = markers === null || markers === void 0 ? void 0 : markers[key];
        const hasMarker = !!marker;
        let isSelected = false;
        let isRangeStart = false;
        let isRangeEnd = false;
        let isInRange = false;
        if (mode === 'single' && value instanceof Date) {
            isSelected = isDateSelectedSingle(date, value);
        }
        else if (mode === 'multiple' && Array.isArray(value)) {
            isSelected = isDateSelectedMultiple(date, value);
        }
        else if (mode === 'range' && value && typeof value === 'object' && 'from' in value) {
            const rangeState = isDateSelectedRange(date, value);
            isSelected = rangeState.isSelected;
            isRangeStart = rangeState.isRangeStart;
            isRangeEnd = rangeState.isRangeEnd;
            isInRange = rangeState.isInRange;
        }
        return {
            isSelected,
            isToday: today,
            isOutsideMonth: outsideMonth,
            isDisabled: disabled,
            isRangeStart,
            isRangeEnd,
            isInRange,
            hasMarker,
            marker,
        };
    }, [mode, value, isDateDisabled, currentMonth, markers]);
    // Selection handlers (migrated from existing implementation)
    const handleDayPress = useCallback((date) => {
        if (isDisabled || isReadOnly)
            return;
        if (isDateDisabled(date))
            return;
        onDayPress === null || onDayPress === void 0 ? void 0 : onDayPress(date);
        if (mode === 'single') {
            setValue(date);
        }
        else if (mode === 'multiple') {
            const currentSelection = value || [];
            const exists = currentSelection.find((d) => isSameDay(d, date));
            if (exists) {
                setValue(currentSelection.filter((d) => !isSameDay(d, date)));
            }
            else {
                setValue([...currentSelection, date]);
            }
        }
        else if (mode === 'range') {
            const currentRange = value;
            if (!currentRange || (currentRange.from && currentRange.to)) {
                // Start new range
                setValue({ from: date, to: undefined });
            }
            else {
                // Complete range - auto-correct order if end < start
                const from = currentRange.from;
                const to = date;
                if (to < from) {
                    setValue({ from: to, to: from });
                }
                else {
                    setValue({ from, to });
                }
            }
        }
    }, [mode, value, setValue, isDisabled, isReadOnly, isDateDisabled, onDayPress]);
    const handleDayLongPress = useCallback((date) => {
        if (isDisabled || isReadOnly)
            return;
        if (isDateDisabled(date))
            return;
        onDayLongPress === null || onDayLongPress === void 0 ? void 0 : onDayLongPress(date);
    }, [isDisabled, isReadOnly, isDateDisabled, onDayLongPress]);
    // Month navigation
    const navigateMonth = useCallback((direction) => {
        const newMonth = direction === 'next'
            ? addMonths(currentMonth, 1)
            : subMonths(currentMonth, 1);
        setCurrentMonth(newMonth);
        onMonthChange === null || onMonthChange === void 0 ? void 0 : onMonthChange(newMonth);
    }, [currentMonth, onMonthChange]);
    // Set specific month
    const setMonth = useCallback((month) => {
        setCurrentMonth(month);
        onMonthChange === null || onMonthChange === void 0 ? void 0 : onMonthChange(month);
    }, [onMonthChange]);
    // Set specific year
    const setYear = useCallback((year) => {
        const newMonth = new Date(currentMonth);
        newMonth.setFullYear(year);
        setCurrentMonth(newMonth);
        onMonthChange === null || onMonthChange === void 0 ? void 0 : onMonthChange(newMonth);
    }, [currentMonth, onMonthChange]);
    // Context value
    const contextValue = useMemo(() => ({
        mode,
        value,
        currentMonth,
        hoveredDate,
        setHoveredDate,
        handleDayPress,
        handleDayLongPress,
        navigateMonth,
        setMonth,
        setYear,
        calendarGrid,
        isDateDisabled,
        getDayState,
        markers,
        showWeekNumbers,
        showOutsideDays,
        enableMonthYearPicker,
        firstDayOfWeek,
        locale,
        isDisabled,
        isReadOnly,
        minDate,
        maxDate,
        minYear,
        maxYear,
        enableAnimation,
        animationDuration,
        renderDay,
    }), [
        mode,
        value,
        currentMonth,
        hoveredDate,
        handleDayPress,
        handleDayLongPress,
        navigateMonth,
        setMonth,
        setYear,
        calendarGrid,
        isDateDisabled,
        getDayState,
        markers,
        showWeekNumbers,
        showOutsideDays,
        enableMonthYearPicker,
        firstDayOfWeek,
        locale,
        isDisabled,
        isReadOnly,
        minDate,
        maxDate,
        minYear,
        maxYear,
        enableAnimation,
        animationDuration,
        renderDay,
    ]);
    return (<CalendarContext.Provider value={contextValue}>
        <StyledCalendar ref={ref} {...rest}>
          {children}
        </StyledCalendar>
      </CalendarContext.Provider>);
});
//# sourceMappingURL=Calendar.jsx.map