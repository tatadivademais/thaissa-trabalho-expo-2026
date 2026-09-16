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
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
const PortalContext = React.createContext(null);
let globalOverlayCounter = 0;
export function PortalProvider(props) {
    const [items, setItems] = React.useState([]);
    const setOverlayItem = (element) => {
        const overlayId = ++globalOverlayCounter;
        setItems((prev) => prev.concat([{ id: overlayId, node: element }]));
        return overlayId;
    };
    const updateOverlayItem = (id, node) => {
        setItems((prev) => {
            const overlayItem = prev.find((item) => item.id == id);
            if (!overlayItem) {
                return prev.concat([{ id: id, node }]);
            }
            else {
                return prev.map((item) => {
                    if (item.id === id) {
                        return { id, node };
                    }
                    return item;
                });
            }
        });
    };
    const removeOverlayItem = (id) => {
        setItems((prev) => {
            const newItems = prev.filter((item) => item.id !== id);
            return newItems;
        });
    };
    return (<PortalContext.Provider value={{
            items,
            setOverlayItem,
            removeOverlayItem,
            updateOverlayItem,
            isSSR: props === null || props === void 0 ? void 0 : props.isSSR,
        }}>
      {props.children}

      {/* Render Overlays */}
      {items.map((item) => {
            return <React.Fragment key={item.id}>{item.node}</React.Fragment>;
        })}
    </PortalContext.Provider>);
}
function OverlayView(_a) {
    var { style } = _a, props = __rest(_a, ["style"]);
    return (<View pointerEvents="box-none" style={[StyleSheet.absoluteFill, style]} collapsable={false} {...props}/>);
}
export const OverlayProvider = PortalProvider;
export function OverlayContainer(props) {
    const context = usePortalProvider();
    const overlayId = React.useRef(undefined);
    const element = <OverlayView {...props}/>;
    useEffect(() => {
        // Mount
        if (overlayId.current === undefined) {
            overlayId.current = context === null || context === void 0 ? void 0 : context.setOverlayItem(element);
        }
        // Update
        else {
            if (overlayId.current) {
                context === null || context === void 0 ? void 0 : context.updateOverlayItem(overlayId.current, element);
            }
        }
    }, 
    // To re-render the child
    [props]);
    // Unmount
    useEffect(() => {
        return () => {
            if (overlayId.current) {
                context === null || context === void 0 ? void 0 : context.removeOverlayItem(overlayId.current);
            }
        };
    }, []);
    // Rendering elements for SSR
    if ((context === null || context === void 0 ? void 0 : context.isSSR) && !overlayId.current) {
        return <View style={{ display: 'none' }}>{element}</View>;
    }
    return null;
}
function usePortalProvider() {
    const context = React.useContext(PortalContext);
    return context;
}
//# sourceMappingURL=Portal.jsx.map