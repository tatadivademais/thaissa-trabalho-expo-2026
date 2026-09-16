import type { IBottomSheetComponentType } from './types';
export { BottomSheetContext } from './context';
export declare function createBottomSheet<BottomSheetProps, BackdropProps, ItemProps, ItemTextProps, DragIndicatorProps, IndicatorWrapperProps, ContentProps, ScrollViewProps, FlatListProps, SectionListProps, TextInputProps>({ Root, Backdrop, Item, ItemText, DragIndicator, IndicatorWrapper, Content, ScrollView, FlatList, SectionList, TextInput, }: {
    Root: React.ComponentType<BottomSheetProps>;
    Backdrop: React.ComponentType<BackdropProps>;
    Item: React.ComponentType<ItemProps>;
    ItemText: React.ComponentType<ItemTextProps>;
    DragIndicator: React.ComponentType<DragIndicatorProps>;
    IndicatorWrapper: React.ComponentType<IndicatorWrapperProps>;
    Content: React.ComponentType<ContentProps>;
    ScrollView: React.ComponentType<ScrollViewProps>;
    FlatList: React.ComponentType<FlatListProps>;
    SectionList: React.ComponentType<SectionListProps>;
    TextInput: React.ComponentType<TextInputProps>;
}): IBottomSheetComponentType<BottomSheetProps, BackdropProps, ItemProps, ItemTextProps, DragIndicatorProps, IndicatorWrapperProps, ContentProps, ScrollViewProps, FlatListProps, SectionListProps, TextInputProps>;
//# sourceMappingURL=index.d.ts.map