import { startOfMonth, endOfMonth, addMonths, subMonths, addDays, isSameDay, isSameMonth, isWithinInterval, format, isAfter, isBefore, getYear, getMonth, isToday } from 'date-fns';
export interface CalendarWeek {
    weekNumber?: number;
    days: CalendarDay[];
}
export interface CalendarDay {
    date: Date;
    isCurrentMonth: boolean;
    isToday: boolean;
}
/**
 * Generate a calendar grid for a given month
 * @param month The month to generate the grid for
 * @param firstDayOfWeek Week starts on (0 = Sunday, 1 = Monday, etc.)
 * @param fixedWeeks Always show 6 weeks regardless of month length
 * @returns Array of weeks, each containing an array of days
 */
export declare function generateCalendarGrid(month: Date, firstDayOfWeek?: number, fixedWeeks?: boolean): CalendarWeek[];
/**
 * Get weekday labels for the calendar header
 * @param firstDayOfWeek Week starts on (0 = Sunday, 1 = Monday, etc.)
 * @param formatType Format as 'short' (Sun) or 'narrow' (S)
 * @param locale Optional locale for formatting
 * @returns Array of 7 weekday labels
 */
export declare function getWeekdays(firstDayOfWeek?: number, formatType?: 'short' | 'narrow', locale?: string): string[];
/**
 * Convert a Date object to a string key for marker lookups
 * @param date The date to convert
 * @returns ISO format string (YYYY-MM-DD)
 */
export declare function dateToKey(date: Date): string;
/**
 * Convert a string key back to a Date object
 * @param key ISO format string (YYYY-MM-DD)
 * @returns Date object
 */
export declare function keyToDate(key: string): Date;
/**
 * Check if a date is disabled based on constraints
 * @param date The date to check
 * @param minDate Minimum allowed date
 * @param maxDate Maximum allowed date
 * @param disabledDates Array of disabled dates or function
 * @returns true if date is disabled
 */
export declare function isDateDisabled(date: Date, minDate?: Date, maxDate?: Date, disabledDates?: Date[] | ((date: Date) => boolean)): boolean;
/**
 * Check if a date is selected in single mode
 */
export declare function isDateSelectedSingle(date: Date, value?: Date): boolean;
/**
 * Check if a date is selected in multiple mode
 */
export declare function isDateSelectedMultiple(date: Date, value?: Date[]): boolean;
/**
 * Check if a date is selected in range mode
 */
export declare function isDateSelectedRange(date: Date, value?: {
    from: Date;
    to?: Date;
}): {
    isSelected: boolean;
    isRangeStart: boolean;
    isRangeEnd: boolean;
    isInRange: boolean;
};
export { addMonths, subMonths, isSameDay, isSameMonth, isWithinInterval, isAfter, isBefore, startOfMonth, endOfMonth, getYear, getMonth, format, isToday, addDays, };
//# sourceMappingURL=dateUtils.d.ts.map