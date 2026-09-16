import React from 'react';
export function flattenChildren(children, keys = []) {
    const childrenArray = React.Children.toArray(children);
    return childrenArray.reduce((flatChildren, child, index) => {
        if (child.type === React.Fragment) {
            return flatChildren.concat(flattenChildren(child.props.children, keys.concat(child.key || index)));
        }
        if (React.isValidElement(child)) {
            flatChildren.push(React.cloneElement(child, {
                key: keys.concat(String(child.key || index)).join('.'),
            }));
        }
        else {
            flatChildren.push(child);
        }
        return flatChildren;
    }, []);
}
const getSpacedChildren = (children, space, SpacerComponent) => {
    let childrenArray = React.Children.toArray(flattenChildren(children));
    childrenArray = childrenArray.map((child, index) => {
        var _a;
        return (<React.Fragment key={(_a = child.key) !== null && _a !== void 0 ? _a : `spaced-child-${index}`}>
        {child}
        {index < childrenArray.length - 1 && space && (<SpacerComponent size={space}/>)}
      </React.Fragment>);
    });
    return childrenArray;
};
export default getSpacedChildren;
//# sourceMappingURL=getSpacedChild.jsx.map