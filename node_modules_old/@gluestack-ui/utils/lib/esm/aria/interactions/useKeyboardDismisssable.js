import React from 'react';
import { useEffect } from 'react';
import { BackHandler, Platform } from 'react-native';
let keyboardDismissHandlers = [];
export const keyboardDismissHandlerManager = {
    push: (handler) => {
        keyboardDismissHandlers.push(handler);
        return () => {
            keyboardDismissHandlers = keyboardDismissHandlers.filter((h) => h !== handler);
        };
    },
    length: () => keyboardDismissHandlers.length,
    pop: () => {
        return keyboardDismissHandlers.pop();
    },
};
/**
 * Handles attaching callback for Escape key listener on web and Back button listener on Android
 */
export const useKeyboardDismissable = ({ enabled, callback }) => {
    React.useEffect(() => {
        let cleanupFn = () => { };
        if (enabled) {
            cleanupFn = keyboardDismissHandlerManager.push(callback);
        }
        else {
            cleanupFn();
        }
        return () => {
            cleanupFn();
        };
    }, [enabled, callback]);
    useBackHandler({ enabled, callback });
};
export function useBackHandler({ enabled, callback }) {
    useEffect(() => {
        var _a, _b;
        if (Platform.OS === 'web') {
            const handleEscape = (e) => {
                if (e.key === 'Escape') {
                    callback();
                }
            };
            (_b = (_a = document === null || document === void 0 ? void 0 : document.body) === null || _a === void 0 ? void 0 : _a.addEventListener) === null || _b === void 0 ? void 0 : _b.call(_a, 'keyup', handleEscape);
            return () => {
                var _a, _b;
                (_b = (_a = document === null || document === void 0 ? void 0 : document.body) === null || _a === void 0 ? void 0 : _a.removeEventListener) === null || _b === void 0 ? void 0 : _b.call(_a, 'keyup', handleEscape);
            };
        }
        else {
            let subscription = null;
            const backHandler = () => {
                callback();
                return true;
            };
            if (enabled) {
                subscription = BackHandler.addEventListener('hardwareBackPress', backHandler);
            }
            return () => {
                if (subscription && subscription.remove) {
                    subscription.remove();
                }
            };
        }
    }, [enabled, callback]);
}
//# sourceMappingURL=useKeyboardDismisssable.js.map