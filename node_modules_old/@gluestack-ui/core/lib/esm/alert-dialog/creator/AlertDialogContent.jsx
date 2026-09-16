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
import { AlertDialogContext } from './Context';
import { Platform, AccessibilityInfo, Keyboard } from 'react-native';
import { FocusScope } from '@gluestack-ui/utils/aria';
import { useDialog } from '@gluestack-ui/utils/aria';
import { mergeRefs, findNodeHandle } from '@gluestack-ui/utils/common';
const AlertDialogContent = (StyledAlertDialogContent, AnimatePresence) => forwardRef((_a, ref) => {
    var { children, focusScope = true } = _a, props = __rest(_a, ["children", "focusScope"]);
    const { initialFocusRef, finalFocusRef, handleClose, visible } = React.useContext(AlertDialogContext);
    const contentRef = React.useRef(null);
    const mergedRef = mergeRefs([contentRef, ref]);
    // @ts-ignore
    const { dialogProps } = useDialog(Object.assign({}, props), mergedRef);
    React.useEffect(() => {
        if (contentRef) {
            const reactTag = findNodeHandle(contentRef.current);
            if (reactTag) {
                // Issue from react-native side
                // Hack for now, will fix this later
                AccessibilityInfo.setAccessibilityFocus(reactTag);
                AccessibilityInfo.setAccessibilityFocus(reactTag);
                AccessibilityInfo.setAccessibilityFocus(reactTag);
                AccessibilityInfo.setAccessibilityFocus(reactTag);
                AccessibilityInfo.setAccessibilityFocus(reactTag);
                AccessibilityInfo.setAccessibilityFocus(reactTag);
                AccessibilityInfo.setAccessibilityFocus(reactTag);
                AccessibilityInfo.setAccessibilityFocus(reactTag);
            }
        }
    }, [visible, contentRef]);
    React.useEffect(() => {
        var _a, _b;
        if (visible) {
            Keyboard.dismiss();
            if (initialFocusRef && (initialFocusRef === null || initialFocusRef === void 0 ? void 0 : initialFocusRef.current)) {
                (_a = initialFocusRef === null || initialFocusRef === void 0 ? void 0 : initialFocusRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            }
        }
        else {
            if (finalFocusRef && (finalFocusRef === null || finalFocusRef === void 0 ? void 0 : finalFocusRef.current)) {
                (_b = finalFocusRef === null || finalFocusRef === void 0 ? void 0 : finalFocusRef.current) === null || _b === void 0 ? void 0 : _b.focus();
            }
        }
    }, [initialFocusRef, finalFocusRef, visible]);
    // Render content only when visible (AnimatePresence at root level handles this)
    if (!visible)
        return null;
    const content = (<StyledAlertDialogContent {...props} ref={mergedRef} onAccessibilityEscape={handleClose} exit={true} aria-modal="true" role={Platform.OS === 'web' ? 'alertdialog' : undefined} accessibilityViewIsModal tabIndex={Platform.OS === 'web' ? -1 : undefined} {...dialogProps}>
        {children}
      </StyledAlertDialogContent>);
    return focusScope ? (<FocusScope contain={visible} autoFocus={visible && !initialFocusRef} restoreFocus={visible && !finalFocusRef}>
        {content}
      </FocusScope>) : (<>{content}</>);
});
export default AlertDialogContent;
//# sourceMappingURL=AlertDialogContent.jsx.map