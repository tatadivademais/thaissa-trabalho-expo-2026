import React from 'react';
import type { ViewStyle } from 'react-native';
import { Modal } from 'react-native';
export declare const ExitAnimationContext: React.Context<{
    exited: boolean;
    setExited: (_exited: boolean) => void;
}>;
export { OverlayProvider } from '../aria';
export interface IOverlayProps {
    isOpen?: boolean;
    children?: any;
    useRNModalOnAndroid?: boolean;
    useRNModal?: boolean;
    onRequestClose?: any;
    isKeyboardDismissable?: boolean;
    animationPreset?: 'fade' | 'slide' | 'none';
    style?: ViewStyle;
}
declare const Overlay: React.ForwardRefExoticComponent<IOverlayProps & React.RefAttributes<Modal>>;
export { Overlay };
//# sourceMappingURL=index.d.ts.map