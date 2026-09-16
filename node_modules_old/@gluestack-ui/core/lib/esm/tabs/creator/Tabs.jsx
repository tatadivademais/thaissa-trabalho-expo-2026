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
import React, { useState, useCallback, useMemo, forwardRef, useRef } from 'react';
import { TabsContext } from './Context';
export const Tabs = (StyledTabs) => forwardRef((_a, ref) => {
    var { value, defaultValue, onValueChange, orientation = 'horizontal', activationMode = 'automatic', disabled = false, children } = _a, props = __rest(_a, ["value", "defaultValue", "onValueChange", "orientation", "activationMode", "disabled", "children"]);
    // State management - support both controlled and uncontrolled
    const [selectedKeyState, setSelectedKeyState] = useState(defaultValue !== null && defaultValue !== void 0 ? defaultValue : null);
    const selectedKey = value !== undefined ? value : selectedKeyState;
    // List ref for measuring trigger layouts on native
    const listRef = useRef(null);
    const setSelectedKey = useCallback((key) => {
        if (value === undefined) {
            setSelectedKeyState(key);
        }
        onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(String(key));
    }, [value, onValueChange]);
    // Layout tracking for animated indicator
    const [triggerLayouts, setTriggerLayouts] = useState(new Map());
    // Layout tracking for content heights
    const [contentLayouts, setContentLayouts] = useState(new Map());
    // Scroll offset for FlatList positioning
    const [scrollOffset, setScrollOffset] = useState(0);
    const registerTrigger = useCallback((key, layout) => {
        setTriggerLayouts((prev) => {
            const next = new Map(prev);
            next.set(key, layout);
            return next;
        });
    }, []);
    const unregisterTrigger = useCallback((key) => {
        setTriggerLayouts((prev) => {
            const next = new Map(prev);
            next.delete(key);
            return next;
        });
    }, []);
    const registerContent = useCallback((key, layout) => {
        setContentLayouts((prev) => {
            const next = new Map(prev);
            next.set(key, layout);
            return next;
        });
    }, []);
    const unregisterContent = useCallback((key) => {
        setContentLayouts((prev) => {
            const next = new Map(prev);
            next.delete(key);
            return next;
        });
    }, []);
    const contextValue = useMemo(() => ({
        selectedKey,
        setSelectedKey,
        orientation,
        activationMode,
        isDisabled: disabled,
        triggerLayouts,
        registerTrigger,
        unregisterTrigger,
        contentLayouts,
        registerContent,
        unregisterContent,
        scrollOffset,
        setScrollOffset,
        listRef,
    }), [
        selectedKey,
        setSelectedKey,
        orientation,
        activationMode,
        disabled,
        triggerLayouts,
        registerTrigger,
        unregisterTrigger,
        contentLayouts,
        registerContent,
        unregisterContent,
        scrollOffset,
        setScrollOffset,
    ]);
    return (<TabsContext.Provider value={contextValue}>
          <StyledTabs ref={ref} {...props}>
            {children}
          </StyledTabs>
        </TabsContext.Provider>);
});
//# sourceMappingURL=Tabs.jsx.map