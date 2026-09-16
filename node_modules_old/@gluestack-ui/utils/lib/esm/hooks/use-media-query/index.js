import { useWindowDimensions } from 'react-native';
export function useMediaQuery(query) {
    const dims = useWindowDimensions();
    const height = dims === null || dims === void 0 ? void 0 : dims.height;
    const width = dims === null || dims === void 0 ? void 0 : dims.width;
    return iterateQuery(query, height, width);
}
function queryResolver(query, width, height) {
    for (const queryKey in query) {
        if (!calculateQuery(queryKey, query[queryKey], height, width)) {
            return false;
        }
    }
    return true;
}
function iterateQuery(query, height, width) {
    const queryResults = [];
    if (Array.isArray(query)) {
        query.forEach((subQuery) => {
            queryResults.push(queryResolver(subQuery, width, height));
        });
    }
    else {
        queryResults.push(queryResolver(query, width, height));
    }
    return queryResults;
}
function calculateQuery(key, val, height, width) {
    let retval;
    switch (key) {
        case 'maxWidth':
            retval = typeof val === 'number' && width ? width <= val : undefined;
            break;
        case 'minWidth':
            retval = typeof val === 'number' && width ? width >= val : undefined;
            break;
        case 'maxHeight':
            retval = typeof val === 'number' && height ? height <= val : undefined;
            break;
        case 'minHeight':
            retval = typeof val === 'number' && height ? height >= val : undefined;
            break;
        case 'orientation':
            if (val) {
                if (width && height && width > height) {
                    retval = typeof val === 'string' && val === 'landscape';
                }
                else {
                    retval = typeof val === 'string' && val === 'portrait';
                }
            }
            break;
        default:
            break;
    }
    return retval;
}
//# sourceMappingURL=index.js.map