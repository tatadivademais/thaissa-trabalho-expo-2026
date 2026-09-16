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
import React, { forwardRef, useMemo } from 'react';
import { Platform } from 'react-native';
import { useFormControl } from '../../form-control/creator';
import { useInput } from './InputContext';
import { mergeRefs } from '@gluestack-ui/utils/common';
export const Input = (StyledInput) => forwardRef((_a, ref) => {
    var { children, onKeyPress, name, type = 'text', 'aria-label': ariaLabel = 'Input Field', secureTextEntry, editable, disabled } = _a, props = __rest(_a, ["children", "onKeyPress", "name", "type", 'aria-label', "secureTextEntry", "editable", "disabled"]);
    const { isDisabled, isReadOnly, isFocused, isInvalid, setIsFocused, isHovered, isFocusVisible, inputFieldRef, isRequired, } = useInput('InputContext');
    const inputProps = useFormControl({
        isDisabled: props.isDisabled || disabled,
        isInvalid: props.isInvalid,
        isReadOnly: props.isReadOnly,
        isRequired: props.isRequired,
        id: props.id,
    });
    const handleFocus = (focusState, callback) => {
        setIsFocused(focusState);
        callback();
    };
    const mergedRef = mergeRefs([ref, inputFieldRef]);
    const editableProp = useMemo(() => {
        if (editable !== undefined) {
            return editable;
        }
        else {
            return !(isDisabled || inputProps.isDisabled || isReadOnly);
        }
    }, [isDisabled, inputProps.isDisabled, isReadOnly, editable]);
    return (<StyledInput {...props} name={name} type={type} states={{
            focus: isFocused,
            invalid: isInvalid,
            readonly: isReadOnly,
            required: isRequired,
            hover: isHovered,
            focusVisible: isFocusVisible,
            disabled: isDisabled || inputProps.isDisabled,
        }} 
    // data attributes for uniwind
    data-focus={isFocused ? 'true' : 'false'} data-invalid={isInvalid ? 'true' : 'false'} data-readonly={isReadOnly ? 'true' : 'false'} data-required={isRequired ? 'true' : 'false'} data-hover={isHovered ? 'true' : 'false'} data-focus-visible={isFocusVisible ? 'true' : 'false'} data-disabled={isDisabled || inputProps.isDisabled ? 'true' : 'false'} 
    // data attributes for nativewind
    dataSet={{
            focus: isFocused ? 'true' : 'false',
            invalid: isInvalid ? 'true' : 'false',
            readonly: isReadOnly ? 'true' : 'false',
            required: isRequired ? 'true' : 'false',
            hover: isHovered ? 'true' : 'false',
            focusVisible: isFocusVisible ? 'true' : 'false',
            disabled: isDisabled || inputProps.isDisabled ? 'true' : 'false',
        }} disabled={isDisabled || inputProps.isDisabled} secureTextEntry={secureTextEntry || type === 'password'} accessible aria-label={ariaLabel} aria-required={isRequired || inputProps.isRequired} aria-invalid={isInvalid || inputProps.isInvalid} aria-disabled={isDisabled || inputProps.isDisabled} aria-selected={Platform.OS !== 'web' ? isFocused : undefined} 
    // ios accessibility
    accessibilityElementsHidden={isDisabled || inputProps.isDisabled} readOnly={!editableProp} onKeyPress={(e) => {
            var _a;
            (_a = e.persist) === null || _a === void 0 ? void 0 : _a.call(e);
            onKeyPress && onKeyPress(e);
        }} onFocus={(e) => {
            handleFocus(true, (props === null || props === void 0 ? void 0 : props.onFocus) ? () => props === null || props === void 0 ? void 0 : props.onFocus(e) : () => { });
        }} onBlur={(e) => {
            handleFocus(false, (props === null || props === void 0 ? void 0 : props.onBlur) ? () => props === null || props === void 0 ? void 0 : props.onBlur(e) : () => { });
        }} ref={mergedRef}>
          {children}
        </StyledInput>);
});
//# sourceMappingURL=Input.jsx.map