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
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef } from 'react';
import { usePopoverContent } from './PopoverContext';
import { applyCrossOffsetToArrowStyle, applyOffsetToArrowEdgeStyles, getArrowStyles, } from './utils';
const PopoverArrow = (StyledPopoverArrow) => forwardRef((props, ref) => {
    const { offset: offsetProp = 0, crossOffset: crossOffsetProp = 0 } = props, rest = __rest(props, ["offset", "crossOffset"]);
    const { value: { placement, actualPlacement, updateArrowSize, arrowHeight, arrowWidth, arrowProps, updateArrowElement, isFlipped, }, } = usePopoverContent('PopoverContext');
    const additionalStyles = React.useMemo(() => {
        return getArrowStyles({
            height: arrowHeight,
            width: arrowWidth,
            actualPlacement,
        });
    }, [arrowHeight, arrowWidth, placement, actualPlacement]);
    React.useEffect(() => {
        var _a;
        const arrowStyle = applyCrossOffsetToArrowStyle((_a = arrowProps === null || arrowProps === void 0 ? void 0 : arrowProps.style) !== null && _a !== void 0 ? _a : {}, actualPlacement, crossOffsetProp);
        const adjustedTop = placement === 'right bottom' || placement === 'left bottom'
            ? arrowStyle.top > 4
                ? arrowStyle.top - 4
                : arrowStyle.top
            : arrowStyle.top;
        const edgeStyles = applyOffsetToArrowEdgeStyles(additionalStyles, actualPlacement, offsetProp);
        const ArrowComponent = (<StyledPopoverArrow ref={ref} onLayout={(event) => {
                const { height, width } = event.nativeEvent.layout;
                updateArrowSize({ height, width });
            }} {...rest} style={[
                rest === null || rest === void 0 ? void 0 : rest.style,
                arrowStyle,
                {
                    top: adjustedTop,
                },
                edgeStyles,
            ]} 
        // data attributes for uniwind
        data-flip={isFlipped ? 'true' : 'false'} 
        // data attributes for nativewind
        dataSet={{ flip: isFlipped ? 'true' : 'false' }} states={{
                flip: isFlipped,
            }}/>);
        updateArrowElement(ArrowComponent);
    }, [
        additionalStyles,
        placement,
        arrowHeight,
        arrowWidth,
        actualPlacement,
        JSON.stringify(arrowProps === null || arrowProps === void 0 ? void 0 : arrowProps.style),
        crossOffsetProp,
        offsetProp,
        isFlipped,
    ]);
    return null;
});
export default PopoverArrow;
//# sourceMappingURL=PopoverArrow.jsx.map