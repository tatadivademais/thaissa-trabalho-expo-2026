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
import { useHover, usePress } from '@gluestack-ui/utils/aria';
import { useFocus } from '@gluestack-ui/utils/aria';
import { useToggleState } from '@react-stately/toggle';
import { useCheckbox, useCheckboxGroupItem } from '../aria';
import { CheckboxGroupContext } from './CheckboxGroup';
import { combineContextAndProps, mergeRefs, stableHash, composeEventHandlers, } from '@gluestack-ui/utils/common';
import { useFormControlContext } from '../../form-control/creator';
export const Checkbox = (StyledCheckbox) => forwardRef((_a, ref) => {
    var { _onPress, onPressIn, onPressOut, onHoverIn, onHoverOut, onFocus, onBlur, children } = _a, props = __rest(_a, ["_onPress", "onPressIn", "onPressOut", "onHoverIn", "onHoverOut", "onFocus", "onBlur", "children"]);
    const { isHovered: isHoveredProp, isChecked: isCheckedProp, isDisabled: isDisabledProp, isInvalid: isInvalidProp, isReadOnly: isReadOnlyProp, isPressed: isPressedProp, isFocused: isFocusedProp, isIndeterminate: isIndeterminateProp, isFocusVisible, } = props;
    const formControlContext = useFormControlContext();
    const _b = combineContextAndProps(formControlContext, props), { isInvalid, isReadOnly, isIndeterminate } = _b, combinedProps = __rest(_b, ["isInvalid", "isReadOnly", "isIndeterminate"]);
    const checkboxGroupContext = useContext(CheckboxGroupContext);
    const state = useToggleState(Object.assign(Object.assign({}, combinedProps), { defaultSelected: props.defaultIsChecked, isSelected: isCheckedProp }));
    const _ref = React.useRef(null);
    const mergedRef = mergeRefs([ref, _ref]);
    const ariaLabel = combinedProps['aria-label'] || combinedProps.value || 'Checkbox';
    const { inputProps: groupItemInputProps } = checkboxGroupContext
        ? // eslint-disable-next-line react-hooks/rules-of-hooks
            useCheckboxGroupItem(Object.assign(Object.assign({}, combinedProps), { 'aria-label': ariaLabel, 'value': combinedProps.value }), checkboxGroupContext.state, 
            //@ts-ignore
            mergedRef)
        : // eslint-disable-next-line react-hooks/rules-of-hooks
            useCheckbox(Object.assign(Object.assign({}, combinedProps), { 'aria-label': ariaLabel }), state, 
            //@ts-ignore
            mergedRef);
    const inputProps = React.useMemo(() => groupItemInputProps, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        groupItemInputProps.checked,
        groupItemInputProps.disabled,
        groupItemInputProps,
    ]);
    const contextCombinedProps = React.useMemo(() => {
        return Object.assign(Object.assign({}, checkboxGroupContext), combinedProps);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stableHash(combinedProps)]);
    const { hoverProps, isHovered } = useHover(isHoveredProp, _ref);
    const { focusProps, isFocused } = useFocus();
    const { checked: isChecked, disabled: isDisabled } = inputProps;
    const { pressProps, isPressed } = usePress({
        isDisabled: isDisabled || isDisabledProp,
    });
    return (<StyledCheckbox disabled={isDisabled || isDisabledProp} {...pressProps} {...contextCombinedProps} {...inputProps} ref={mergedRef} role="checkbox" onPressIn={composeEventHandlers(onPressIn, pressProps.onPressIn)} onPressOut={composeEventHandlers(onPressOut, pressProps.onPressOut)} 
    // @ts-ignore - web only
    onHoverIn={composeEventHandlers(onHoverIn, hoverProps.onHoverIn)} 
    // @ts-ignore - web only
    onHoverOut={composeEventHandlers(onHoverOut, hoverProps.onHoverOut)} 
    // @ts-ignore - web only
    onFocus={composeEventHandlers(composeEventHandlers(onFocus, focusProps.onFocus)
        // focusRingProps.onFocu
        )} 
    // @ts-ignore - web only
    onBlur={composeEventHandlers(composeEventHandlers(onBlur, focusProps.onBlur)
        // focusRingProps.onBlur
        )} states={{
            checked: isChecked || isCheckedProp,
            disabled: isDisabled || isDisabledProp,
            hover: isHovered || isHoveredProp,
            invalid: isInvalid || isInvalidProp,
            readonly: isReadOnly || isReadOnlyProp,
            active: isPressed,
            focus: isFocused,
            indeterminate: isIndeterminate || isIndeterminateProp,
            focusVisible: isFocusVisible,
        }} 
    // data attributes for uniwind
    data-checked={isChecked || isCheckedProp ? 'true' : 'false'} data-disabled={isDisabled || isDisabledProp ? 'true' : 'false'} data-hover={isHovered || isHoveredProp ? 'true' : 'false'} data-invalid={isInvalid || isInvalidProp ? 'true' : 'false'} data-readonly={isReadOnly || isReadOnlyProp ? 'true' : 'false'} data-active={isPressed ? 'true' : 'false'} data-focus={isFocused ? 'true' : 'false'} data-indeterminate={isIndeterminate || isIndeterminateProp ? 'true' : 'false'} data-focus-visible={isFocusVisible ? 'true' : 'false'} 
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
            focusVisible: isFocusVisible ? 'true' : 'false',
        }}>
          <CheckboxProvider isChecked={isChecked || isCheckedProp} isDisabled={isDisabled || isDisabledProp} isHovered={isHovered || isHoveredProp} isInvalid={isInvalid || isInvalidProp} isReadOnly={isReadOnly || isReadOnlyProp} isPressed={isPressed || isPressedProp} isFocused={isFocused || isFocusedProp} isIndeterminate={isIndeterminate || isIndeterminateProp} isFocusVisible={isFocusVisible}>
            {children}
          </CheckboxProvider>
        </StyledCheckbox>);
});
//# sourceMappingURL=Checkbox.jsx.map