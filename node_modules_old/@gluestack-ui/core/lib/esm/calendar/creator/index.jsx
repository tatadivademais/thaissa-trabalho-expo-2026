import { CalendarMain } from './Calendar';
import { CalendarHeaderMain } from './CalendarHeader';
import { CalendarHeaderPrevButtonMain } from './CalendarHeaderPrevButton';
import { CalendarHeaderNextButtonMain } from './CalendarHeaderNextButton';
import { CalendarHeaderTitleMain } from './CalendarHeaderTitle';
import { CalendarHeaderMonthSelectMain } from './CalendarHeaderMonthSelect';
import { CalendarHeaderYearSelectMain } from './CalendarHeaderYearSelect';
import { CalendarWeekDaysHeaderMain } from './CalendarWeekDaysHeader';
import { CalendarWeekDayMain } from './CalendarWeekDay';
import { CalendarBodyMain } from './CalendarBody';
import { CalendarGridMain } from './CalendarGrid';
import { CalendarWeekMain } from './CalendarWeek';
import { CalendarDayMain } from './CalendarDay';
import { CalendarDayTextMain } from './CalendarDayText';
import { CalendarDayIndicatorMain } from './CalendarDayIndicator';
import { CalendarWeekNumberMain } from './CalendarWeekNumber';
import { CalendarFooterMain } from './CalendarFooter';
export function createCalendar({ Root, Header, HeaderPrevButton, HeaderNextButton, HeaderTitle, HeaderMonthSelect, HeaderYearSelect, WeekDaysHeader, WeekDay, Body, Grid, Week, Day, DayText, DayIndicator, WeekNumber, Footer, }) {
    const Calendar = CalendarMain(Root);
    // Create sub-components
    const CalendarWeekComponent = CalendarWeekMain(Week);
    const CalendarDayComponent = CalendarDayMain(Day);
    const CalendarDayTextComponent = CalendarDayTextMain(DayText);
    const CalendarDayIndicatorComponent = CalendarDayIndicatorMain(DayIndicator);
    const CalendarWeekNumberComponent = CalendarWeekNumberMain(WeekNumber);
    const CalendarWeekDayComponent = CalendarWeekDayMain(WeekDay);
    // Create Grid with sub-component dependencies
    const CalendarGridComponent = CalendarGridMain(Grid, CalendarWeekComponent, CalendarDayComponent, CalendarDayTextComponent, CalendarDayIndicatorComponent, CalendarWeekNumberComponent);
    // Create WeekDaysHeader with sub-component dependencies
    const CalendarWeekDaysHeaderComponent = CalendarWeekDaysHeaderMain(WeekDaysHeader, CalendarWeekDayComponent, CalendarWeekNumberComponent);
    Calendar.Header = CalendarHeaderMain(Header);
    Calendar.HeaderPrevButton = CalendarHeaderPrevButtonMain(HeaderPrevButton);
    Calendar.HeaderNextButton = CalendarHeaderNextButtonMain(HeaderNextButton);
    Calendar.HeaderTitle = CalendarHeaderTitleMain(HeaderTitle);
    Calendar.HeaderMonthSelect = CalendarHeaderMonthSelectMain(HeaderMonthSelect);
    Calendar.HeaderYearSelect = CalendarHeaderYearSelectMain(HeaderYearSelect);
    Calendar.WeekDaysHeader = CalendarWeekDaysHeaderComponent;
    Calendar.WeekDay = CalendarWeekDayComponent;
    Calendar.Body = CalendarBodyMain(Body);
    Calendar.Grid = CalendarGridComponent;
    Calendar.Week = CalendarWeekComponent;
    Calendar.Day = CalendarDayComponent;
    Calendar.DayText = CalendarDayTextComponent;
    Calendar.DayIndicator = CalendarDayIndicatorComponent;
    Calendar.WeekNumber = CalendarWeekNumberComponent;
    Calendar.Footer = CalendarFooterMain(Footer);
    Calendar.displayName = 'Calendar';
    Calendar.Header.displayName = 'Calendar.Header';
    Calendar.HeaderPrevButton.displayName = 'Calendar.HeaderPrevButton';
    Calendar.HeaderNextButton.displayName = 'Calendar.HeaderNextButton';
    Calendar.HeaderTitle.displayName = 'Calendar.HeaderTitle';
    Calendar.HeaderMonthSelect.displayName = 'Calendar.HeaderMonthSelect';
    Calendar.HeaderYearSelect.displayName = 'Calendar.HeaderYearSelect';
    Calendar.WeekDaysHeader.displayName = 'Calendar.WeekDaysHeader';
    Calendar.WeekDay.displayName = 'Calendar.WeekDay';
    Calendar.Body.displayName = 'Calendar.Body';
    Calendar.Grid.displayName = 'Calendar.Grid';
    Calendar.Week.displayName = 'Calendar.Week';
    Calendar.Day.displayName = 'Calendar.Day';
    Calendar.DayText.displayName = 'Calendar.DayText';
    Calendar.DayIndicator.displayName = 'Calendar.DayIndicator';
    Calendar.WeekNumber.displayName = 'Calendar.WeekNumber';
    Calendar.Footer.displayName = 'Calendar.Footer';
    return Calendar;
}
// Export types
export * from './types';
export { useCalendarContext } from './CalendarContext';
//# sourceMappingURL=index.jsx.map