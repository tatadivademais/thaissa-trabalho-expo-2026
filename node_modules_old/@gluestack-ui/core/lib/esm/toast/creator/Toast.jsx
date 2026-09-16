import React, { useMemo, useState } from 'react';
import { View } from 'react-native';
import { ToastContext } from './ToastContext';
import { ToastList } from './ToastList';
export const ToastProvider = ({ children, ViewComponent = View, }) => {
    const [toastInfo, setToastInfo] = useState({});
    const [visibleToasts, setVisibleToasts] = useState({});
    const toastIndex = React.useRef(1);
    const ViewRef = React.useRef(ViewComponent);
    const hideAll = React.useCallback(() => {
        setVisibleToasts({});
    }, [setVisibleToasts]);
    const hideToast = React.useCallback((id) => {
        setVisibleToasts((prevVisibleToasts) => (Object.assign(Object.assign({}, prevVisibleToasts), { [id]: false })));
    }, [setVisibleToasts]);
    const isActive = React.useCallback((id) => {
        for (const toastPosition of Object.keys(toastInfo)) {
            const positionArray = toastInfo[toastPosition];
            if (positionArray.findIndex((toastData) => toastData.id === id) > -1) {
                return true;
            }
        }
        return false;
    }, [toastInfo]);
    const removeToast = React.useCallback((id) => {
        setToastInfo((prev) => {
            for (const toastPosition of Object.keys(prev)) {
                const positionArray = prev[toastPosition];
                const isToastPresent = positionArray.findIndex((toastData) => toastData.id === id) > -1;
                if (isToastPresent) {
                    const newPositionArray = positionArray.filter((item) => item.id !== id);
                    const temp = {};
                    temp[toastPosition] = newPositionArray;
                    const newToastInfo = Object.assign(Object.assign({}, prev), temp);
                    return newToastInfo;
                }
            }
            return prev;
        });
    }, [setToastInfo]);
    const setToast = React.useCallback((props) => {
        const { placement = 'bottom', render, id = `${toastIndex.current++}`, duration = 5000, } = props;
        if (render) {
            const component = render({ id });
            setToastInfo((prev) => {
                return Object.assign(Object.assign({}, prev), { [placement]: [
                        ...(prev[placement] ? prev[placement] : []).filter((t) => t.id !== id),
                        { component, id, config: props },
                    ] });
            });
            setVisibleToasts((toasts) => {
                return Object.assign(Object.assign({}, Object.fromEntries(Object.entries(toasts).filter(([key]) => key !== id))), { [id]: true });
            });
            if (duration !== null) {
                setTimeout(function () {
                    hideToast(id);
                }, duration);
            }
        }
        return id;
    }, [hideToast]);
    React.useEffect(() => {
        ViewRef.current = ViewComponent;
    }, [ViewComponent]);
    const contextValue = React.useMemo(() => {
        return {
            toastInfo,
            setToastInfo,
            setToast,
            removeToast,
            hideAll,
            isActive,
            visibleToasts,
            setVisibleToasts,
            hideToast,
            ViewComponent: ViewRef,
        };
    }, [
        toastInfo,
        setToastInfo,
        setToast,
        removeToast,
        hideAll,
        isActive,
        visibleToasts,
        setVisibleToasts,
        hideToast,
    ]);
    return (<ToastContext.Provider value={contextValue}>
      {children}
      <ToastList />
    </ToastContext.Provider>);
};
export const getToastHook = (ViewComponent) => {
    const useToast = () => {
        const { setToast, hideAll, isActive, hideToast, ViewComponent: ContextViewComponent, } = React.useContext(ToastContext);
        React.useEffect(() => {
            if (ContextViewComponent) {
                ContextViewComponent.current = ViewComponent;
            }
        }, [ViewComponent, ContextViewComponent]);
        const toast = useMemo(() => ({
            show: setToast,
            close: hideToast,
            closeAll: hideAll,
            isActive,
        }), [setToast, hideAll, isActive, hideToast]);
        return toast;
    };
    return useToast;
};
//# sourceMappingURL=Toast.jsx.map