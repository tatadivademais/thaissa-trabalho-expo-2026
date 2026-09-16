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
import { useControllableState } from '@gluestack-ui/utils/hooks';
import { Overlay } from '../../overlay/creator';
import { PopoverProvider } from './PopoverContext';
import { mergeRefs } from '@gluestack-ui/utils/common';
const POINT_SIZE = 1;
const getElementRef = (element) => { var _a, _b; return (_b = (_a = element === null || element === void 0 ? void 0 : element.props) === null || _a === void 0 ? void 0 : _a.ref) !== null && _b !== void 0 ? _b : element === null || element === void 0 ? void 0 : element.ref; };
const getElementTypeName = (type) => {
    var _a, _b;
    return (type === null || type === void 0 ? void 0 : type.displayName) ||
        (type === null || type === void 0 ? void 0 : type.name) ||
        ((_a = type === null || type === void 0 ? void 0 : type.render) === null || _a === void 0 ? void 0 : _a.displayName) ||
        ((_b = type === null || type === void 0 ? void 0 : type.render) === null || _b === void 0 ? void 0 : _b.name);
};
const isTextElementType = (type) => {
    const name = getElementTypeName(type);
    return name === 'Text';
};
const isTextTriggerElement = (element, reference) => {
    var _a;
    if (!React.isValidElement(element)) {
        return false;
    }
    if (getElementRef(element) === reference) {
        return isTextElementType(element.type);
    }
    return React.Children.toArray((_a = element.props) === null || _a === void 0 ? void 0 : _a.children).some((child) => isTextTriggerElement(child, reference));
};
export const Popover = (StyledPopover) => forwardRef((_a, ref) => {
    var { onOpen, trigger, onClose, isOpen: isOpenProp, children, defaultIsOpen = false, initialFocusRef, finalFocusRef, useRNModal, focusScope = true, trapFocus = true, placement = 'bottom', shouldOverlapWithTrigger = false, crossOffset, offset, isKeyboardDismissable = true, shouldFlip, 
    // @ts-ignore
    _experimentalOverlay = false } = _a, props = __rest(_a, ["onOpen", "trigger", "onClose", "isOpen", "children", "defaultIsOpen", "initialFocusRef", "finalFocusRef", "useRNModal", "focusScope", "trapFocus", "placement", "shouldOverlapWithTrigger", "crossOffset", "offset", "isKeyboardDismissable", "shouldFlip", "_experimentalOverlay"]);
    const [isOpen, setIsOpen] = useControllableState({
        value: isOpenProp,
        defaultValue: defaultIsOpen,
        onChange: (value) => {
            value ? onOpen && onOpen() : onClose && onClose();
        },
    });
    const [bodyMounted, setBodyMounted] = React.useState(false);
    const [headerMounted, setHeaderMounted] = React.useState(false);
    var idCounter = 0;
    function uniqueId(prefix = '') {
        var id = ++idCounter;
        return prefix + id;
    }
    const id = uniqueId();
    const popoverContentId = `${id}-content`;
    const headerId = `${popoverContentId}-header`;
    const bodyId = `${popoverContentId}-body`;
    const handleOpen = React.useCallback(() => {
        setIsOpen(true);
    }, [setIsOpen]);
    const handleClose = React.useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);
    const targetRef = React.useRef(null);
    const shouldAnchorToTouchPointRef = React.useRef(false);
    const [lastInteractionPoint, setLastInteractionPoint] = React.useState(null);
    const resolvedAnchor = React.useMemo(() => {
        if (!lastInteractionPoint) {
            return null;
        }
        return {
            type: 'point',
            x: lastInteractionPoint.x,
            y: lastInteractionPoint.y,
            width: POINT_SIZE,
            height: POINT_SIZE,
        };
    }, [lastInteractionPoint]);
    const captureInteractionPoint = React.useCallback((event) => {
        var _a, _b, _c, _d;
        const pageX = (_b = (_a = event === null || event === void 0 ? void 0 : event.nativeEvent) === null || _a === void 0 ? void 0 : _a.pageX) !== null && _b !== void 0 ? _b : event === null || event === void 0 ? void 0 : event.pageX;
        const pageY = (_d = (_c = event === null || event === void 0 ? void 0 : event.nativeEvent) === null || _c === void 0 ? void 0 : _c.pageY) !== null && _d !== void 0 ? _d : event === null || event === void 0 ? void 0 : event.pageY;
        if (typeof pageX === 'number' &&
            Number.isFinite(pageX) &&
            typeof pageY === 'number' &&
            Number.isFinite(pageY)) {
            setLastInteractionPoint({ x: pageX, y: pageY });
        }
    }, []);
    const handleTriggerPress = React.useCallback((event) => {
        captureInteractionPoint(event);
        handleOpen();
    }, [captureInteractionPoint, handleOpen]);
    const updatedTrigger = (reference) => {
        const mergedTriggerRef = mergeRefs([reference, targetRef]);
        const triggerElement = trigger({
            'ref': mergedTriggerRef,
            'onPress': handleTriggerPress,
            'onClick': handleTriggerPress,
            'aria-expanded': isOpen ? true : false,
            'aria-controls': isOpen ? popoverContentId : undefined,
            'aria-haspopup': true,
        }, { open: isOpen });
        shouldAnchorToTouchPointRef.current = isTextTriggerElement(triggerElement, mergedTriggerRef);
        return triggerElement;
    };
    // let floatingParams: any = {};
    // if (Platform.OS === 'web') {
    //   floatingParams = { whileElementsMounted: autoUpdate };
    // }
    const triggerElement = updatedTrigger(targetRef);
    const activeAnchor = shouldAnchorToTouchPointRef.current
        ? resolvedAnchor
        : null;
    const contextValue = React.useMemo(() => {
        return {
            targetRef,
            resolvedAnchor: activeAnchor,
            shouldAnchorToTouchPoint: shouldAnchorToTouchPointRef.current,
            strategy: 'absolute',
            handleClose,
            initialFocusRef,
            finalFocusRef,
            popoverContentId,
            bodyId,
            headerId,
            headerMounted,
            bodyMounted,
            setBodyMounted,
            setHeaderMounted,
            isOpen,
            placement,
            shouldOverlapWithTrigger,
            crossOffset,
            offset,
            focusScope,
            trapFocus,
            shouldFlip,
        };
    }, [
        targetRef,
        activeAnchor,
        handleClose,
        initialFocusRef,
        finalFocusRef,
        popoverContentId,
        bodyId,
        headerId,
        headerMounted,
        bodyMounted,
        setBodyMounted,
        setHeaderMounted,
        isOpen,
        placement,
        shouldOverlapWithTrigger,
        crossOffset,
        offset,
        focusScope,
        trapFocus,
        shouldFlip,
    ]);
    if (_experimentalOverlay) {
        return (<>
            {triggerElement}
            <PopoverProvider value={contextValue}>
              <StyledPopover ref={ref} {...props}>
                {children}
              </StyledPopover>
            </PopoverProvider>
          </>);
    }
    return (<>
          {triggerElement}
          <Overlay isOpen={isOpen} onRequestClose={handleClose} isKeyboardDismissable={isKeyboardDismissable} useRNModal={useRNModal}>
            <PopoverProvider value={contextValue}>
              <StyledPopover ref={ref} {...props}>
                {children}
              </StyledPopover>
            </PopoverProvider>
          </Overlay>
        </>);
});
//# sourceMappingURL=Popover.jsx.map