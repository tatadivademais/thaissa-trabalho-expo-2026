import { useEffect } from 'react';
export function useBackHandler({ enabled, callback }) {
    useEffect(() => {
        var _a, _b;
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
    }, [enabled, callback]);
}
//# sourceMappingURL=index.web.js.map