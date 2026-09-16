import { Dimensions, useWindowDimensions } from 'react-native';
import { useEffect, useState } from 'react';
import { theme } from '../../tailwind.config';
const screenSize = theme.screens;
const resolveScreenWidth = { default: 0 };
Object.entries(screenSize).forEach(([key, value]) => {
    if (typeof value === 'string') {
        resolveScreenWidth[key] = parseInt(value.replace('px', ''), 10);
    }
});
export const getBreakPointValue = (values, width) => {
    if (typeof values !== 'object')
        return values;
    let finalBreakPointResolvedValue;
    const mediaQueriesBreakpoints = [
        {
            key: 'default',
            breakpoint: 0,
            isValid: true,
        },
    ];
    Object.keys(resolveScreenWidth).forEach((key) => {
        const isValid = isValidBreakpoint(resolveScreenWidth[key], width);
        mediaQueriesBreakpoints.push({
            key,
            breakpoint: resolveScreenWidth[key],
            isValid,
        });
    });
    mediaQueriesBreakpoints.sort((a, b) => a.breakpoint - b.breakpoint);
    mediaQueriesBreakpoints.forEach((breakpoint, index) => {
        var _a, _b;
        breakpoint.value = values.hasOwnProperty(breakpoint.key)
            ? values[breakpoint.key]
            : ((_a = mediaQueriesBreakpoints[index - 1]) === null || _a === void 0 ? void 0 : _a.value) ||
                ((_b = mediaQueriesBreakpoints[0]) === null || _b === void 0 ? void 0 : _b.value);
    });
    const lastValidObject = getLastValidObject(mediaQueriesBreakpoints);
    if (!lastValidObject) {
        finalBreakPointResolvedValue = values;
    }
    else {
        finalBreakPointResolvedValue = lastValidObject.value;
    }
    return finalBreakPointResolvedValue;
};
export function useBreakpointValue(values) {
    const { width } = useWindowDimensions();
    const [currentBreakPointValue, setCurrentBreakPointValue] = useState(getBreakPointValue(values, width));
    useEffect(() => {
        if (typeof values === 'object') {
            const finalBreakPointResolvedValue = getBreakPointValue(values, width);
            setCurrentBreakPointValue(finalBreakPointResolvedValue);
        }
    }, [values, width]);
    if (typeof values !== 'object')
        return values;
    return currentBreakPointValue;
}
export function isValidBreakpoint(breakPointWidth, width) {
    var _a;
    if (width === void 0) { width = ((_a = Dimensions.get('window')) === null || _a === void 0 ? void 0 : _a.width) || 0; }
    const windowWidth = width;
    return windowWidth >= breakPointWidth;
}
function getLastValidObject(mediaQueries) {
    for (let i = mediaQueries.length - 1; i >= 0; i--) {
        if (mediaQueries[i].isValid) {
            return mediaQueries[i];
        }
    }
    return null; // No valid object found
}
//# sourceMappingURL=index.js.map