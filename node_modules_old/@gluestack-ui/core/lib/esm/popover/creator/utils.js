const getDiagonalLength = (arrowHeight, arrowWidth) => {
    return Math.pow(arrowHeight * arrowHeight + arrowWidth * arrowWidth, 0.5);
};
export const getContainerStyle = ({ placement, arrowHeight, }) => {
    const diagonalLength = getDiagonalLength(arrowHeight, arrowHeight) / 2;
    if (placement === 'top') {
        return { marginBottom: diagonalLength };
    }
    if (placement === 'bottom') {
        return { marginTop: diagonalLength };
    }
    if (placement === 'left') {
        return { marginRight: diagonalLength };
    }
    if (placement === 'right') {
        return { marginLeft: diagonalLength };
    }
    return {};
};
export const getArrowStyles = ({ height, width, actualPlacement, }) => {
    const additionalStyles = {
        transform: [{ rotate: '45deg' }, { translateY: height / 2 }],
    };
    const diagonalLength = getDiagonalLength(height, width);
    if (actualPlacement === 'top' && width) {
        additionalStyles.transform.push({ translateX: -width / 2 });
        additionalStyles.bottom = Math.ceil((diagonalLength - height) / 2);
    }
    if (actualPlacement === 'bottom' && width) {
        additionalStyles.transform.push({ translateX: -width / 2 });
        additionalStyles.top = Math.ceil((diagonalLength - height) / 2);
    }
    if (actualPlacement === 'left' && height) {
        additionalStyles.transform.push({ translateY: -height / 2 });
        additionalStyles.right = Math.ceil((diagonalLength - height) / 2);
    }
    if (actualPlacement === 'right' && height) {
        additionalStyles.transform.push({ translateY: -height / 2 });
        additionalStyles.left = Math.ceil((diagonalLength - height) / 2);
    }
    return additionalStyles;
};
const toAxisPlacement = (actualPlacement) => {
    if (actualPlacement === 'top' ||
        actualPlacement === 'bottom' ||
        actualPlacement === 'left' ||
        actualPlacement === 'right') {
        return actualPlacement;
    }
    return 'bottom';
};
/** Nudge along the cross axis: `left` for top/bottom, `top` for left/right. */
export const applyCrossOffsetToArrowStyle = (arrowStyle, actualPlacement, crossOffset) => {
    if (!crossOffset) {
        return Object.assign({}, arrowStyle);
    }
    const next = Object.assign({}, arrowStyle);
    const ap = toAxisPlacement(actualPlacement);
    if (ap === 'top' || ap === 'bottom') {
        if (typeof next.left === 'number') {
            next.left += crossOffset;
        }
    }
    else if (typeof next.top === 'number') {
        next.top += crossOffset;
    }
    return next;
};
/** Nudge along the main axis on the edge props from `getArrowStyles`. */
export const applyOffsetToArrowEdgeStyles = (edgeStyles, actualPlacement, offset) => {
    if (!offset) {
        return Object.assign({}, edgeStyles);
    }
    const next = Object.assign({}, edgeStyles);
    const ap = toAxisPlacement(actualPlacement);
    if (ap === 'bottom' && typeof next.top === 'number') {
        next.top += offset;
    }
    else if (ap === 'top' && typeof next.bottom === 'number') {
        next.bottom += offset;
    }
    else if (ap === 'right' && typeof next.left === 'number') {
        next.left += offset;
    }
    else if (ap === 'left' && typeof next.right === 'number') {
        next.right += offset;
    }
    return next;
};
//# sourceMappingURL=utils.js.map