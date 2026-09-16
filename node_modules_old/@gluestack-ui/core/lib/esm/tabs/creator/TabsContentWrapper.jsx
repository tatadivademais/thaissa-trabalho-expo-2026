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
import { useTabsContext } from './Context';
export const TabsContentWrapper = (StyledTabsContentWrapper) => forwardRef((_a, ref) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const { selectedKey, contentLayouts } = useTabsContext('TabsContentWrapper');
    // Get the height of the selected content
    const selectedLayout = selectedKey ? contentLayouts.get(selectedKey) : null;
    const targetHeight = (selectedLayout === null || selectedLayout === void 0 ? void 0 : selectedLayout.height) || 0;
    return (<StyledTabsContentWrapper ref={ref} targetHeight={targetHeight} {...props}>
        {children}
      </StyledTabsContentWrapper>);
});
//# sourceMappingURL=TabsContentWrapper.jsx.map