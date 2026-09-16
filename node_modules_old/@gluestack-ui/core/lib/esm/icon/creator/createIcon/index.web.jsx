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
const ChildPath = ({ element, fill, stroke: pathStroke }) => {
    const pathStrokeColor = pathStroke || '';
    const fillColor = fill || '';
    if (!element) {
        return null;
    }
    if (element.type === React.Fragment) {
        return element;
    }
    return React.cloneElement(element, {
        fill: fillColor ? fillColor : 'currentColor',
        stroke: pathStrokeColor,
    });
};
export function createIcon(_a) {
    var { Root, path, d } = _a, initialProps = __rest(_a, ["Root", "path", "d"]);
    const IconTemp = forwardRef((props, ref) => {
        var _a;
        let children = path;
        if (d && (!path || Object.keys(path).length === 0)) {
            children = <path fill="currentColor" d={d}/>;
        }
        const finalProps = Object.assign(Object.assign({}, initialProps), props);
        const { stroke = 'currentColor', color, role = 'img' } = finalProps, resolvedProps = __rest(finalProps, ["stroke", "color", "role"]);
        let type = resolvedProps.type;
        if (type === undefined) {
            type = 'svg';
        }
        let colorProps = {};
        if (color) {
            colorProps = Object.assign(Object.assign({}, colorProps), { color: color });
        }
        if (stroke) {
            colorProps = Object.assign(Object.assign({}, colorProps), { stroke: stroke });
        }
        let sizeProps = {};
        let sizeStyle = {};
        if (type === 'font') {
            if (resolvedProps.sx) {
                sizeProps = Object.assign(Object.assign({}, sizeProps), { fontSize: (_a = resolvedProps === null || resolvedProps === void 0 ? void 0 : resolvedProps.sx) === null || _a === void 0 ? void 0 : _a.h });
            }
            if (resolvedProps.size) {
                // sizeProps = { ...sizeProps, fontSize: resolvedProps?.size };
            }
        }
        return (<Root {...resolvedProps} {...colorProps} role={role} ref={ref} {...sizeProps} {...sizeStyle}>
        {React.Children.count(children) > 0 ? (<g>
            {React.Children.map(children, (child, i) => {
                    var _a;
                    return (<ChildPath key={(_a = child === null || child === void 0 ? void 0 : child.key) !== null && _a !== void 0 ? _a : i} element={child} {...child === null || child === void 0 ? void 0 : child.props}/>);
                })}
          </g>) : null}
      </Root>);
    });
    const Icon = IconTemp;
    return Icon;
}
//# sourceMappingURL=index.web.jsx.map