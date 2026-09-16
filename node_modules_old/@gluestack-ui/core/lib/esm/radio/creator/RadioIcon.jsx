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
import { useRadio } from './RadioProvider';
export const RadioIcon = (StyledRadioIcon) => forwardRef((_a, ref) => {
    var { children, forceMount = false } = _a, props = __rest(_a, ["children", "forceMount"]);
    const { isChecked } = useRadio('RadioContext');
    if (forceMount || isChecked) {
        return (<StyledRadioIcon {...props} ref={ref}>
          {children}
        </StyledRadioIcon>);
    }
    return null;
});
//# sourceMappingURL=RadioIcon.jsx.map