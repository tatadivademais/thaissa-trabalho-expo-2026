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
import { OverlayAnimatePresence } from './OverlayAnimatePresence';
import { usePopover } from './PopoverContext';
const PopoverBackdrop = (StyledPopoverBackdrop, AnimatePresence) => forwardRef((_a, ref) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const { value } = usePopover('PopperContext');
    const { handleClose } = value;
    return (<OverlayAnimatePresence visible={value === null || value === void 0 ? void 0 : value.isOpen} AnimatePresence={AnimatePresence}>
        <StyledPopoverBackdrop ref={ref} {...props} onPress={handleClose} 
    // for ios
    accessibilityElementsHidden importantForAccessibility="no-hide-descendants" aria-hidden={true}>
          {children}
        </StyledPopoverBackdrop>
      </OverlayAnimatePresence>);
});
export default PopoverBackdrop;
//# sourceMappingURL=PopoverBackdrop.jsx.map