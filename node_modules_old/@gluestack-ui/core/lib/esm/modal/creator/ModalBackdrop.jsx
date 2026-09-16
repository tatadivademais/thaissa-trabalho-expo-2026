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
import { ModalContext } from './Context';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';
const ModalBackdrop = (StyledModalBackdrop, AnimatePresence) => forwardRef((_a, ref) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const { closeOnOverlayClick, handleClose, visible } = React.useContext(ModalContext);
    return (<OverlayAnimatePresence visible={visible} AnimatePresence={AnimatePresence}>
        <StyledModalBackdrop ref={ref} exit={true} onPress={() => {
            closeOnOverlayClick && handleClose();
        }} {...props}>
          {children}
        </StyledModalBackdrop>
      </OverlayAnimatePresence>);
});
export default ModalBackdrop;
//# sourceMappingURL=ModalBackdrop.jsx.map