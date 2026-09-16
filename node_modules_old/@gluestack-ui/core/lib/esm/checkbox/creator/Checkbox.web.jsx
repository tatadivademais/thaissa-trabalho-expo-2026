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
import React, { forwardRef, useContext } from 'react';
import { CheckboxProvider } from './CheckboxProvider';
import { useFocusRing } from '@gluestack-ui/utils/aria';
import { useHover } from '@gluestack-ui/utils/aria';
import { useToggleState } from '@react-stately/toggle';
import { useCheckbox, useCheckboxGroupItem } from '../aria';
import { CheckboxGroupContext } from './CheckboxGroup';
import { combineContextAndProps, mergeRefs, stableHash, } from '@gluestack-ui/utils/common';
import { useFormControlContext } from '../../form-control/creator';
import { VisuallyHidden } from '@react-aria/visually-hidden';
export const Checkbox = (StyledCheckbox) => forwardRef((_a, ref) => {
    var _b;
    var { children } = _a, props = __rest(_a, ["children"]);
    const { isHovered: isHoveredProp, isFocusVisible: isFocusVisibleProp, isChecked: isCheckedProp, isDisabled: isDisabledProp, isInvalid: isInvalidProp, isReadOnly: isReadOnlyProp, isIndeterminate: isIndeterminateProp, isFocused, isPressed, } = props;
    const formControlContext = useFormControlContext();
    const _c = combineContextAndProps(formControlContext, props), { isInvalid, isReadOnly, isIndeterminate } = _c, combinedProps = __rest(_c, ["isInvalid", "isReadOnly", "isIndeterminate"]);
    const checkboxGroupContext = useContext(CheckboxGroupContext);
    const state = useToggleState(Object.assign(Object.assign({}, combinedProps), { defaultSelected: props.defaultIsChecked, isSelected: isCheckedProp }));
    //aria-state-hook
    const _ref = React.useRef(null);
    const { isHovered } = useHover({}, _ref);
    const { focusProps, isFocusVisible } = useFocusRing();
    const ariaLabel = combinedProps['aria-label'] || combinedProps.value || 'Checkbox';
    const mergedRef = mergeRefs([ref, _ref]);
    let groupItemInputProps = {
        inputProps: {},
    };
    if (checkboxGroupContext === null || checkboxGroupContext === void 0 ? void 0 : checkboxGroupContext.state) {
        try {
            groupItemInputProps = useCheckboxGroupItem(Object.assign(Object.assign({}, combinedProps), { 'aria-label': ariaLabel, 'value': combinedProps.value }), checkboxGroupContext.state, 
            //@ts-ignore
            mergedRef);
        }
        catch (error) {
            console.warn('CheckboxGroupItem hook failed, falling back to standalone checkbox:', error);
            groupItemInputProps = { inputProps: {} };
        }
    }
    const standaloneCheckboxProps = useCheckbox(Object.assign(Object.assign({}, combinedProps), { 'aria-label': ariaLabel }), state, 
    //@ts-ignore
    mergedRef);
    // Use group props if available and valid, otherwise use standalone
    const { inputProps: finalInputProps } = (checkboxGroupContext === null || checkboxGroupContext === void 0 ? void 0 : checkboxGroupContext.state) && ((_b = groupItemInputProps.inputProps) === null || _b === void 0 ? void 0 : _b.onChange)
        ? groupItemInputProps
        : standaloneCheckboxProps;
    const inputProps = React.useMemo(() => finalInputProps, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        finalInputProps === null || finalInputProps === void 0 ? void 0 : finalInputProps.checked,
        finalInputProps === null || finalInputProps === void 0 ? void 0 : finalInputProps.disabled,
        finalInputProps === null || finalInputProps === void 0 ? void 0 : finalInputProps.value,
        finalInputProps === null || finalInputProps === void 0 ? void 0 : finalInputProps.onChange,
    ]);
    const contextCombinedProps = React.useMemo(() => {
        return Object.assign(Object.assign({}, checkboxGroupContext), combinedProps);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stableHash(combinedProps)]);
    const { checked: isChecked, disabled: isDisabled } = inputProps || {};
    return (<StyledCheckbox {...contextCombinedProps} role="label" 
    // remove in future, role="label" is not supported in react-native-web, PR is open
    accessibilityRole="label" ref={mergedRef} states={{
            checked: isChecked || isCheckedProp,
            disabled: isDisabled || isDisabledProp,
            hover: isHovered || isHoveredProp,
            invalid: isInvalid || isInvalidProp,
            readonly: isReadOnly || isReadOnlyProp,
            active: isPressed,
            focus: isFocused,
            indeterminate: isIndeterminate || isIndeterminateProp,
            focusVisible: isFocusVisible || isFocusVisibleProp,
        }} 
    // data attributes for uniwind
    data-checked={isChecked || isCheckedProp ? 'true' : 'false'} data-disabled={isDisabled || isDisabledProp ? 'true' : 'false'} data-hover={isHovered || isHoveredProp ? 'true' : 'false'} data-invalid={isInvalid || isInvalidProp ? 'true' : 'false'} data-readonly={isReadOnly || isReadOnlyProp ? 'true' : 'false'} data-active={isPressed ? 'true' : 'false'} data-focus={isFocused ? 'true' : 'false'} data-indeterminate={isIndeterminate || isIndeterminateProp ? 'true' : 'false'} data-focus-visible={isFocusVisible || isFocusVisibleProp ? 'true' : 'false'} 
    // data attributes for nativewind
    dataSet={{
            checked: isChecked || isCheckedProp ? 'true' : 'false',
            disabled: isDisabled || isDisabledProp ? 'true' : 'false',
            hover: isHovered || isHoveredProp ? 'true' : 'false',
            invalid: isInvalid || isInvalidProp ? 'true' : 'false',
            readonly: isReadOnly || isReadOnlyProp ? 'true' : 'false',
            active: isPressed ? 'true' : 'false',
            focus: isFocused ? 'true' : 'false',
            indeterminate: isIndeterminate || isIndeterminateProp ? 'true' : 'false',
            focusVisible: isFocusVisible || isFocusVisibleProp ? 'true' : 'false',
        }}>
        <CheckboxProvider isChecked={isChecked || isCheckedProp} isDisabled={isDisabled || isDisabledProp} isFocusVisible={isFocusVisible || isFocusVisibleProp} isHovered={isHovered || isHoveredProp} isInvalid={isInvalid || isInvalidProp} isReadOnly={isReadOnly || isReadOnlyProp} isIndeterminate={isIndeterminate || isIndeterminateProp} isPressed={isPressed}>
          <VisuallyHidden>
            <input {...inputProps} {...focusProps} ref={mergedRef}/>
          </VisuallyHidden>
          {children}
        </CheckboxProvider>
      </StyledCheckbox>);
});
//# sourceMappingURL=Checkbox.web.jsx.map