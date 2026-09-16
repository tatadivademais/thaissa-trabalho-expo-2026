//@ts-nocheck
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
import { calculatePosition } from './calculatePosition';
import { useCallback, useRef, useState, } from 'react';
import { useCloseOnScroll } from './useCloseOnScroll';
import { isRTL, useLayoutEffect } from '@gluestack-ui/utils/aria';
// @ts-ignore
let visualViewport = typeof window !== 'undefined' && window.visualViewport;
/**
 * Handles positioning overlays like popovers and menus relative to a trigger
 * element, and updating the position when the window resizes.
 */
export function useOverlayPosition(props) {
    var _a, _b;
    const direction = isRTL() ? 'rtl' : undefined;
    let { targetRef, targetRect, overlayRef, scrollRef = overlayRef, placement = 'bottom', containerPadding = 12, shouldFlip = true, boundaryElement = typeof document !== 'undefined' ? document.body : null, offset = 0, crossOffset = 0, shouldUpdatePosition = true, isOpen = true, shouldOverlapWithTrigger = false, onClose, } = props;
    const scrollTriggerRef = targetRef !== null && targetRef !== void 0 ? targetRef : { current: null };
    let [position, setPosition] = useState({
        position: {},
        arrowOffsetLeft: undefined,
        arrowOffsetTop: undefined,
        maxHeight: undefined,
        placement: undefined,
    });
    let deps = [
        shouldUpdatePosition,
        placement,
        overlayRef.current,
        (_a = targetRef === null || targetRef === void 0 ? void 0 : targetRef.current) === null || _a === void 0 ? void 0 : _a.offsetLeft,
        (_b = targetRef === null || targetRef === void 0 ? void 0 : targetRef.current) === null || _b === void 0 ? void 0 : _b.offsetTop,
        targetRect === null || targetRect === void 0 ? void 0 : targetRect.top,
        targetRect === null || targetRect === void 0 ? void 0 : targetRect.left,
        targetRect === null || targetRect === void 0 ? void 0 : targetRect.width,
        targetRect === null || targetRect === void 0 ? void 0 : targetRect.height,
        scrollRef.current,
        containerPadding,
        shouldFlip,
        boundaryElement,
        offset,
        crossOffset,
        isOpen,
        direction,
        shouldOverlapWithTrigger,
    ];
    let updatePosition = useCallback(() => {
        if (shouldUpdatePosition === false ||
            !isOpen ||
            !overlayRef.current ||
            (!(targetRef === null || targetRef === void 0 ? void 0 : targetRef.current) && !targetRect) ||
            !scrollRef.current ||
            !boundaryElement) {
            return;
        }
        setPosition(calculatePosition({
            placement: translateRTL(placement, direction),
            overlayNode: overlayRef.current,
            targetNode: targetRef === null || targetRef === void 0 ? void 0 : targetRef.current,
            targetRect,
            scrollNode: scrollRef.current,
            padding: containerPadding,
            shouldFlip,
            boundaryElement,
            offset,
            crossOffset,
            shouldOverlapWithTrigger,
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
    // Update position when anything changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useLayoutEffect(updatePosition, deps);
    // Update position on window resize
    useResize(updatePosition);
    // Reposition the overlay and do not close on scroll while the visual viewport is resizing.
    // This will ensure that overlays adjust their positioning when the iOS virtual keyboard appears.
    let isResizing = useRef(false);
    useLayoutEffect(() => {
        let timeout;
        let onResize = () => {
            isResizing.current = true;
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                isResizing.current = false;
            }, 500);
            updatePosition();
        };
        visualViewport === null || visualViewport === void 0 ? void 0 : visualViewport.addEventListener('resize', onResize);
        return () => {
            visualViewport === null || visualViewport === void 0 ? void 0 : visualViewport.removeEventListener('resize', onResize);
        };
    }, [updatePosition]);
    let close = useCallback(() => {
        if (!isResizing.current) {
            onClose();
        }
    }, [onClose, isResizing]);
    // When scrolling a parent scrollable region of the trigger (other than the body),
    // we hide the popover. Otherwise, its position would be incorrect.
    useCloseOnScroll({
        triggerRef: scrollTriggerRef,
        isOpen,
        onClose: onClose ? close : undefined,
    });
    // useLayoutEffect(() => {
    //   const mutationObserver = new MutationObserver((mutations) => {
    //     updatePosition();
    //     mutations.forEach((mutation) => {
    //       // if (mutation.attributeName === 'style') {
    //       //   const transform = mutation.target.style.transform;
    //       //   if (transform) {
    //       //     const match = transform.match(/scale\((.+)\)/);
    //       //     if (match) {
    //       //       const scale = parseFloat(match[1]);
    //       //       console.log(`Scale: ${scale}`);
    //       //       // updatePosition();
    //       //     }
    //       //   }
    //       // }
    //     });
    //   });
    //   mutationObserver.observe(overlayRef?.current, { attributes: true });
    //   return () => mutationObserver.disconnect();
    // }, [overlayRef, updatePosition]);
    return {
        rendered: true,
        overlayProps: {
            style: Object.assign(Object.assign({ position: 'absolute', zIndex: 100000 }, position.position), { maxHeight: position.maxHeight }),
        },
        placement: position.placement,
        arrowProps: {
            style: {
                left: position.arrowOffsetLeft,
                top: position.arrowOffsetTop,
            },
        },
        isFlipped: position.isFlipped,
        updatePosition,
    };
}
function useResize(onResize) {
    useLayoutEffect(() => {
        window.addEventListener('resize', onResize, false);
        return () => {
            window.removeEventListener('resize', onResize, false);
        };
    }, [onResize]);
}
function translateRTL(position, direction) {
    if (direction === 'rtl') {
        return position.replace('start', 'right').replace('end', 'left');
    }
    return position.replace('start', 'left').replace('end', 'right');
}
//# sourceMappingURL=useOverlayPosition.js.map