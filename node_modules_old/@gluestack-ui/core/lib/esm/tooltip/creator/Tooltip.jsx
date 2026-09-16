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
import { useKeyboardDismissable } from '@gluestack-ui/utils/aria';
import { TooltipProvider } from './context';
import { useId } from '@gluestack-ui/utils/aria';
import { Platform } from 'react-native';
import { Overlay } from '../../overlay/creator';
import { composeEventHandlers, mergeRefs } from '@gluestack-ui/utils/common';
const INLINE_TEXT_ANCHOR_SIZE = 24;
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
const isFiniteNumber = (value) => typeof value === 'number' && Number.isFinite(value);
function Tooltip(StyledTooltip) {
    return forwardRef((_a, ref) => {
        var { isOpen: isOpenProp, isDisabled, defaultIsOpen = false, onClose, onOpen, openDelay = 350, closeDelay = 0, placement = 'bottom', children, closeOnClick = true, trigger, crossOffset, offset = 10, shouldOverlapWithTrigger = false, shouldFlip = true, 
        // @ts-ignore
        _experimentalOverlay = false } = _a, props = __rest(_a, ["isOpen", "isDisabled", "defaultIsOpen", "onClose", "onOpen", "openDelay", "closeDelay", "placement", "children", "closeOnClick", "trigger", "crossOffset", "offset", "shouldOverlapWithTrigger", "shouldFlip", "_experimentalOverlay"]);
        const [isOpen, setIsOpen] = useControllableState({
            value: isOpenProp,
            defaultValue: defaultIsOpen,
            onChange: (value) => {
                value ? onOpen && onOpen() : onClose && onClose();
            },
        });
        const handleOpen = React.useCallback(() => {
            setIsOpen(true);
        }, [setIsOpen]);
        const handleClose = React.useCallback(() => {
            setIsOpen(false);
        }, [setIsOpen]);
        const enterTimeout = React.useRef();
        const exitTimeout = React.useRef();
        const openWithDelay = React.useCallback(() => {
            if (!isDisabled) {
                enterTimeout.current = setTimeout(handleOpen, openDelay);
            }
        }, [isDisabled, handleOpen, openDelay]);
        const closeWithDelay = React.useCallback(() => {
            if (enterTimeout.current) {
                clearTimeout(enterTimeout.current);
            }
            exitTimeout.current = setTimeout(handleClose, closeDelay);
        }, [closeDelay, handleClose]);
        const tooltipID = useId();
        const targetRef = React.useRef(null);
        const isTextTriggerRef = React.useRef(false);
        const shouldAnchorToTouchPointRef = React.useRef(false);
        const [lastInteractionAnchor, setLastInteractionAnchor] = React.useState(null);
        const resolvedAnchor = React.useMemo(() => {
            if (!lastInteractionAnchor) {
                return null;
            }
            return {
                type: 'point',
                x: lastInteractionAnchor.x,
                y: lastInteractionAnchor.y,
                width: lastInteractionAnchor.width,
                height: lastInteractionAnchor.height,
            };
        }, [lastInteractionAnchor]);
        const captureInteractionPoint = React.useCallback((event) => {
            var _a, _b;
            const nativeEvent = (_a = event === null || event === void 0 ? void 0 : event.nativeEvent) !== null && _a !== void 0 ? _a : event;
            const pageX = nativeEvent === null || nativeEvent === void 0 ? void 0 : nativeEvent.pageX;
            const pageY = nativeEvent === null || nativeEvent === void 0 ? void 0 : nativeEvent.pageY;
            if (!isFiniteNumber(pageX) || !isFiniteNumber(pageY)) {
                shouldAnchorToTouchPointRef.current = false;
                return;
            }
            const fallbackToPointerAnchor = () => {
                if (!isTextTriggerRef.current) {
                    shouldAnchorToTouchPointRef.current = false;
                    return;
                }
                setLastInteractionAnchor({
                    x: pageX - INLINE_TEXT_ANCHOR_SIZE / 2,
                    y: pageY - INLINE_TEXT_ANCHOR_SIZE / 2,
                    width: INLINE_TEXT_ANCHOR_SIZE,
                    height: INLINE_TEXT_ANCHOR_SIZE,
                });
                shouldAnchorToTouchPointRef.current = true;
            };
            if (!((_b = targetRef.current) === null || _b === void 0 ? void 0 : _b.measureInWindow)) {
                fallbackToPointerAnchor();
                return;
            }
            targetRef.current.measureInWindow((x, y, width, height) => {
                const isValidLayout = isFiniteNumber(x) &&
                    isFiniteNumber(y) &&
                    isFiniteNumber(width) &&
                    isFiniteNumber(height) &&
                    width > 0 &&
                    height > 0;
                if (isValidLayout) {
                    const relativeY = Math.min(Math.max(pageY - y, 0), height);
                    setLastInteractionAnchor({
                        x,
                        y: y + relativeY,
                        width,
                        height: 1,
                    });
                    shouldAnchorToTouchPointRef.current = true;
                    return;
                }
                fallbackToPointerAnchor();
            });
        }, []);
        const handleLongPress = React.useCallback((event) => {
            captureInteractionPoint(event);
            openWithDelay();
        }, [captureInteractionPoint, openWithDelay]);
        React.useEffect(() => () => {
            clearTimeout(enterTimeout.current);
            clearTimeout(exitTimeout.current);
        }, []);
        const updatedTrigger = (reference) => {
            const mergedTriggerRef = mergeRefs([reference, targetRef]);
            const triggerElement = trigger({
                'ref': mergedTriggerRef,
                'collapsable': false,
                'onPress': composeEventHandlers(
                // newChildren.props.onPress,
                () => {
                    if (closeOnClick) {
                        closeWithDelay();
                    }
                }),
                'onLongPress': composeEventHandlers(
                // newChildren.props.onLongPress,
                handleLongPress),
                'onPressOut': composeEventHandlers(
                // newChildren.props.onPressOut,
                closeWithDelay),
                'onFocus': composeEventHandlers(
                // newChildren.props.onFocus,
                openWithDelay),
                'onBlur': composeEventHandlers(
                // newChildren.props.onBlur,
                closeWithDelay),
                'onMouseEnter': composeEventHandlers(
                // newChildren.props.onMouseEnter,
                openWithDelay),
                'onMouseLeave': composeEventHandlers(
                // newChildren.props.onMouseLeave,
                closeWithDelay),
                // 'ref': mergeRefs([newChildren.ref, targetRef]),
                'aria-describedby': isOpen ? tooltipID : undefined,
            }, { open: isOpen });
            isTextTriggerRef.current = isTextTriggerElement(triggerElement, mergedTriggerRef);
            if (!isTextTriggerRef.current) {
                shouldAnchorToTouchPointRef.current = false;
            }
            return triggerElement;
        };
        const triggerElement = updatedTrigger(targetRef);
        const activeAnchor = shouldAnchorToTouchPointRef.current
            ? resolvedAnchor
            : null;
        useKeyboardDismissable({
            enabled: isOpen,
            callback: () => setIsOpen(false),
        });
        if (_experimentalOverlay) {
            return (<>
            {triggerElement}
            <TooltipProvider value={{
                    placement,
                    targetRef,
                    resolvedAnchor: activeAnchor,
                    shouldAnchorToTouchPoint: shouldAnchorToTouchPointRef.current,
                    handleClose: handleClose,
                    isOpen,
                    crossOffset,
                    offset,
                    shouldOverlapWithTrigger,
                    shouldFlip,
                }}>
              <StyledTooltip {...props} ref={ref} role={Platform.OS === 'web' ? 'tooltip' : undefined} tabIndex={-1} id={tooltipID}>
                {children}
              </StyledTooltip>
            </TooltipProvider>
          </>);
        }
        return (<>
          {triggerElement}
          <Overlay isOpen={isOpen} onRequestClose={handleClose}>
            <TooltipProvider value={{
                placement,
                targetRef,
                resolvedAnchor: activeAnchor,
                shouldAnchorToTouchPoint: shouldAnchorToTouchPointRef.current,
                handleClose: handleClose,
                isOpen,
                crossOffset,
                offset,
                shouldOverlapWithTrigger,
                shouldFlip,
            }}>
              <StyledTooltip {...props} ref={ref} role={Platform.OS === 'web' ? 'tooltip' : undefined} focussable={false} id={tooltipID}>
                {children}
              </StyledTooltip>
            </TooltipProvider>
          </Overlay>
        </>);
    });
}
export { Tooltip };
//# sourceMappingURL=Tooltip.jsx.map