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
import { View } from 'react-native';
export const CalendarDayIndicatorMain = (StyledCalendarDayIndicator) => forwardRef((props, ref) => {
    const { type = 'dot', dots, color, children } = props, rest = __rest(props, ["type", "dots", "color", "children"]);
    if (children) {
        return (<StyledCalendarDayIndicator ref={ref} data-type={type} {...rest}>
          {children}
        </StyledCalendarDayIndicator>);
    }
    if (type === 'dot' && color) {
        return (<StyledCalendarDayIndicator ref={ref} data-type="dot" {...rest}>
          <DotIndicator color={color}/>
        </StyledCalendarDayIndicator>);
    }
    if (type === 'multi-dot' && dots) {
        return (<StyledCalendarDayIndicator ref={ref} data-type="multi-dot" {...rest}>
          {dots.map((dot, index) => (<DotIndicator key={dot.key || index} color={dot.color}/>))}
        </StyledCalendarDayIndicator>);
    }
    return (<StyledCalendarDayIndicator ref={ref} data-type={type} {...rest}>
        {children}
      </StyledCalendarDayIndicator>);
});
// Simple dot indicator component
const DotIndicator = ({ color }) => {
    return (<View style={{
            width: 6,
            height: 6,
            borderRadius: 3,
            backgroundColor: color,
        }}/>);
};
//# sourceMappingURL=CalendarDayIndicator.jsx.map