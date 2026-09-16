'use client';
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
import React from 'react';
import { extractDataClassName } from '../utils';
export const withStates = (Component) => React.forwardRef((_a, ref) => {
    var { states, className } = _a, props = __rest(_a, ["states", "className"]);
    const classNamesFinal = React.useMemo(() => {
        if (!className)
            return;
        return extractDataClassName(className, states);
    }, [className, states]);
    return (<Component className={classNamesFinal} {...props} ref={ref}/>);
});
//# sourceMappingURL=index.jsx.map