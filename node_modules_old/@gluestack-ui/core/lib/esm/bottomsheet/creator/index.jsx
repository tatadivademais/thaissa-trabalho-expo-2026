import { BottomSheet as BottomSheetMain } from './BottomSheet';
import BottomSheetContent from './BottomSheetContent';
import { BottomSheetItem } from './BottomSheetItem';
import BottomSheetBackdrop from './BottomSheetBackdrop';
import { BottomSheetDragIndicatorWrapper } from './BottomSheetDragIndicatorWrapper';
import BottomSheetDragIndicator from './BottomSheetDragIndicator';
// Export context for use in style files
export { BottomSheetContext } from './context';
export function createBottomSheet({ Root, Backdrop, Item, ItemText, DragIndicator, IndicatorWrapper, Content, ScrollView, FlatList, SectionList, TextInput, }) {
    const BottomSheet = BottomSheetMain(Root);
    BottomSheet.Backdrop = BottomSheetBackdrop(Backdrop);
    BottomSheet.Content = BottomSheetContent(Content);
    BottomSheet.DragIndicator = BottomSheetDragIndicator(DragIndicator);
    BottomSheet.DragIndicatorWrapper =
        BottomSheetDragIndicatorWrapper(IndicatorWrapper);
    BottomSheet.Item = BottomSheetItem(Item);
    BottomSheet.ItemText = ItemText;
    BottomSheet.ScrollView = ScrollView;
    BottomSheet.FlatList = FlatList;
    BottomSheet.SectionList = SectionList;
    BottomSheet.TextInput = TextInput;
    BottomSheet.displayName = 'BottomSheet';
    BottomSheet.Content.displayName = 'BottomSheet.Content';
    BottomSheet.Backdrop.displayName = 'BottomSheet.Backdrop';
    BottomSheet.Item.displayName = 'BottomSheet.Item';
    BottomSheet.ItemText.displayName = 'BottomSheet.ItemText';
    BottomSheet.DragIndicator.displayName = 'BottomSheet.DragIndicator';
    BottomSheet.DragIndicatorWrapper.displayName = 'BottomSheet.DragIndicatorWrapper';
    BottomSheet.ScrollView.displayName = 'BottomSheet.ScrollView';
    BottomSheet.FlatList.displayName = 'BottomSheet.FlatList';
    BottomSheet.SectionList.displayName = 'BottomSheet.SectionList';
    BottomSheet.TextInput.displayName = 'BottomSheet.TextInput';
    return BottomSheet;
}
//# sourceMappingURL=index.jsx.map