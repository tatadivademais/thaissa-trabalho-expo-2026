import { usePress } from '@gluestack-ui/utils/aria';
/**
 * Provides the behavior and accessibility implementation for an item in a menu.
 * See `useMenu` for more details about menus.
 * @param props - Props for the item.
 * @param state - State for the menu, as returned by `useTreeState`.
 */
export function useMenuItem(props, state, _ref) {
    let { isSelected, isDisabled, onClose, closeOnSelect = true, onAction, } = props;
    const { pressProps } = usePress({
        isDisabled,
        onPress: () => {
            state.selectionManager.select(props.key);
            onAction && onAction(props.key);
            if (closeOnSelect && onClose)
                onClose();
        },
    });
    return {
        menuItemProps: Object.assign({ 'role': 'menuitem', 'aria-selected': isSelected, 'aria-disabled': isDisabled }, pressProps),
        labelProps: {},
        descriptionProps: {},
        keyboardShortcutProps: {},
    };
}
//# sourceMappingURL=useMenuItem.js.map