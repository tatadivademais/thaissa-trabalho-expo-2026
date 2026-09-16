import { OverlayContainer } from '../aria';
import React from 'react';
import { Modal, Platform } from 'react-native';
import { useKeyboardDismissable } from '@gluestack-ui/utils/aria';
export const ExitAnimationContext = React.createContext({
    exited: true,
    setExited: (_exited) => { },
});
export { OverlayProvider } from '../aria';
const Overlay = React.forwardRef(({ children, isOpen, useRNModal = false, useRNModalOnAndroid = false, isKeyboardDismissable = true, animationPreset = 'fade', onRequestClose, style, }, ref) => {
    const [exited, setExited] = React.useState(!isOpen);
    useKeyboardDismissable({
        enabled: isOpen && isKeyboardDismissable,
        callback: onRequestClose ? onRequestClose : () => { },
    });
    let styleObj = {};
    if (Platform.OS === 'web') {
        styleObj.zIndex = 9999;
    }
    if (animationPreset === 'slide') {
        styleObj.overflow = 'hidden';
        styleObj.display = 'flex';
    }
    else {
        styleObj.display = exited && !isOpen ? 'none' : 'flex';
    }
    if (!isOpen && exited) {
        return null;
    }
    if (useRNModal || (useRNModalOnAndroid && Platform.OS === 'android')) {
        return (<ExitAnimationContext.Provider value={{ exited, setExited }}>
          <Modal statusBarTranslucent transparent visible={isOpen} onRequestClose={onRequestClose} animationType={animationPreset} ref={ref}>
            {children}
          </Modal>
        </ExitAnimationContext.Provider>);
    }
    return (<OverlayContainer style={[style, styleObj]}>
        <ExitAnimationContext.Provider value={{ exited, setExited }}>
          {children}
        </ExitAnimationContext.Provider>
      </OverlayContainer>);
});
Overlay.displayName = 'Overlay';
export { Overlay };
//# sourceMappingURL=index.jsx.map