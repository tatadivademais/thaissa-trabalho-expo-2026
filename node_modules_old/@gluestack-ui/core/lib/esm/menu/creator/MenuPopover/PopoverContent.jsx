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
import { useKeyboardDismissable } from '@gluestack-ui/utils/aria';
import { usePopover } from './PopoverContext';
import { AccessibilityInfo, View } from 'react-native';
import { mergeRefs, findNodeHandle } from '@gluestack-ui/utils/common';
import { useOverlayPosition } from '../../../overlay/aria';
const PopoverContent = forwardRef((_a, ref) => {
    var { children, style } = _a, props = __rest(_a, ["children", "style"]);
    const { value } = usePopover('PopoverContext');
    const { targetRef, onClose, initialFocusRef, finalFocusRef, popoverContentId, placement, shouldOverlapWithTrigger, crossOffset, offset, shouldFlip, isOpen, } = value;
    const contentRef = React.useRef(null);
    React.useEffect(() => {
        if (contentRef) {
            const reactTag = findNodeHandle(contentRef.current);
            if (reactTag) {
                AccessibilityInfo.isScreenReaderEnabled().then((enabled) => {
                    if (enabled) {
                        AccessibilityInfo.setAccessibilityFocus(reactTag);
                        AccessibilityInfo.setAccessibilityFocus(reactTag);
                        AccessibilityInfo.setAccessibilityFocus(reactTag);
                        AccessibilityInfo.setAccessibilityFocus(reactTag);
                        AccessibilityInfo.setAccessibilityFocus(reactTag);
                        AccessibilityInfo.setAccessibilityFocus(reactTag);
                        AccessibilityInfo.setAccessibilityFocus(reactTag);
                        AccessibilityInfo.setAccessibilityFocus(reactTag);
                        AccessibilityInfo.setAccessibilityFocus(reactTag);
                        AccessibilityInfo.setAccessibilityFocus(reactTag);
                    }
                });
            }
        }
    }, [isOpen, contentRef]);
    React.useEffect(() => {
        const finalFocusRefCurrentVal = finalFocusRef === null || finalFocusRef === void 0 ? void 0 : finalFocusRef.current;
        if (initialFocusRef && initialFocusRef.current) {
            initialFocusRef.current.focus();
        }
        return () => {
            if (finalFocusRefCurrentVal) {
                finalFocusRefCurrentVal.focus();
            }
        };
    }, [finalFocusRef, initialFocusRef]);
    useKeyboardDismissable({
        enabled: true,
        callback: onClose,
    });
    const overlayRef = React.useRef(null);
    const { overlayProps } = useOverlayPosition({
        placement: placement,
        targetRef,
        overlayRef,
        crossOffset,
        offset,
        shouldOverlapWithTrigger,
        shouldFlip,
    });
    if (Object.keys(overlayProps.style).length === 0) {
        overlayProps.style = {
            top: -1000,
            left: -1000,
        };
    }
    const mergedRef = mergeRefs([ref, overlayRef, contentRef]);
    return (<View id={popoverContentId} {...props} ref={mergedRef} collapsable={false} 
    // eslint-disable-next-line react-native/no-inline-styles
    style={Object.assign(Object.assign({ position: 'absolute' }, overlayProps === null || overlayProps === void 0 ? void 0 : overlayProps.style), style)} accessible={true}>
        {children}
      </View>);
});
export { PopoverContent };
//# sourceMappingURL=PopoverContent.jsx.map