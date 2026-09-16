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
import { Platform } from 'react-native';
import { useControllableState } from '@gluestack-ui/utils/hooks';
import { Overlay } from '../../overlay/creator';
import { BottomSheetContext } from './context';
import { StyleSheet } from 'react-native';
export function BottomSheet(StyledBottomSheet) {
    return forwardRef((_a, ref) => {
        var { children, isOpen, onClose, onOpen, defaultIsOpen = false, trapFocus = true, closeOnOverlayClick = true, isKeyboardDismissable = true, useRNModal, initialFocusRef, finalFocusRef, snapPoints = [50], snapToIndex = 0, preventScroll = true, 
        // @ts-ignore
        _experimentalOverlay = false } = _a, props = __rest(_a, ["children", "isOpen", "onClose", "onOpen", "defaultIsOpen", "trapFocus", "closeOnOverlayClick", "isKeyboardDismissable", "useRNModal", "initialFocusRef", "finalFocusRef", "snapPoints", "snapToIndex", "preventScroll", "_experimentalOverlay"]);
        const overlayStyle = Platform.OS === 'web' ? { position: 'fixed' } : {};
        const [visible, setVisible] = useControllableState({
            value: isOpen,
            defaultValue: defaultIsOpen,
            onChange: (val) => {
                if (val === false) {
                    onClose && onClose();
                }
                else {
                    onOpen && onOpen();
                }
            },
        });
        const [backdropVisible, setBackdropVisible] = useControllableState({
            value: isOpen,
            defaultValue: defaultIsOpen,
        });
        const handleClose = React.useCallback(() => {
            setVisible(false);
        }, [setVisible]);
        const handleOpen = React.useCallback(() => {
            setVisible(true);
        }, [setVisible]);
        const handleCloseBackdrop = React.useCallback(() => {
            setBackdropVisible(false);
        }, [setBackdropVisible]);
        const contextValue = React.useMemo(() => {
            return {
                handleClose,
                handleOpen,
                closeOnOverlayClick,
                visible,
                backdropVisible,
                handleCloseBackdrop,
                trapFocus,
                initialFocusRef,
                finalFocusRef,
                snapPoints,
                snapToIndex,
                preventScroll,
            };
        }, [
            handleClose,
            handleOpen,
            handleCloseBackdrop,
            closeOnOverlayClick,
            visible,
            backdropVisible,
            trapFocus,
            initialFocusRef,
            finalFocusRef,
            snapPoints,
            snapToIndex,
            preventScroll,
        ]);
        return (<Overlay isOpen={visible} onRequestClose={handleClose} isKeyboardDismissable={isKeyboardDismissable} useRNModal={useRNModal} 
        // @ts-ignore
        style={overlayStyle}>
          <BottomSheetContext.Provider value={contextValue}>
            <StyledBottomSheet ref={ref} style={[StyleSheet.absoluteFill]} {...props}>
              {children}
            </StyledBottomSheet>
          </BottomSheetContext.Provider>
        </Overlay>);
    });
}
//# sourceMappingURL=BottomSheet.jsx.map