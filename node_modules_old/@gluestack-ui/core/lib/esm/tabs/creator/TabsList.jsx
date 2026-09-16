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
import React, { useCallback, useRef, forwardRef } from 'react';
import { useTabsContext } from './Context';
export const TabsList = (StyledTabsList) => forwardRef((_a, ref) => {
    var { children, scrollable = false, snapToCenter = true } = _a, props = __rest(_a, ["children", "scrollable", "snapToCenter"]);
    const { orientation, activationMode, setSelectedKey } = useTabsContext('TabsList');
    const listRef = useRef(null);
    // Keyboard navigation handler
    const handleKeyDown = useCallback((event) => {
        var _a, _b;
        const key = event.key;
        // Get all trigger elements
        const triggers = ((_a = listRef.current) === null || _a === void 0 ? void 0 : _a.querySelectorAll)
            ? Array.from(listRef.current.querySelectorAll('[role="tab"]'))
            : [];
        if (triggers.length === 0)
            return;
        const currentIndex = triggers.findIndex((trigger) => trigger === event.target);
        if (currentIndex === -1)
            return;
        let nextIndex = currentIndex;
        // Handle arrow keys based on orientation
        if (orientation === 'horizontal') {
            if (key === 'ArrowLeft') {
                nextIndex = currentIndex - 1;
                if (nextIndex < 0)
                    nextIndex = triggers.length - 1;
                event.preventDefault();
            }
            else if (key === 'ArrowRight') {
                nextIndex = currentIndex + 1;
                if (nextIndex >= triggers.length)
                    nextIndex = 0;
                event.preventDefault();
            }
        }
        else {
            // vertical
            if (key === 'ArrowUp') {
                nextIndex = currentIndex - 1;
                if (nextIndex < 0)
                    nextIndex = triggers.length - 1;
                event.preventDefault();
            }
            else if (key === 'ArrowDown') {
                nextIndex = currentIndex + 1;
                if (nextIndex >= triggers.length)
                    nextIndex = 0;
                event.preventDefault();
            }
        }
        // Handle Home/End
        if (key === 'Home') {
            nextIndex = 0;
            event.preventDefault();
        }
        else if (key === 'End') {
            nextIndex = triggers.length - 1;
            event.preventDefault();
        }
        if (nextIndex !== currentIndex) {
            const nextTrigger = triggers[nextIndex];
            nextTrigger === null || nextTrigger === void 0 ? void 0 : nextTrigger.focus();
            // Automatic activation - select on focus
            if (activationMode === 'automatic') {
                const value = nextTrigger === null || nextTrigger === void 0 ? void 0 : nextTrigger.getAttribute('data-value');
                if (value) {
                    setSelectedKey(value);
                }
            }
        }
        // Manual activation - select on Enter/Space
        if (activationMode === 'manual' && (key === 'Enter' || key === ' ')) {
            const value = (_b = event.target) === null || _b === void 0 ? void 0 : _b.getAttribute('data-value');
            if (value) {
                setSelectedKey(value);
                event.preventDefault();
            }
        }
    }, [orientation, activationMode, setSelectedKey]);
    return (<StyledTabsList ref={(node) => {
            listRef.current = node;
            if (typeof ref === 'function') {
                ref(node);
            }
            else if (ref) {
                ref.current = node;
            }
        }} role="tablist" aria-orientation={orientation} onKeyDown={handleKeyDown} {...props}>
        {children}
      </StyledTabsList>);
});
//# sourceMappingURL=TabsList.jsx.map