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
import { Platform } from 'react-native';
export const SelectSectionList = (StyledSelectSectionList) => forwardRef((_a, ref) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    if (Platform.OS === 'web') {
        return (<>
          {props.sections.map((section) => {
                return (<optgroup label={section.title} ref={ref}>
                {section.data.map((item) => (<option value={item}>{item}</option>))}
              </optgroup>);
            })}
        </>);
    }
    return (<StyledSelectSectionList {...props} ref={ref}>
        {children}
      </StyledSelectSectionList>);
});
//# sourceMappingURL=SelectSectionList.jsx.map