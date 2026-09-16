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
import { AccessibilityInfo } from 'react-native';
export function ToastTitle(StyledToastTitle) {
    return forwardRef((_a, ref) => {
        var { children } = _a, props = __rest(_a, ["children"]);
        React.useEffect(() => {
            // Issue from react-native side
            // Hack for now, will fix this later
            AccessibilityInfo.announceForAccessibility(children);
        });
        return (<StyledToastTitle {...props} ref={ref} aria-live="assertive" aria-atomic="true" role="alert">
        {children}
      </StyledToastTitle>);
    });
}
//# sourceMappingURL=ToastTitle.jsx.map