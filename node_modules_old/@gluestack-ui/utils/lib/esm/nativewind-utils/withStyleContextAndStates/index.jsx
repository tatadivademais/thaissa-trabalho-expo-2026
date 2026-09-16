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
import { ParentContext } from '../context';
import { useParentContext } from '../context';
export const withStyleContextAndStates = (Component, scope = 'Global') => {
    return React.forwardRef((_a, ref) => {
        var { context, className, states } = _a, props = __rest(_a, ["context", "className", "states"]);
        let contextValues = {};
        const parentContextValues = useParentContext();
        if (parentContextValues[scope] !== undefined) {
            parentContextValues[scope] = context;
            contextValues = parentContextValues;
        }
        else {
            contextValues = Object.assign(Object.assign({}, parentContextValues), { [scope]: context });
        }
        const classNamesFinal = React.useMemo(() => {
            if (!className)
                return;
            return extractDataClassName(className, states);
        }, [className, states]);
        return (<ParentContext.Provider value={contextValues}>
        <Component className={classNamesFinal} {...props} ref={ref}/>
      </ParentContext.Provider>);
    });
};
export const useStyleContext = (scope = 'Global') => {
    const parentContextValues = useParentContext();
    return parentContextValues[scope];
};
//# sourceMappingURL=index.jsx.map