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
import { Platform } from 'react-native';
export function Divider(StyledDivider) {
    return forwardRef((_a, ref) => {
        var { children } = _a, props = __rest(_a, ["children"]);
        const { orientation } = props;
        return (<StyledDivider ref={ref} {...props} aria-orientation={orientation} 
        //@ts-ignore web only role
        role={Platform.OS === 'web' ? 'separator' : undefined}>
        {children}
      </StyledDivider>);
    });
}
//# sourceMappingURL=Divider.jsx.map