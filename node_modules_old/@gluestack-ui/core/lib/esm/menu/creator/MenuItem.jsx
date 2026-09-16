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
import React, { useCallback } from 'react';
import { composeEventHandlers } from '@gluestack-ui/utils/common';
import { useHover, usePress } from '@gluestack-ui/utils/aria';
import { useFocusRing } from '@gluestack-ui/utils/aria';
import { useMenuItem } from '../aria';
import { Platform } from 'react-native';
const usePressed = (onPressIn, onPressOut, onPress, isDisabled) => {
    if (isDisabled)
        return {};
    return {
        pressEvents: {
            onPressIn,
            onPressOut,
            onPress,
        },
    };
};
export function MenuItem({ StyledMenuItem, item, state, onAction, onClose, closeOnSelect, }) {
    const itemProps = Object.assign({}, item.props);
    // Get props for the menu item element
    const ref = React.useRef(null);
    const _a = useMenuItem(Object.assign({ 'key': item.key, onAction,
        onClose,
        closeOnSelect, 'aria-label': itemProps.textValue }, itemProps), state, ref).menuItemProps, { focusable } = _a, restMenuProps = __rest(_a, ["focusable"]);
    // Handle focus events so we can apply highlighted
    // style to the focused menu item
    const toggleSelection = useCallback(() => {
        if (Platform.OS === 'web') {
            state.selectionManager.toggleSelection(item.key);
        }
    }, [state.selectionManager, item.key]);
    const { focusProps: focusRingProps, isFocusVisible } = useFocusRing();
    const { pressProps, isPressed } = usePress({});
    const { isHovered, hoverProps } = useHover();
    const isFocused = state.selectionManager.focusedKey === item.key;
    const _b = item.props, { children } = _b, rest = __rest(_b, ["children"]);
    const { pressEvents } = usePressed(
    // @ts-ignore
    composeEventHandlers(rest === null || rest === void 0 ? void 0 : rest.onPressIn, composeEventHandlers(restMenuProps.onPressIn, toggleSelection)), composeEventHandlers(rest === null || rest === void 0 ? void 0 : rest.onPressOut, restMenuProps.onPressOut), composeEventHandlers(rest === null || rest === void 0 ? void 0 : rest.onPress, restMenuProps.onPress), state.selectionManager.isDisabled(item.key));
    return (<StyledMenuItem ref={ref} tabIndex={focusable === undefined ? -1 : focusable} {...restMenuProps} states={{
            hover: isHovered,
            focus: isFocused,
            active: isPressed,
            focusVisible: isFocusVisible,
            selected: state.selectionManager.isSelected(item.key),
            disabled: state.selectionManager.isDisabled(item.key),
        }} 
    // data attributes for uniwind
    data-hover={isHovered ? 'true' : 'false'} data-focus={isFocused ? 'true' : 'false'} data-active={isPressed ? 'true' : 'false'} data-focus-visible={isFocusVisible ? 'true' : 'false'} data-selected={state.selectionManager.isSelected(item.key) ? 'true' : 'false'} data-disabled={state.selectionManager.isDisabled(item.key) ? 'true' : 'false'} 
    // data attributes for nativewind
    dataSet={{
            hover: isHovered ? 'true' : 'false',
            focus: isFocused ? 'true' : 'false',
            active: isPressed ? 'true' : 'false',
            focusVisible: isFocusVisible ? 'true' : 'false',
            selected: state.selectionManager.isSelected(item.key)
                ? 'true'
                : 'false',
            disabled: state.selectionManager.isDisabled(item.key)
                ? 'true'
                : 'false',
        }} {...rest} 
    // @ts-ignore - web only
    onHoverIn={composeEventHandlers(rest === null || rest === void 0 ? void 0 : rest.onHoverIn, hoverProps.onHoverIn)} 
    // @ts-ignore - web only
    onHoverOut={composeEventHandlers(rest === null || rest === void 0 ? void 0 : rest.onHoverOut, hoverProps.onHoverOut)} 
    // @ts-ignore - web only
    onFocus={composeEventHandlers(composeEventHandlers(rest === null || rest === void 0 ? void 0 : rest.onFocus, focusRingProps.onFocus), restMenuProps === null || restMenuProps === void 0 ? void 0 : restMenuProps.onFocus)} 
    // @ts-ignore - web only
    onBlur={composeEventHandlers(composeEventHandlers(rest === null || rest === void 0 ? void 0 : rest.onBlur, focusRingProps.onBlur), restMenuProps === null || restMenuProps === void 0 ? void 0 : restMenuProps.onBlur)} onPressIn={composeEventHandlers(pressProps.onPressIn, pressEvents === null || pressEvents === void 0 ? void 0 : pressEvents.onPressIn)} onPress={composeEventHandlers(pressProps.onPress, pressEvents === null || pressEvents === void 0 ? void 0 : pressEvents.onPress)} onPressOut={composeEventHandlers(pressProps.onPressOut, pressEvents === null || pressEvents === void 0 ? void 0 : pressEvents.onPressOut)}>
      {children}
    </StyledMenuItem>);
}
//# sourceMappingURL=MenuItem.jsx.map