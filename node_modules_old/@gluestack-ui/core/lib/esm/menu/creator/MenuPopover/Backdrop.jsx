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
import React, { forwardRef, useContext } from 'react';
import { MenuContext } from '../MenuContext';
export const MenuBackdrop = forwardRef((_a, ref) => {
    var { children, StyledBackdrop } = _a, props = __rest(_a, ["children", "StyledBackdrop"]);
    const { onClose } = useContext(MenuContext);
    return (<StyledBackdrop {...props} ref={ref} onPress={onClose} style={{
            backgroundColor: 'red',
        }}>
        {children}
      </StyledBackdrop>);
});
MenuBackdrop.displayName = 'MenuBackdrop';
export default MenuBackdrop;
//# sourceMappingURL=Backdrop.jsx.map