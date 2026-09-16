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
import { FocusScope as AriaFocusScope, useFocusManager, } from '@react-aria/focus';
const FocusScope = (_a) => {
    /* Todo: stoping mounted and unMounted everytime contain is change */
    // if (contain === false) return <></>;
    var { children, contain } = _a, props = __rest(_a, ["children", "contain"]);
    return (<AriaFocusScope contain={contain} {...props}>
      {children}
    </AriaFocusScope>);
};
export { FocusScope, useFocusManager };
//# sourceMappingURL=FocusScope.web.jsx.map