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
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { forwardRef, memo } from 'react';
import { RadioProvider } from './RadioProvider';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useFocusRing } from '@gluestack-ui/utils/aria';
import { useHover } from '@gluestack-ui/utils/aria';
import { useRadio } from '../aria';
import { useRadioGroup } from './RadioGroupContext';
import { stableHash, composeEventHandlers } from '@gluestack-ui/utils/common';
import { useFormControlContext } from '../../form-control/creator';
const RadioComponent = memo(forwardRef((_a, ref) => {
    var { StyledRadio, inputProps, inputRef, combinedProps, isChecked: isCheckedProp, isDisabled: isDisabledProp, isFocusVisible: isFocusVisibleProp, isHovered: isHoveredProp, isInvalid: isInvalidProp, isReadOnly: isReadOnlyProp, isIndeterminate: isIndeterminateProp, isFocused: isFocusedProp, isPressed: isPressedProp, children } = _a, props = __rest(_a, ["StyledRadio", "inputProps", "inputRef", "combinedProps", "isChecked", "isDisabled", "isFocusVisible", "isHovered", "isInvalid", "isReadOnly", "isIndeterminate", "isFocused", "isPressed", "children"]);
    const { isInvalid, isReadOnly, isIndeterminate } = combinedProps, restProps = __rest(combinedProps, ["isInvalid", "isReadOnly", "isIndeterminate"]);
    const { disabled: isDisabled, checked: isChecked } = inputProps;
    const _ref = React.useRef(null);
    const { isHovered } = useHover({}, _ref);
    const { focusProps, isFocusVisible } = useFocusRing();
    const [isFocused, setFocused] = React.useState(isFocusedProp);
    const [isPressed, setPressed] = React.useState(isPressedProp);
    const handleFocus = () => {
        setFocused(true);
    };
    const handleBlur = () => {
        isFocusedProp ? setFocused(true) : setFocused(false);
    };
    const handlePressIn = () => {
        setPressed(true);
    };
    const handlePressOut = () => {
        isPressedProp ? setPressed(true) : setPressed(false);
    };
    return (<StyledRadio {...props} {...restProps} role="label" 
    // remove in future, role="label" is not supported in react-native-web, PR is open
    accessibilityRole="label" ref={_ref} onMouseDown={handlePressIn} onMouseUp={handlePressOut} states={{
            readonly: isReadOnly,
            intermediate: isIndeterminate,
            checked: isChecked,
            focusVisible: isFocusVisible,
            disabled: isDisabled,
            invalid: isInvalid,
            hover: isHovered,
        }} 
    // data attributes for uniwind
    data-readonly={isReadOnly || isReadOnlyProp ? 'true' : 'false'} data-intermediate={isIndeterminate || isIndeterminateProp ? 'true' : 'false'} data-checked={isChecked || isCheckedProp ? 'true' : 'false'} data-focus-visible={isFocusVisible || isFocusVisibleProp ? 'true' : 'false'} data-disabled={isDisabled || isDisabledProp ? 'true' : 'false'} data-invalid={isInvalid || isInvalidProp ? 'true' : 'false'} data-hover={isHovered || isHoveredProp ? 'true' : 'false'} 
    // data attributes for nativewind
    dataSet={{
            readonly: isReadOnly ? 'true' : 'false',
            intermediate: isIndeterminate ? 'true' : 'false',
            checked: isChecked ? 'true' : 'false',
            focusVisible: isFocusVisible ? 'true' : 'false',
            disabled: isDisabled ? 'true' : 'false',
            invalid: isInvalid ? 'true' : 'false',
            hover: isHovered ? 'true' : 'false',
        }}>
          <RadioProvider isChecked={isChecked || isCheckedProp} isDisabled={isDisabled || isDisabledProp} isFocusVisible={isFocusVisible || isFocusVisibleProp} isHovered={isHovered || isHoveredProp} isInvalid={isInvalid || isInvalidProp} isReadOnly={isReadOnly || isReadOnlyProp} isIndeterminate={isIndeterminate || isIndeterminateProp} isFocused={isFocused || isFocusedProp} isPressed={isPressed || isPressedProp}>
            <VisuallyHidden>
              <input {...inputProps} {...focusProps} ref={ref} onFocus={(composeEventHandlers(handleFocus), focusProps.onFocus)} onBlur={(composeEventHandlers(handleBlur), focusProps.onBlur)}/>
            </VisuallyHidden>
            {children}
          </RadioProvider>
        </StyledRadio>);
}));
const Radio = (StyledRadio) => forwardRef((_a, ref) => {
    var _b, _c;
    var { isFocusVisible: isFocusVisibleProp, isHovered: isHoveredProp, isIndeterminate: isIndeterminateProp, isFocused: isFocusedProp, isPressed: isPressedProp, isInvalid: isInvalidProp, children } = _a, props = __rest(_a, ["isFocusVisible", "isHovered", "isIndeterminate", "isFocused", "isPressed", "isInvalid", "children"]);
    const formControlContext = useFormControlContext();
    const contextState = useRadioGroup('RadioGroupContext');
    const combinedProps = Object.assign(Object.assign(Object.assign({}, formControlContext), contextState), props);
    const inputRef = React.useRef(null);
    const radioState = useRadio(Object.assign(Object.assign({}, combinedProps), { children }), (_b = contextState.state.state) !== null && _b !== void 0 ? _b : {}, inputRef);
    const inputProps = React.useMemo(() => radioState.inputProps, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [radioState.inputProps.checked, radioState.inputProps.disabled]);
    const contextCombinedProps = React.useMemo(() => {
        return Object.assign({}, combinedProps);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stableHash(combinedProps)]);
    if (!contextState) {
        console.error('Error: Radio must be wrapped inside a Radio.Group');
    }
    const isInvalid = ((_c = contextCombinedProps === null || contextCombinedProps === void 0 ? void 0 : contextCombinedProps.state) === null || _c === void 0 ? void 0 : _c.validationState) === 'invalid'
        ? true
        : false;
    return (<RadioComponent StyledRadio={StyledRadio} inputProps={inputProps} combinedProps={contextCombinedProps} children={children} ref={ref} isFocusVisible={isFocusVisibleProp} isHovered={isHoveredProp} isIndeterminate={isIndeterminateProp} isFocused={isFocusedProp} isPressed={isPressedProp} isInvalid={isInvalid || isInvalidProp}/>);
});
export { Radio };
//# sourceMappingURL=Radio.web.jsx.map