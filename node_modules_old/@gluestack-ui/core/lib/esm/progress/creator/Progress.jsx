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
import { ProgressProvider } from './ProgressContext';
const useProgress = ({ min, max, value, orientation = 'horizontal', }) => {
    const calculatedValue = value < max && value > min
        ? Math.round(((value - min) / (max - min)) * 100)
        : value > min
            ? 100
            : 0;
    return {
        'accessible': true,
        'tabIndex': 1,
        'role': 'progressbar',
        'aria-valuemin': min,
        'aria-valuemax': max,
        'aria-valuenow': calculatedValue,
        'aria-valuetext': `${calculatedValue}%`,
        'aria-orientation': orientation,
        'valueWidth': orientation === 'horizontal' ? calculatedValue : 100,
        'valueHeight': orientation === 'vertical' ? calculatedValue : 100,
    };
};
export function Progress(StyledProgress) {
    return forwardRef((_a, ref) => {
        var { children, min = 0, max = 100, value = 0, orientation = 'horizontal' } = _a, props = __rest(_a, ["children", "min", "max", "value", "orientation"]);
        const progressProps = useProgress({ min, max, value, orientation });
        return (<StyledProgress ref={ref} {...progressProps} {...props}>
          <ProgressProvider min={min} max={max} valueWidth={progressProps.valueWidth} valueHeight={progressProps.valueHeight} orientation={orientation}>
            {children}
          </ProgressProvider>
        </StyledProgress>);
    });
}
//# sourceMappingURL=Progress.jsx.map