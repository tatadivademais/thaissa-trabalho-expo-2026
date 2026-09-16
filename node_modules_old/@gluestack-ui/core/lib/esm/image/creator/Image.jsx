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
export const Image = (StyledImage) => forwardRef((_a, ref) => {
    var props = __rest(_a, []);
    // Handle different source formats
    let source = props.source;
    if (!source) {
        console.warn('Image component requires a source prop');
        return null;
    }
    if (typeof source === 'number') {
        // Handle case where source is a number (require() result)
        source = source; // Pass the number directly to React Native
    }
    else if (typeof source === 'object') {
        if (source.uri) {
            if (typeof source.uri === 'number') {
                // Handle case where uri is a require() result
                source = source.uri;
            }
            else {
                // Regular object with uri string
                source = source;
            }
        }
        else {
            // Check if source.uri is not defined or falsy
            source = {
                uri: source.default ? source.default.src : source,
            };
        }
    }
    else if (typeof source === 'string') {
        source = { uri: source };
    }
    const { alt } = props, resolvedProps = __rest(props, ["alt"]);
    if (typeof alt !== 'string') {
        console.warn('Please pass alt prop to Image component');
    }
    return (<StyledImage {...resolvedProps} source={source} aria-label={(props === null || props === void 0 ? void 0 : props['aria-label']) || alt} role={(props === null || props === void 0 ? void 0 : props.role) || 'img'} alt={alt} ref={ref}/>);
});
//# sourceMappingURL=Image.jsx.map