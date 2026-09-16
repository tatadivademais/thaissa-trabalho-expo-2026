import React from 'react';
export const TabsContext = React.createContext(null);
export const TabsTriggerContext = React.createContext(null);
export function useTabsContext(componentName = 'Tabs') {
    const context = React.useContext(TabsContext);
    if (!context) {
        throw new Error(`${componentName} must be used within a Tabs component`);
    }
    return context;
}
export function useTabsTriggerContext(componentName = 'TabsTrigger') {
    const context = React.useContext(TabsTriggerContext);
    if (!context) {
        throw new Error(`${componentName} must be used within a TabsTrigger component`);
    }
    return context;
}
//# sourceMappingURL=Context.jsx.map