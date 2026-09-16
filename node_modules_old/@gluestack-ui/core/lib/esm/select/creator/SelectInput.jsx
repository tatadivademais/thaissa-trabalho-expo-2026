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
import React, { forwardRef, useEffect } from 'react';
import { SelectContext } from './SelectContext';
export const SelectInput = (StyledSelectInput) => forwardRef((_a, ref) => {
    var { placeholder: placeholderProp } = _a, props = __rest(_a, ["placeholder"]);
    const { setValue, value, label, isDisabled, placeholder, setPlaceholder } = React.useContext(SelectContext);
    useEffect(() => {
        setPlaceholder && setPlaceholder(placeholderProp);
    }, [placeholderProp, setPlaceholder]);
    return (<StyledSelectInput ref={ref} states={{
            disabled: isDisabled,
        }} 
    // data attributes for uniwind
    data-disabled={isDisabled ? 'true' : 'false'} 
    // data attributes for nativewind
    dataSet={{
            disabled: isDisabled ? 'true' : 'false',
        }} disabled={isDisabled} aria-hidden={true} editable={false} tabIndex={-1} pointerEvents="none" 
    // android
    importantForAccessibility="no" placeholder={placeholder} value={label ? label : value ? value : ''} onChangeText={(text) => setValue(text)} {...props}/>);
});
//# sourceMappingURL=SelectInput.jsx.map