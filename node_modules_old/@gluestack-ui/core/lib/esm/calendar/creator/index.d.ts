import type { ICalendarComponentType } from './types';
export declare function createCalendar<RootProps, HeaderProps, HeaderPrevButtonProps, HeaderNextButtonProps, HeaderTitleProps, HeaderMonthSelectProps, HeaderYearSelectProps, WeekDaysHeaderProps, WeekDayProps, BodyProps, GridProps, WeekProps, DayProps, DayTextProps, DayIndicatorProps, WeekNumberProps, FooterProps>({ Root, Header, HeaderPrevButton, HeaderNextButton, HeaderTitle, HeaderMonthSelect, HeaderYearSelect, WeekDaysHeader, WeekDay, Body, Grid, Week, Day, DayText, DayIndicator, WeekNumber, Footer, }: {
    Root: React.ComponentType<RootProps>;
    Header: React.ComponentType<HeaderProps>;
    HeaderPrevButton: React.ComponentType<HeaderPrevButtonProps>;
    HeaderNextButton: React.ComponentType<HeaderNextButtonProps>;
    HeaderTitle: React.ComponentType<HeaderTitleProps>;
    HeaderMonthSelect: React.ComponentType<HeaderMonthSelectProps>;
    HeaderYearSelect: React.ComponentType<HeaderYearSelectProps>;
    WeekDaysHeader: React.ComponentType<WeekDaysHeaderProps>;
    WeekDay: React.ComponentType<WeekDayProps>;
    Body: React.ComponentType<BodyProps>;
    Grid: React.ComponentType<GridProps>;
    Week: React.ComponentType<WeekProps>;
    Day: React.ComponentType<DayProps>;
    DayText: React.ComponentType<DayTextProps>;
    DayIndicator: React.ComponentType<DayIndicatorProps>;
    WeekNumber: React.ComponentType<WeekNumberProps>;
    Footer: React.ComponentType<FooterProps>;
}): ICalendarComponentType<RootProps, HeaderProps, HeaderPrevButtonProps, HeaderNextButtonProps, HeaderTitleProps, HeaderMonthSelectProps, HeaderYearSelectProps, WeekDaysHeaderProps, WeekDayProps, BodyProps, GridProps, WeekProps, DayProps, DayTextProps, DayIndicatorProps, WeekNumberProps, FooterProps>;
export * from './types';
export { useCalendarContext } from './CalendarContext';
//# sourceMappingURL=index.d.ts.map