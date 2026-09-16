import { createContext } from 'react';
export const ToastContext = createContext({
    toastInfo: {},
    setToastInfo: () => { },
    setToast: () => '',
    removeToast: () => { },
    hideAll: () => { },
    isActive: () => false,
    visibleToasts: {},
    setVisibleToasts: () => { },
    hideToast: () => { },
    ViewComponent: { current: null },
});
//# sourceMappingURL=ToastContext.js.map