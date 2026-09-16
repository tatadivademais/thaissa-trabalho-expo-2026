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
import { useProgress } from './ProgressContext';
export function ProgressFilledTrack(StyledProgressFilledTrack) {
    return forwardRef((_a, ref) => {
        var { style = {} } = _a, props = __rest(_a, ["style"]);
        const { valueWidth, valueHeight, orientation } = useProgress('ProgressContext');
        const filledStyle = orientation === 'vertical'
            ? { height: `${valueHeight}%`, width: '100%' }
            : { width: `${valueWidth}%`, height: '100%' };
        return (<StyledProgressFilledTrack {...props} style={[style, filledStyle]} ref={ref}/>);
    });
}
//# sourceMappingURL=ProgressFilledTrack.jsx.map