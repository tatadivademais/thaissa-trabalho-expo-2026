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
import React, { forwardRef } from 'react';
import { SelectContext } from './SelectContext';
import { useHover } from '@gluestack-ui/utils/aria';
import { useControllableState } from '@gluestack-ui/utils/hooks';
import { useFormControlContext } from '../../form-control/creator';
import { useFocusRing } from '@gluestack-ui/utils/aria';
export const Select = (StyledSelect) => forwardRef((_a, ref) => {
    var { children, isDisabled, isInvalid, isReadOnly, isRequired, isHovered: isHoveredProp, isFocused: isFocusedProp, isFocusVisible: isFocusVisibleProp, selectedValue, selectedLabel: selectedLabel, onValueChange, defaultValue, initialLabel, onClose, onOpen, closeOnOverlayClick } = _a, props = __rest(_a, ["children", "isDisabled", "isInvalid", "isReadOnly", "isRequired", "isHovered", "isFocused", "isFocusVisible", "selectedValue", "selectedLabel", "onValueChange", "defaultValue", "initialLabel", "onClose", "onOpen", "closeOnOverlayClick"]);
    const [placeholderState, setPlaceholderState] = React.useState('');
    const [isFocused, setIsFocused] = React.useState(false);
    const { isFocusVisible, focusProps } = useFocusRing();
    const hoverRef = React.useRef(null);
    const { hoverProps, isHovered } = useHover({ isDisabled }, hoverRef);
    const [label, setLabel] = React.useState(initialLabel !== null && initialLabel !== void 0 ? initialLabel : selectedLabel);
    const [isOpen, setIsOpen] = React.useState(false);
    const [value, setValue] = useControllableState({
        value: selectedValue,
        defaultValue,
        onChange: (newValue) => {
            onValueChange && onValueChange(newValue);
        },
    });
    React.useEffect(() => {
        if (selectedValue === null) {
            setLabel(initialLabel);
        }
    }, [selectedValue, initialLabel]);
    const handleClose = React.useCallback(() => {
        setIsOpen(false);
        onClose && onClose();
    }, [onClose, setIsOpen]);
    const inputProps = useFormControlContext();
    const contextValue = React.useMemo(() => {
        return {
            isHovered: isHovered || isHoveredProp,
            isFocused: isFocused || isFocusedProp,
            isDisabled: isDisabled || inputProps.isDisabled,
            isInvalid: isInvalid || inputProps.isInvalid,
            isRequired: isRequired || inputProps.isRequired,
            isReadOnly: isReadOnly || inputProps.isReadOnly,
            hoverRef: hoverRef,
            hoverProps: hoverProps,
            isFocusVisible: isFocusVisibleProp || isFocusVisible,
            setIsOpen: setIsOpen,
            onOpen: onOpen,
            isOpen: isOpen,
            onValueChange: setValue,
            handleClose: handleClose,
            closeOnOverlayClick: closeOnOverlayClick,
            value: value,
            label: label,
            setLabel: setLabel,
            placeholder: placeholderState,
            setPlaceholder: setPlaceholderState,
            setFocused: setIsFocused,
            focusProps: focusProps,
        };
    }, [
        closeOnOverlayClick,
        handleClose,
        hoverProps,
        isDisabled,
        isFocusVisible,
        isFocusVisibleProp,
        isFocused,
        isFocusedProp,
        isHovered,
        isHoveredProp,
        isInvalid,
        isOpen,
        onOpen,
        setValue,
        value,
        setLabel,
        label,
        setIsFocused,
        focusProps,
        isRequired,
        inputProps,
        isReadOnly,
        setPlaceholderState,
        placeholderState,
    ]);
    return (<StyledSelect ref={ref} tabIndex={-1} {...props}>
          <SelectContext.Provider value={contextValue}>
            {children}
          </SelectContext.Provider>
        </StyledSelect>);
});
//# sourceMappingURL=Select.jsx.map