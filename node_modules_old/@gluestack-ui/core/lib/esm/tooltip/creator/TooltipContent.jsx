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
import { useTooltipContext } from './context';
import { mergeRefs } from '@gluestack-ui/utils/common';
import { useOverlayPosition } from '../../overlay/aria';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';
import { Platform, View } from 'react-native';
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
export function TooltipContent(StyledTooltipContent, AnimatePresence) {
    return forwardRef((_a, ref) => {
        var { children, style } = _a, props = __rest(_a, ["children", "style"]);
        const { value } = useTooltipContext('TooltipContext');
        const { isOpen, targetRef, resolvedAnchor, shouldAnchorToTouchPoint, placement, crossOffset, offset, shouldFlip, shouldOverlapWithTrigger, } = value;
        const overlayRef = React.useRef(null);
        const targetRect = React.useMemo(() => shouldAnchorToTouchPoint
            ? anchorToTargetRect(resolvedAnchor)
            : undefined, [resolvedAnchor, shouldAnchorToTouchPoint]);
        const { overlayProps, placement: calculatedPlacement } = useOverlayPosition({
            placement,
            targetRef,
            targetRect,
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
        const mergedRef = mergeRefs([ref, overlayRef]);
        const initialAnimatedStyles = {
            opacity: 0,
            scale: 0.9,
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
            x: 0,
            y: 0,
            scale: 1,
        };
        const exitAnimatedStyles = {
            opacity: 0,
            x: 0,
            y: 0,
        };
        return (<OverlayAnimatePresence visible={isOpen} AnimatePresence={AnimatePresence}>
        <View collapsable={false} ref={mergedRef} style={[overlayProps.style, { position: 'absolute' }]}>
          <StyledTooltipContent initial={initialAnimatedStyles} animate={animatedStyles} exit={exitAnimatedStyles} transition={{
                type: 'timing',
                duration: 100,
            }} {...props} style={style} ref={mergedRef} role={Platform.OS === 'web' ? 'tooltip' : undefined}>
            {children}
          </StyledTooltipContent>
        </View>
      </OverlayAnimatePresence>);
    });
}
//# sourceMappingURL=TooltipContent.jsx.map