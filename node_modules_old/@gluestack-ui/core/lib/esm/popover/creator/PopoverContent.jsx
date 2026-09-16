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
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef, useState } from 'react';
import { useKeyboardDismissable } from '@gluestack-ui/utils/aria';
import { usePopover } from './PopoverContext';
import { Platform, AccessibilityInfo, Keyboard, View } from 'react-native';
import { findNodeHandle, mergeRefs } from '@gluestack-ui/utils/common';
import { useOverlayPosition } from '../../overlay/aria';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';
import { FocusScope as FocusScopeAria } from '@gluestack-ui/utils/aria';
import { useDialog } from '@gluestack-ui/utils/aria';
import { PopoverContentProvider } from './PopoverContext';
import { getContainerStyle } from './utils';
const DEFAULT_ARROW_HEIGHT = 14, DEFAULT_ARROW_WIDTH = 14;
const isNumber = (value) => typeof value === 'number' && Number.isFinite(value);
const isAnchorResolved = (anchor) => {
    return (anchor &&
        isNumber(anchor.x) &&
        isNumber(anchor.y) &&
        isNumber(anchor.width) &&
        isNumber(anchor.height));
};
const anchorToTargetRect = (anchor) => {
    if (!anchor) {
        return undefined;
    }
    return {
        top: anchor.y,
        left: anchor.x,
        width: anchor.width,
        height: anchor.height,
    };
};
const PopoverContent = (StyledPopoverContent, AnimatePresence) => forwardRef((_a, ref) => {
    var { children, style } = _a, props = __rest(_a, ["children", "style"]);
    const { value } = usePopover('PopoverContext');
    const [arrowHeight, setArrowHeight] = useState(DEFAULT_ARROW_HEIGHT);
    const [arrowWidth, setArrowWidth] = useState(DEFAULT_ARROW_WIDTH);
    const [arrowElement, setArrowElement] = useState(null);
    const { targetRef, resolvedAnchor, shouldAnchorToTouchPoint, initialFocusRef, finalFocusRef, popoverContentId, headerMounted, bodyMounted, bodyId, headerId, isOpen, placement, shouldOverlapWithTrigger, crossOffset, offset, trapFocus, handleClose, shouldFlip, focusScope, } = value;
    const contentRef = React.useRef(null);
    React.useEffect(() => {
        if (contentRef) {
            const reactTag = findNodeHandle(contentRef.current);
            if (reactTag) {
                AccessibilityInfo.setAccessibilityFocus(reactTag);
            }
        }
    }, [isOpen, contentRef]);
    const { dialogProps } = useDialog(Object.assign({ initialFocusRef }, props), contentRef);
    React.useEffect(() => {
        var _a, _b, _c, _d;
        if (isOpen) {
            if (focusScope) {
                Keyboard.dismiss();
            }
            if (initialFocusRef &&
                (initialFocusRef === null || initialFocusRef === void 0 ? void 0 : initialFocusRef.current) &&
                ((_a = initialFocusRef === null || initialFocusRef === void 0 ? void 0 : initialFocusRef.current) === null || _a === void 0 ? void 0 : _a.focus)) {
                (_b = initialFocusRef === null || initialFocusRef === void 0 ? void 0 : initialFocusRef.current) === null || _b === void 0 ? void 0 : _b.focus();
            }
        }
        else {
            if (finalFocusRef &&
                (finalFocusRef === null || finalFocusRef === void 0 ? void 0 : finalFocusRef.current) &&
                ((_c = finalFocusRef === null || finalFocusRef === void 0 ? void 0 : finalFocusRef.current) === null || _c === void 0 ? void 0 : _c.focus)) {
                (_d = finalFocusRef === null || finalFocusRef === void 0 ? void 0 : finalFocusRef.current) === null || _d === void 0 ? void 0 : _d.focus();
            }
        }
    }, [initialFocusRef, finalFocusRef, isOpen, focusScope]);
    useKeyboardDismissable({
        enabled: true,
        callback: handleClose,
    });
    const accessibilityProps = Platform.OS === 'web'
        ? {
            'role': 'dialog',
            'aria-labelledby': headerMounted ? headerId : undefined,
            'aria-describedby': bodyMounted ? bodyId : undefined,
        }
        : {};
    const overlayRef = React.useRef(null);
    const targetRect = React.useMemo(() => shouldAnchorToTouchPoint
        ? anchorToTargetRect(resolvedAnchor)
        : undefined, [resolvedAnchor, shouldAnchorToTouchPoint]);
    const { overlayProps, arrowProps, placement: calculatedPlacement, isFlipped, } = useOverlayPosition({
        placement: placement,
        targetRef,
        targetRect,
        overlayRef,
        crossOffset,
        offset,
        shouldOverlapWithTrigger,
        shouldFlip,
    });
    if (Object.keys(overlayProps.style).length === 0 &&
        (!shouldAnchorToTouchPoint || !isAnchorResolved(resolvedAnchor))) {
        overlayProps.style = {
            top: -1000,
            left: -1000,
        };
    }
    const mergedRef = mergeRefs([ref, contentRef]);
    const updateArrowSize = ({ height, width, }) => {
        setArrowHeight(height);
        setArrowWidth(width);
    };
    const updateArrowElement = (element) => {
        setArrowElement(element);
    };
    const providerValues = React.useMemo(() => {
        return {
            arrowProps: arrowProps,
            arrowHeight,
            arrowWidth,
            updateArrowSize,
            updateArrowElement,
            actualPlacement: calculatedPlacement,
        };
    }, [calculatedPlacement, arrowProps, arrowHeight, arrowWidth]);
    const popoverContentStyle = React.useMemo(() => {
        const arrayConvertedStyles = Array.isArray(style) ? style : [style];
        const containerStyle = arrowElement
            ? getContainerStyle({
                placement: calculatedPlacement,
                arrowHeight: arrowHeight,
            })
            : {};
        return [containerStyle, arrayConvertedStyles];
    }, [calculatedPlacement, arrowHeight, style, arrowElement]);
    const initialAnimatedStyles = {
        opacity: 0,
        y: calculatedPlacement === 'top'
            ? 6
            : calculatedPlacement === 'bottom'
                ? -6
                : 0,
        x: calculatedPlacement === 'right'
            ? -6
            : calculatedPlacement === 'left'
                ? 6
                : 0,
    };
    const animatedStyles = {
        opacity: 1,
        y: 0,
        x: 0,
    };
    const exitAnimatedStyles = {
        opacity: 0,
    };
    return (<PopoverContentProvider value={Object.assign(Object.assign(Object.assign({}, value), providerValues), { isFlipped })}>
        <OverlayAnimatePresence visible={isOpen} AnimatePresence={AnimatePresence}>
          <View style={Object.assign({ position: 'absolute', 
            // To align items inside wrapper View
            alignItems: calculatedPlacement === 'right'
                ? 'flex-start'
                : calculatedPlacement === 'left'
                    ? 'flex-end'
                    : 'center' }, overlayProps === null || overlayProps === void 0 ? void 0 : overlayProps.style)} ref={overlayRef} 
    // DO NOT REMOVE THIS.
    collapsable={false}>
            {arrowElement}
            <FocusScopeComponent contain={trapFocus} restoreFocus autoFocus>
              <StyledPopoverContent id={popoverContentId} {...accessibilityProps} {...props} isOpen={isOpen} collapsable={false} {...dialogProps} tabIndex={Platform.OS === 'web' ? -1 : undefined} initial={initialAnimatedStyles} animate={animatedStyles} exit={exitAnimatedStyles} style={popoverContentStyle} ref={mergedRef} 
    // data attributes for uniwind
    data-flip={isFlipped ? 'true' : 'false'} 
    // data attributes for nativewind
    dataSet={{ flip: isFlipped ? 'true' : 'false' }} states={{
            flip: isFlipped,
        }}>
                {children}
              </StyledPopoverContent>
            </FocusScopeComponent>
          </View>
        </OverlayAnimatePresence>
      </PopoverContentProvider>);
});
const FocusScopeComponent = ({ trapFocus, focusScope, children }) => {
    if (focusScope)
        return (<FocusScopeAria contain={trapFocus} restoreFocus autoFocus>
        {children}
      </FocusScopeAria>);
    return children;
};
export default PopoverContent;
//# sourceMappingURL=PopoverContent.jsx.map