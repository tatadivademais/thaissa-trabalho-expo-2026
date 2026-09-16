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
import React from 'react';
import { Svg } from 'react-native-svg';
import { createIcon } from '../createIcon';
export { Svg };
export const PrimitiveIcon = React.forwardRef((_a, ref) => {
    var { height, width, fill, color, classNameColor, size, stroke = 'currentColor', as: AsComp, style } = _a, props = __rest(_a, ["height", "width", "fill", "color", "classNameColor", "size", "stroke", "as", "style"]);
    color = color !== null && color !== void 0 ? color : classNameColor;
    const sizeProps = React.useMemo(() => {
        if (size) {
            if (typeof size === 'number')
                return { size };
            return {};
        }
        // NativeWind v5 passes className-derived dimensions via the style prop.
        // Extract height/width from style as fallback for components like Lucide icons
        // that require explicit size props and don't read from the style object.
        const styleObj = (Array.isArray(style) ? style[0] : style);
        const h = height !== null && height !== void 0 ? height : styleObj === null || styleObj === void 0 ? void 0 : styleObj.height;
        const w = width !== null && width !== void 0 ? width : styleObj === null || styleObj === void 0 ? void 0 : styleObj.width;
        if (h && w)
            return { height: h, width: w };
        if (h)
            return { height: h };
        if (w)
            return { width: w };
        return {};
    }, [size, height, width, style]);
    let colorProps = {};
    if (fill) {
        colorProps = Object.assign(Object.assign({}, colorProps), { fill: fill });
    }
    if (stroke !== 'currentColor') {
        colorProps = Object.assign(Object.assign({}, colorProps), { stroke: stroke });
    }
    else if (stroke === 'currentColor' && color !== undefined) {
        colorProps = Object.assign(Object.assign({}, colorProps), { stroke: color });
    }
    if (AsComp) {
        return (<AsComp ref={ref} {...props} style={style} {...sizeProps} {...colorProps}/>);
    }
    return (<Svg ref={ref} height={height} width={width} {...colorProps} {...props}/>);
});
export const UIIcon = createIcon({
    Root: PrimitiveIcon,
});
//# sourceMappingURL=index.jsx.map