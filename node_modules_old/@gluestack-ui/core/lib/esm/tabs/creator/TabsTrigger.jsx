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
import React, { useCallback, useEffect, useState, useMemo, forwardRef, useRef, } from 'react';
import { Platform } from 'react-native';
import { TabsContext, TabsTriggerContext } from './Context';
import { composeEventHandlers } from '@gluestack-ui/utils/common';
//this is the trigger component for the tabs for testing 
export const TabsTrigger = (StyledTabsTrigger) => forwardRef((_a, ref) => {
    var { value, disabled = false, children } = _a, props = __rest(_a, ["value", "disabled", "children"]);
    const context = React.useContext(TabsContext);
    const innerRef = useRef(null);
    if (!context) {
        throw new Error('TabsTrigger must be used within a Tabs component');
    }
    const { selectedKey, setSelectedKey, isDisabled: tabsDisabled, registerTrigger, unregisterTrigger, activationMode, listRef, scrollOffset, } = context;
    // Ref so measureTrigger always reads the latest scroll without
    // becoming a new callback on every scroll tick.
    const scrollOffsetRef = useRef(scrollOffset);
    scrollOffsetRef.current = scrollOffset;
    const isSelected = selectedKey === value;
    const isDisabled = disabled || tabsDisabled;
    // Interaction states
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isFocusVisible, setIsFocusVisible] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    /**
     * ✅ Cross-platform layout measurement
     */
    const measureTrigger = useCallback(() => {
        var _a, _b, _c, _d;
        const node = innerRef.current;
        const parent = listRef === null || listRef === void 0 ? void 0 : listRef.current;
        if (!node || !parent)
            return;
        // 🌐 WEB (DOM)
        if (Platform.OS === 'web') {
            // Resolve real DOM nodes
            const domNode = 
            // @ts-ignore
            (_b = (_a = node === null || node === void 0 ? void 0 : node.unstable_getDOMNode) === null || _a === void 0 ? void 0 : _a.call(node)) !== null && _b !== void 0 ? _b : (node instanceof HTMLElement ? node : null);
            const parentDom = 
            // @ts-ignore
            (_d = (_c = parent === null || parent === void 0 ? void 0 : parent.unstable_getDOMNode) === null || _c === void 0 ? void 0 : _c.call(parent)) !== null && _d !== void 0 ? _d : (parent instanceof HTMLElement ? parent : null);
            if (!domNode || !parentDom)
                return;
            const rect = domNode.getBoundingClientRect();
            const parentRect = parentDom.getBoundingClientRect();
            // getBoundingClientRect gives the *visible* offset; add the
            // current scroll offset to recover the content position so the
            // indicator math (contentX - scrollOffset) stays correct even
            // when onLayout re-fires after the list has scrolled.
            const scrollLeft = scrollOffsetRef.current;
            registerTrigger(value, {
                x: rect.left - parentRect.left + scrollLeft,
                y: rect.top - parentRect.top,
                width: rect.width,
                height: rect.height,
            });
            return;
        }
        // 📱 NATIVE (iOS / Android)
        requestAnimationFrame(() => {
            node.measureInWindow((x, y, width, height) => {
                parent.measureInWindow((px, py) => {
                    registerTrigger(value, {
                        x: x - px,
                        y: y - py,
                        width,
                        height,
                    });
                });
            });
        });
    }, [value, registerTrigger, listRef]);
    /**
     * Measure on layout
     */
    const handleLayout = useCallback(() => {
        measureTrigger();
    }, [measureTrigger]);
    /**
     * Measure after mount on WEB (onLayout is unreliable)
     */
    useEffect(() => {
        if (Platform.OS === 'web') {
            requestAnimationFrame(measureTrigger);
        }
    }, [measureTrigger]);
    /**
     * Retry measurement on native if parent ref becomes available later
     */
    useEffect(() => {
        if (Platform.OS !== 'web' && (listRef === null || listRef === void 0 ? void 0 : listRef.current)) {
            requestAnimationFrame(measureTrigger);
        }
    }, [listRef === null || listRef === void 0 ? void 0 : listRef.current, measureTrigger]);
    /**
     * Cleanup
     */
    useEffect(() => {
        return () => {
            unregisterTrigger(value);
        };
    }, [value, unregisterTrigger]);
    /**
     * Interaction handlers
     */
    const handlePress = useCallback(() => {
        if (!isDisabled) {
            setSelectedKey(value);
        }
    }, [isDisabled, setSelectedKey, value]);
    const handleFocus = useCallback(() => {
        setIsFocused(true);
        setIsFocusVisible(true);
        if (activationMode === 'automatic' && !isDisabled) {
            setSelectedKey(value);
        }
    }, [activationMode, isDisabled, setSelectedKey, value]);
    const handleBlur = useCallback(() => {
        setIsFocused(false);
        setIsFocusVisible(false);
    }, []);
    /**
     * Merge refs
     */
    const setRefs = useCallback((node) => {
        innerRef.current = node;
        if (typeof ref === 'function') {
            ref(node);
        }
        else if (ref) {
            ref.current = node;
        }
    }, [ref]);
    /**
     * Context for children
     */
    const triggerContextValue = useMemo(() => ({
        value,
        isSelected,
        isDisabled,
        isHovered,
        isFocused,
        isFocusVisible,
        isPressed,
    }), [
        value,
        isSelected,
        isDisabled,
        isHovered,
        isFocused,
        isFocusVisible,
        isPressed,
    ]);
    /**
     * 🚫 Remove dataSet on WEB to avoid React DOM warning
     */
    const safeProps = Platform.OS === 'web'
        ? (() => {
            const _a = props, { dataSet } = _a, rest = __rest(_a, ["dataSet"]);
            return rest;
        })()
        : props;
    return (<TabsTriggerContext.Provider value={triggerContextValue}>
          <StyledTabsTrigger ref={setRefs} role="tab" aria-selected={isSelected} aria-disabled={isDisabled} aria-controls={`tabpanel-${value}`} disabled={isDisabled} onPress={handlePress} onFocus={composeEventHandlers(safeProps === null || safeProps === void 0 ? void 0 : safeProps.onFocus, handleFocus)} onBlur={composeEventHandlers(safeProps === null || safeProps === void 0 ? void 0 : safeProps.onBlur, handleBlur)} onMouseEnter={composeEventHandlers(safeProps === null || safeProps === void 0 ? void 0 : safeProps.onMouseEnter, () => setIsHovered(true))} onMouseLeave={composeEventHandlers(safeProps === null || safeProps === void 0 ? void 0 : safeProps.onMouseLeave, () => setIsHovered(false))} onPressIn={composeEventHandlers(safeProps === null || safeProps === void 0 ? void 0 : safeProps.onPressIn, () => setIsPressed(true))} onPressOut={composeEventHandlers(safeProps === null || safeProps === void 0 ? void 0 : safeProps.onPressOut, () => setIsPressed(false))} onLayout={composeEventHandlers(safeProps === null || safeProps === void 0 ? void 0 : safeProps.onLayout, handleLayout)} states={{
            selected: isSelected,
            disabled: isDisabled,
            hover: isHovered,
            focus: isFocused,
            focusVisible: isFocusVisible,
            active: isPressed,
        }} {...safeProps}>
            {children}
          </StyledTabsTrigger>
        </TabsTriggerContext.Provider>);
});
//# sourceMappingURL=TabsTrigger.jsx.map