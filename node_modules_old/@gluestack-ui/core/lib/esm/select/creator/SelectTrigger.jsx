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
import { mergeRefs } from '@gluestack-ui/utils/common';
import { Keyboard } from 'react-native';
export const SelectTrigger = (StyledSelectTrigger) => forwardRef((_a, ref) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const { isDisabled, hoverRef, setIsOpen, onOpen, isFocused, isFocusVisible, isHovered, isInvalid, isReadOnly, } = React.useContext(SelectContext);
    return (<StyledSelectTrigger onPress={() => {
            if (!isReadOnly) {
                Keyboard.dismiss();
                setIsOpen(true);
                onOpen && onOpen();
            }
        }} states={{
            focus: isFocused,
            focusVisible: isFocusVisible,
            hover: isHovered,
            disabled: isDisabled,
            invalid: isInvalid,
        }} 
    // data attributes for uniwind
    data-focus={isFocused ? 'true' : 'false'} data-focus-visible={isFocusVisible ? 'true' : 'false'} data-hover={isHovered ? 'true' : 'false'} data-disabled={isDisabled ? 'true' : 'false'} data-invalid={isInvalid ? 'true' : 'false'} 
    // data attributes for nativewind
    dataSet={{
            focus: isFocused ? 'true' : 'false',
            focusVisible: isFocusVisible ? 'true' : 'false',
            hover: isHovered ? 'true' : 'false',
            disabled: isDisabled ? 'true' : 'false',
            invalid: isInvalid ? 'true' : 'false',
        }} disabled={isDisabled} role="button" ref={mergeRefs([ref, hoverRef])} tabIndex={-1} {...props}>
        {children}
      </StyledSelectTrigger>);
});
//# sourceMappingURL=SelectTrigger.jsx.map