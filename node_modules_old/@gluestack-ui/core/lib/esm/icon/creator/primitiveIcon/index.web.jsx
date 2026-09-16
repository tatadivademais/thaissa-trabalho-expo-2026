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
import { createIcon } from '../createIcon';
const accessClassName = (style) => {
    if (!style)
        return undefined;
    // NativeWind v5 (react-native-css) passes style as an array: [prevStyle, { $$css: true, <propKey>: classString }]
    // Search for the $$css object regardless of its position in the array.
    const styleObject = Array.isArray(style)
        ? style.find((s) => s && typeof s === 'object' && '$$css' in s)
        : style;
    if (!styleObject)
        return undefined;
    const keys = Object.keys(styleObject);
    if (keys.length < 2)
        return undefined;
    return styleObject[keys[1]];
};
const Svg = React.forwardRef((_a, ref) => {
    var { style, className } = _a, props = __rest(_a, ["style", "className"]);
    const calculateClassName = React.useMemo(() => {
        return className === undefined ? accessClassName(style) : className;
    }, [className, style]);
    return <svg ref={ref} {...props} className={calculateClassName}/>;
});
const PrimitiveIcon = React.forwardRef((_a, ref) => {
    var { height, width, fill, color, classNameColor, size, stroke, as: AsComp } = _a, props = __rest(_a, ["height", "width", "fill", "color", "classNameColor", "size", "stroke", "as"]);
    color = color !== null && color !== void 0 ? color : classNameColor;
    const sizeProps = React.useMemo(() => {
        if (size)
            return { size };
        if (height && width)
            return { height, width };
        if (height)
            return { height };
        if (width)
            return { width };
        return {};
    }, [size, height, width]);
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
        return <AsComp ref={ref} {...props} {...sizeProps} {...colorProps}/>;
    }
    return (<Svg ref={ref} height={height} width={width} {...colorProps} {...props}/>);
});
const UIIcon = createIcon({
    Root: PrimitiveIcon,
});
export { PrimitiveIcon, Svg, UIIcon };
//# sourceMappingURL=index.web.jsx.map