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
import React, { forwardRef, useRef, useCallback } from 'react';
import { useTabsContext } from './Context';
export const TabsContent = (StyledTabsContent) => forwardRef((_a, ref) => {
    var { value, forceMount = false, children } = _a, props = __rest(_a, ["value", "forceMount", "children"]);
    const { selectedKey, registerContent, unregisterContent } = useTabsContext('TabsContent');
    const contentRef = useRef(null);
    const isSelected = selectedKey === value;
    // Handle layout measurement
    const handleLayout = useCallback((event) => {
        const { height, width, x, y } = event.nativeEvent.layout;
        registerContent(value, { height, width, x, y });
    }, [value, registerContent]);
    // Cleanup on unmount
    React.useEffect(() => {
        return () => {
            unregisterContent(value);
        };
    }, [value, unregisterContent]);
    // Don't render content unless selected or forceMount is true
    if (!isSelected && !forceMount) {
        return null;
    }
    return (<StyledTabsContent ref={contentRef} role="tabpanel" id={`tabpanel-${value}`} aria-labelledby={`tab-${value}`} onLayout={handleLayout} dataSet={{
            selected: isSelected,
        }} {...props}>
        {children}
      </StyledTabsContent>);
});
//# sourceMappingURL=TabsContent.jsx.map