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
const AvatarImage = (StyledAvatarImage) => forwardRef((_a, ref) => {
    var { source } = _a, props = __rest(_a, ["source"]);
    const [error, setError] = React.useState(false);
    const getSource = () => {
        if (source) {
            if (source.hasOwnProperty('uri') && source.uri === null) {
                return source;
            }
            else if (!source.hasOwnProperty(source, 'uri')) {
                return source;
            }
        }
        return null;
    };
    const imageSource = getSource();
    return (<>
        {imageSource && !error && (<StyledAvatarImage ref={ref} {...props} source={source} onError={() => {
                setError(true);
            }}/>)}
      </>);
});
export default AvatarImage;
//# sourceMappingURL=AvatarImage.jsx.map