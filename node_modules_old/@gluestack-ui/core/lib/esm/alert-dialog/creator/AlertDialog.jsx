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
/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef } from 'react';
import { View } from 'react-native';
import { AlertDialogContext } from './Context';
import { Overlay } from '../../overlay/creator';
import { useControllableState, useKeyboardBottomInset, } from '@gluestack-ui/utils/hooks';
export const AlertDialog = (StyledAlertDialog) => forwardRef((_a, ref) => {
    var { children, isOpen, onClose, defaultIsOpen = false, initialFocusRef, finalFocusRef, useRNModal, avoidKeyboard = false, closeOnOverlayClick = true, isKeyboardDismissable = true, animationPreset = 'fade', 
    // @ts-ignore
    _experimentalOverlay = false } = _a, props = __rest(_a, ["children", "isOpen", "onClose", "defaultIsOpen", "initialFocusRef", "finalFocusRef", "useRNModal", "avoidKeyboard", "closeOnOverlayClick", "isKeyboardDismissable", "animationPreset", "_experimentalOverlay"]);
    const bottomInset = useKeyboardBottomInset();
    const [visible, setVisible] = useControllableState({
        value: isOpen,
        defaultValue: defaultIsOpen,
        onChange: (val) => {
            if (!val)
                onClose && onClose();
        },
    });
    const avoidKeyboardSpacer = (<View style={{
            // @ts-ignore
            pointerEvents: 'box-none',
            width: '100%',
            height: avoidKeyboard ? bottomInset : undefined,
        }}/>);
    const handleClose = React.useCallback(() => setVisible(false), [setVisible]);
    const contextValue = React.useMemo(() => {
        return {
            handleClose,
            initialFocusRef,
            finalFocusRef,
            closeOnOverlayClick,
            avoidKeyboard,
            bottomInset,
            visible,
        };
    }, [
        handleClose,
        initialFocusRef,
        closeOnOverlayClick,
        finalFocusRef,
        avoidKeyboard,
        bottomInset,
        visible,
    ]);
    if (_experimentalOverlay) {
        return (<AlertDialogContext.Provider value={contextValue}>
            <StyledAlertDialog {...props} ref={ref}>
              {children}
              {avoidKeyboard ? avoidKeyboardSpacer : null}
            </StyledAlertDialog>
          </AlertDialogContext.Provider>);
    }
    return (<Overlay isOpen={visible} onRequestClose={handleClose} isKeyboardDismissable={isKeyboardDismissable} animationPreset={animationPreset} useRNModal={useRNModal}>
          <AlertDialogContext.Provider value={contextValue}>
            <StyledAlertDialog {...props} ref={ref}>
              {children}
              {avoidKeyboard ? avoidKeyboardSpacer : null}
            </StyledAlertDialog>
          </AlertDialogContext.Provider>
        </Overlay>);
});
//# sourceMappingURL=AlertDialog.jsx.map