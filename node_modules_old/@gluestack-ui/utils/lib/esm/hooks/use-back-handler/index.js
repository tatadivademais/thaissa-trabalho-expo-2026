import { useEffect, useRef } from 'react';
import { BackHandler } from 'react-native';
export function useBackHandler({ enabled, callback }) {
    const backHandlerRef = useRef(null);
    useEffect(() => {
        var _a;
        const backHandler = () => {
            callback();
            return true;
        };
        if (enabled) {
            backHandlerRef.current = BackHandler.addEventListener('hardwareBackPress', backHandler);
        }
        else {
            (_a = backHandlerRef.current) === null || _a === void 0 ? void 0 : _a.remove();
        }
        return () => { var _a; return (_a = backHandlerRef.current) === null || _a === void 0 ? void 0 : _a.remove(); };
    }, [enabled, callback]);
}
//# sourceMappingURL=index.js.map