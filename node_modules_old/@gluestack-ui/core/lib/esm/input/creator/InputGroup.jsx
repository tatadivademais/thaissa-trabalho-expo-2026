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
import { InputProvider } from './InputContext';
import { useHover } from '@gluestack-ui/utils/aria';
import { useFormControlContext } from '../../form-control/creator';
import { mergeRefs } from '@gluestack-ui/utils/common';
import { useFocusRing } from '@gluestack-ui/utils/aria';
export const InputGroup = (StyledInputRoot) => forwardRef((_a, ref) => {
    var { children, isReadOnly, isDisabled, isInvalid, isRequired, isHovered: isHoveredProp, isFocused: isFocusedProp, isFocusVisible: isFocusVisibleProp } = _a, props = __rest(_a, ["children", "isReadOnly", "isDisabled", "isInvalid", "isRequired", "isHovered", "isFocused", "isFocusVisible"]);
    const inputRef = React.useRef();
    const inputFieldRef = React.useRef(null);
    const [isFocused, setIsFocused] = React.useState(false);
    const handleFocus = (focusState, callback) => {
        setIsFocused(focusState);
        callback();
    };
    const inputProps = useFormControlContext();
    const { isHovered } = useHover({}, inputRef);
    const { isFocusVisible } = useFocusRing();
    const style = {};
    return (<StyledInputRoot states={{
            hover: isHovered ? isHovered : isHoveredProp,
            focus: isFocusedProp ? isFocusedProp : isFocused,
            disabled: isDisabled || inputProps.isDisabled,
            invalid: isInvalid || inputProps.isInvalid,
            readonly: isReadOnly || inputProps.isReadOnly,
            required: isRequired || inputProps.isRequired,
            focusVisible: isFocusVisibleProp || isFocusVisible,
        }} 
    // data attributes for uniwind
    data-hover={isHovered ? isHovered : isHoveredProp ? 'true' : 'false'} data-focus={isFocusedProp ? isFocusedProp : isFocused ? 'true' : 'false'} data-disabled={isDisabled || inputProps.isDisabled ? 'true' : 'false'} data-invalid={isInvalid || inputProps.isInvalid ? 'true' : 'false'} data-readonly={isReadOnly || inputProps.isReadOnly ? 'true' : 'false'} data-required={isRequired || inputProps.isRequired ? 'true' : 'false'} data-focus-visible={isFocusVisibleProp || isFocusVisible ? 'true' : 'false'} 
    // data attributes for nativewind
    dataSet={{
            hover: isHovered ? isHovered : isHoveredProp ? 'true' : 'false',
            focus: isFocusedProp ? isFocusedProp : isFocused ? 'true' : 'false',
            disabled: isDisabled || inputProps.isDisabled ? 'true' : 'false',
            invalid: isInvalid || inputProps.isInvalid ? 'true' : 'false',
            readonly: isReadOnly || inputProps.isReadOnly ? 'true' : 'false',
            required: isRequired || inputProps.isRequired ? 'true' : 'false',
            focusVisible: isFocusVisibleProp || isFocusVisible ? 'true' : 'false',
        }} {...props} {...style} ref={mergeRefs([inputRef, ref])}>
          <InputProvider isDisabled={isDisabled || inputProps.isDisabled} isInvalid={isInvalid || inputProps.isInvalid} isHovered={isHovered ? isHovered : isHoveredProp} isFocused={isFocusedProp ? isFocusedProp : isFocused} isFocusVisible={isFocusVisibleProp || isFocusVisible} isReadOnly={isReadOnly || inputProps.isReadOnly} isRequired={isRequired || inputProps.isRequired} inputRef={inputRef} handleFocus={handleFocus} setIsFocused={setIsFocused} inputFieldRef={inputFieldRef}>
            {children}
          </InputProvider>
        </StyledInputRoot>);
});
//# sourceMappingURL=InputGroup.jsx.map