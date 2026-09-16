import { Tabs as TabsMain } from './Tabs';
import { TabsList } from './TabsList';
import { TabsTrigger } from './TabsTrigger';
import { TabsContent } from './TabsContent';
import { TabsContentWrapper } from './TabsContentWrapper';
import { TabsTriggerText } from './TabsTriggerText';
import { TabsTriggerIcon } from './TabsTriggerIcon';
import { TabsIndicator } from './TabsIndicator';
export declare function createTabs<TabsStyledProps, ListStyledProps, TriggerStyledProps, ContentStyledProps, ContentWrapperStyledProps, TriggerTextStyledProps, TriggerIconStyledProps, IndicatorStyledProps>({ Root, List, Trigger, Content, ContentWrapper, TriggerText, TriggerIcon, Indicator, }: {
    Root: React.ComponentType<TabsStyledProps>;
    List: React.ComponentType<ListStyledProps>;
    Trigger: React.ComponentType<TriggerStyledProps>;
    Content: React.ComponentType<ContentStyledProps>;
    ContentWrapper: React.ComponentType<ContentWrapperStyledProps>;
    TriggerText: React.ComponentType<TriggerTextStyledProps>;
    TriggerIcon: React.ComponentType<TriggerIconStyledProps>;
    Indicator: React.ComponentType<IndicatorStyledProps>;
}): import("react").ForwardRefExoticComponent<Omit<any, "ref"> & import("react").RefAttributes<unknown>> & {
    List: import("react").ForwardRefExoticComponent<Omit<any, "ref"> & import("react").RefAttributes<unknown>>;
    Trigger: import("react").ForwardRefExoticComponent<Omit<any, "ref"> & import("react").RefAttributes<unknown>>;
    Content: import("react").ForwardRefExoticComponent<Omit<any, "ref"> & import("react").RefAttributes<unknown>>;
    ContentWrapper: import("react").ForwardRefExoticComponent<Omit<any, "ref"> & import("react").RefAttributes<unknown>>;
    TriggerText: import("react").ForwardRefExoticComponent<Omit<any, "ref"> & import("react").RefAttributes<unknown>>;
    TriggerIcon: import("react").ForwardRefExoticComponent<Omit<any, "ref"> & import("react").RefAttributes<unknown>>;
    Indicator: import("react").ForwardRefExoticComponent<Omit<any, "ref"> & import("react").RefAttributes<unknown>>;
};
export { TabsMain, TabsList, TabsTrigger, TabsContent, TabsContentWrapper, TabsTriggerText, TabsTriggerIcon, TabsIndicator };
export * from './Context';
export * from './types';
//# sourceMappingURL=index.d.ts.map