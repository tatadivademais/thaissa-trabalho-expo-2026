import React from 'react';
export const wrapStringChild = (children, StyledBoxText) => {
    return React.Children.map(children, (child) => {
        var _a, _b;
        return typeof child === 'string' ||
            typeof child === 'number' ||
            ((child === null || child === void 0 ? void 0 : child.type) === React.Fragment &&
                (typeof ((_a = child.props) === null || _a === void 0 ? void 0 : _a.children) === 'string' ||
                    typeof ((_b = child.props) === null || _b === void 0 ? void 0 : _b.children) === 'number')) ? (<StyledBoxText>{child}</StyledBoxText>) : (child);
    });
};
//# sourceMappingURL=wrapStringChild.jsx.map