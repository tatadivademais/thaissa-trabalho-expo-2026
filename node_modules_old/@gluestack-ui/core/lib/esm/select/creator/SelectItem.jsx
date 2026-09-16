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
import { Platform } from 'react-native';
import { SelectPortalContext } from './SelectContext';
export const SelectItem = (StyledSelectItem, StyledSelectItemText) => forwardRef((_a, ref) => {
    var { 
    // isDisabled,
    // isFocused,
    // isFocusVisible,
    // isHovered,
    // isInvalid,
    label, value, textStyle } = _a, props = __rest(_a, ["label", "value", "textStyle"]);
    const { onValueChange, handleClose, value: activeValue, setLabel, } = React.useContext(SelectPortalContext);
    if (Platform.OS !== 'web') {
        return (<StyledSelectItem ref={ref} onPress={() => {
                if (!props.isDisabled) {
                    onValueChange(value);
                    setLabel(label);
                    handleClose();
                }
            }} {...props} states={{
                checked: activeValue === value,
            }} 
        // data attributes for uniwind
        data-checked={activeValue === value ? 'true' : 'false'} 
        // data attributes for nativewind
        dataSet={{
                checked: activeValue == value ? 'true' : 'false',
            }}>
            <StyledSelectItemText {...textStyle}>{label}</StyledSelectItemText>
          </StyledSelectItem>);
    }
    return (<option value={value} disabled={props.isDisabled} ref={ref}>
          {label}
        </option>);
});
//# sourceMappingURL=SelectItem.jsx.map