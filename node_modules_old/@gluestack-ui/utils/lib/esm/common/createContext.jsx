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
import React from 'react';
function createContext(rootComponentName) {
    const Context = React.createContext(null);
    function Provider(props) {
        const { children } = props, providerProps = __rest(props, ["children"]);
        // Only re-memoize when prop values change
        const value = React.useMemo(() => providerProps, 
        //  eslint-disable-next-line react-hooks/exhaustive-deps
        Object.values(providerProps));
        return <Context.Provider value={value}>{children}</Context.Provider>;
    }
    function useContext(consumerName) {
        const context = React.useContext(Context);
        if (context === null) {
            throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
        }
        return context;
    }
    Provider.displayName = rootComponentName + 'Provider';
    return [Provider, useContext];
}
export { createContext };
//implementation example
// const [PopperProvider, usePopperContext] =
//   createContext<PopperContext>("PopperContext");
//# sourceMappingURL=createContext.jsx.map