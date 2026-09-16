import React from 'react';
export const BottomSheetContext = React.createContext({
    handleClose: (() => { }),
    handleOpen: (() => { }),
    visible: false,
    backdropVisible: false,
    closeOnOverlayClick: true,
    snapPoints: [],
    snapToIndex: 0,
    initialFocusRef: { current: null },
    finalFocusRef: { current: null },
    trapFocus: true,
    preventScroll: true,
    handleCloseBackdrop: (() => { }),
});
//# sourceMappingURL=context.js.map