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
import { flattenChildren } from '@gluestack-ui/utils/common';
export const ButtonGroup = (StyledButtonGroup) => forwardRef((_a, ref) => {
    var { flexDirection = 'row', isAttached, isDisabled, children, isReversed, reversed } = _a, props = __rest(_a, ["flexDirection", "isAttached", "isDisabled", "children", "isReversed", "reversed"]);
    const direction = flexDirection.includes('reverse')
        ? flexDirection === 'column-reverse'
            ? 'column'
            : 'row'
        : flexDirection;
    let computedChildren;
    let childrenArray = React.Children.toArray(flattenChildren(children));
    childrenArray =
        isReversed || reversed ? [...childrenArray].reverse() : childrenArray;
    if (childrenArray) {
        computedChildren = childrenArray.map((child, index) => {
            var _a;
            if (typeof child === 'string' || typeof child === 'number') {
                return child;
            }
            const attachedStyles = {};
            if (index === 0) {
                if (direction === 'column') {
                    attachedStyles.borderBottomLeftRadius = 0;
                    attachedStyles.borderBottomRightRadius = 0;
                }
                else {
                    attachedStyles.borderTopRightRadius = 0;
                    attachedStyles.borderBottomRightRadius = 0;
                }
            }
            else if (index === (children === null || children === void 0 ? void 0 : children.length) - 1) {
                if (direction === 'column') {
                    attachedStyles.borderTopLeftRadius = 0;
                    attachedStyles.borderTopRightRadius = 0;
                }
                else {
                    attachedStyles.borderTopLeftRadius = 0;
                    attachedStyles.borderBottomLeftRadius = 0;
                }
            }
            else {
                attachedStyles.borderRadius = 0;
            }
            const childProps = Object.assign(Object.assign({ isDisabled }, child.props), { style: Object.assign(Object.assign({}, (isAttached ? attachedStyles : {})), child.props.style) });
            const clonedChild = React.cloneElement(child, Object.assign({}, childProps));
            return (<React.Fragment key={(_a = child.key) !== null && _a !== void 0 ? _a : `spaced-child-${index}`}>
              {clonedChild}
            </React.Fragment>);
        });
    }
    const gapProp = isAttached
        ? {
            gap: 0,
        }
        : {};
    if (computedChildren)
        return (<StyledButtonGroup flexDirection={flexDirection} {...props} ref={ref} {...gapProp}>
            {computedChildren}
          </StyledButtonGroup>);
    return null;
});
//# sourceMappingURL=ButtonGroup.jsx.map