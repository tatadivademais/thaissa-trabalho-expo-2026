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
import { useHover } from '@gluestack-ui/utils/aria';
import { useToggleState } from '@react-stately/toggle';
import { useFormControlContext } from '../../form-control/creator';
import { mergeRefs } from '@gluestack-ui/utils/common';
import { Platform } from 'react-native';
export function Switch(StyledSwitch) {
    return forwardRef((_a, ref) => {
        var { disabled, isDisabled, isInvalid, defaultValue, onToggle, value, onValueChange } = _a, props = __rest(_a, ["disabled", "isDisabled", "isInvalid", "defaultValue", "onToggle", "value", "onValueChange"]);
        const formControlContext = useFormControlContext();
        const combinedProps = Object.assign(Object.assign({}, formControlContext), props);
        const { id } = combinedProps, combinedPropsWithoutId = __rest(combinedProps, ["id"]);
        const inputId = Platform.OS === 'web' ? id : undefined;
        const styledSwitchProps = Platform.OS === 'web' ? combinedPropsWithoutId : combinedProps;
        const state = useToggleState({
            defaultSelected: !(defaultValue === null || defaultValue === undefined)
                ? defaultValue
                : !(value === null || value === undefined)
                    ? value
                    : false,
        });
        const checked = !(value === null || value === undefined)
            ? value
            : state.isSelected;
        const _ref = React.useRef(null);
        const { isHovered } = useHover({}, _ref);
        const mergedRef = mergeRefs([ref, _ref]);
        React.useEffect(() => {
            var _a, _b;
            if (!inputId)
                return;
            const inputElement = typeof HTMLInputElement !== 'undefined' &&
                _ref.current instanceof HTMLInputElement
                ? _ref.current
                : (_b = (_a = _ref.current) === null || _a === void 0 ? void 0 : _a.querySelector) === null || _b === void 0 ? void 0 : _b.call(_a, 'input');
            if (!inputElement)
                return;
            inputElement.id = inputId;
            return () => {
                if (inputElement.id === inputId) {
                    inputElement.removeAttribute('id');
                }
            };
        }, [inputId]);
        return (<StyledSwitch states={{
                hover: isHovered,
                disabled: disabled || isDisabled || combinedProps.isDisabled,
                invalid: isInvalid || combinedProps.isInvalid,
                checked: value || checked,
            }} 
        // data attributes for uniwind
        data-hover={isHovered ? 'true' : 'false'} data-disabled={disabled || isDisabled || combinedProps.isDisabled ? 'true' : 'false'} data-invalid={isInvalid || combinedProps.isInvalid ? 'true' : 'false'} data-checked={value || checked ? 'true' : 'false'} 
        // data attributes for nativewind
        dataSet={{
                hover: isHovered ? 'true' : 'false',
                disabled: disabled || isDisabled || combinedProps.isDisabled
                    ? 'true'
                    : 'false',
                invalid: isInvalid || combinedProps.isInvalid ? 'true' : 'false',
                checked: value || checked ? 'true' : 'false',
            }} disabled={disabled || isDisabled || combinedProps.isDisabled} onValueChange={(val) => {
                onValueChange && onValueChange(val);
                onToggle ? onToggle(val) : state.toggle();
            }} value={value || checked} {...styledSwitchProps} ref={mergedRef}/>);
    });
}
//# sourceMappingURL=Switch.jsx.map