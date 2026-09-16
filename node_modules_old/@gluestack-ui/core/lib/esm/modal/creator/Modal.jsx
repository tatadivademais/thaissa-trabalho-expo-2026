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
import { useControllableState, useKeyboardBottomInset, } from '@gluestack-ui/utils/hooks';
import { ModalContext } from './Context';
import { Overlay } from '../../overlay/creator';
const Modal = (StyledModal) => forwardRef((_a, ref) => {
    var { children, isOpen, onClose, defaultIsOpen, initialFocusRef, finalFocusRef, avoidKeyboard, closeOnOverlayClick = true, isKeyboardDismissable = true, animationPreset, _experimentalOverlay = false } = _a, props = __rest(_a, ["children", "isOpen", "onClose", "defaultIsOpen", "initialFocusRef", "finalFocusRef", "avoidKeyboard", "closeOnOverlayClick", "isKeyboardDismissable", "animationPreset", "_experimentalOverlay"]);
    const bottomInset = useKeyboardBottomInset();
    const { useRNModal } = props, remainingProps = __rest(props, ["useRNModal"]);
    const [visible, setVisible] = useControllableState({
        value: defaultIsOpen !== null && defaultIsOpen !== void 0 ? defaultIsOpen : isOpen,
        onChange: (val) => {
            if (!val)
                onClose && onClose();
        },
    });
    const handleClose = React.useCallback(() => {
        setVisible(false);
    }, [setVisible]);
    const avoidKeyboardSpacer = (<View style={{
            // @ts-ignore
            pointerEvents: 'box-none',
            width: '100%',
            height: avoidKeyboard ? bottomInset : undefined,
        }}/>);
    const contextValue = React.useMemo(() => {
        return {
            handleClose,
            initialFocusRef,
            finalFocusRef,
            closeOnOverlayClick,
            visible,
            avoidKeyboard,
            bottomInset,
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
        return (<ModalContext.Provider value={contextValue}>
            <StyledModal {...remainingProps} ref={ref}>
              {children}
              {avoidKeyboard ? avoidKeyboardSpacer : null}
            </StyledModal>
          </ModalContext.Provider>);
    }
    return (<Overlay isOpen={visible} onRequestClose={handleClose} isKeyboardDismissable={isKeyboardDismissable} useRNModal={useRNModal} animationPreset={animationPreset}>
          <ModalContext.Provider value={contextValue}>
            <StyledModal {...remainingProps} ref={ref}>
              {children}
              {avoidKeyboard ? avoidKeyboardSpacer : null}
            </StyledModal>
          </ModalContext.Provider>
        </Overlay>);
});
export default Modal;
//# sourceMappingURL=Modal.jsx.map