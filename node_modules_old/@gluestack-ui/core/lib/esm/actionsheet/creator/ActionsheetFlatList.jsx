import React, { forwardRef } from 'react';
export function ActionsheetFlatList(StyledActionsheetFlatList) {
    return forwardRef(function ActionsheetFlatList(props, ref) {
        return <StyledActionsheetFlatList ref={ref} {...props}/>;
    });
}
//# sourceMappingURL=ActionsheetFlatList.jsx.map