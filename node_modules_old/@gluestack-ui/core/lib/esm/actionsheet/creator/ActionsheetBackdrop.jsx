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
import { ActionsheetContext } from './context';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';
function ActionsheetBackdrop(StyledActionsheetBackdrop, AnimatePresence) {
    return forwardRef((_a, ref) => {
        var { children } = _a, props = __rest(_a, ["children"]);
        const { closeOnOverlayClick, handleClose, backdropVisible } = React.useContext(ActionsheetContext);
        return (<OverlayAnimatePresence visible={backdropVisible} AnimatePresence={AnimatePresence}>
        <StyledActionsheetBackdrop ref={ref} onPress={() => {
                closeOnOverlayClick && handleClose();
            }} 
        // ios
        accessibilityElementsHidden 
        // android
        importantForAccessibility="no-hide-descendants" aria-hidden={true} {...props}>
          {children}
        </StyledActionsheetBackdrop>
      </OverlayAnimatePresence>);
    });
}
export default ActionsheetBackdrop;
//# sourceMappingURL=ActionsheetBackdrop.jsx.map