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
const getFirstCharacters = (str) => {
    const words = str.split(' ');
    let result = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            result += words[i].charAt(0);
        }
        if (result.length >= 2) {
            break;
        }
    }
    return result.toUpperCase();
};
export const AvatarFallbackText = (StyledAvatarFallbackText) => forwardRef((_a, ref) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    let fallbackText = '';
    if (typeof children === 'string') {
        fallbackText = getFirstCharacters(children);
    }
    return (<StyledAvatarFallbackText ref={ref} {...props}>
        {fallbackText}
      </StyledAvatarFallbackText>);
});
//# sourceMappingURL=AvatarFallbackText.jsx.map