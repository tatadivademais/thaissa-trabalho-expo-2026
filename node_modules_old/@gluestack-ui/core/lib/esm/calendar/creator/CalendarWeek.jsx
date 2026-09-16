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
export const CalendarWeekMain = (StyledCalendarWeek) => forwardRef((props, ref) => {
    const { weekNumber, children, days, WeekNumberComponent, DayComponent, DayTextComponent, DayIndicatorComponent } = props, rest = __rest(props, ["weekNumber", "children", "days", "WeekNumberComponent", "DayComponent", "DayTextComponent", "DayIndicatorComponent"]);
    const { showWeekNumbers, getDayState, markers } = useCalendarContext();
    // If children provided, use them (custom rendering)
    if (children) {
        return (<StyledCalendarWeek ref={ref} {...rest}>
          {children}
        </StyledCalendarWeek>);
    }
    // Auto-render week with days
    return (<StyledCalendarWeek ref={ref} {...rest}>
        {showWeekNumbers && weekNumber && WeekNumberComponent && (<WeekNumberComponent week={weekNumber}/>)}
        {days === null || days === void 0 ? void 0 : days.map((day, dayIndex) => {
            const dayState = getDayState(day.date);
            const dateKey = day.date.toISOString().split('T')[0];
            const marker = markers === null || markers === void 0 ? void 0 : markers[dateKey];
            return (<DayComponent key={dayIndex} date={day.date} state={dayState}>
              <DayTextComponent state={dayState}>
                {day.date.getDate()}
              </DayTextComponent>
              {marker && (<DayIndicatorComponent type={marker.type} dots={marker.dots} color={marker.color}/>)}
            </DayComponent>);
        })}
      </StyledCalendarWeek>);
});
//# sourceMappingURL=CalendarWeek.jsx.map