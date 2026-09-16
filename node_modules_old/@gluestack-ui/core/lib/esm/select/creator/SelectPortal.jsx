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
import { SelectContext, SelectPortalContext } from './SelectContext';
import { StyleSheet, Platform } from 'react-native';
import { mergeRefs } from '@gluestack-ui/utils/common';
const PLACEHOLDER_OPTION = '__GluestackPlaceholder__';
export const SelectPortal = (StyledSelectPortal) => forwardRef((_a, ref) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const _b = React.useContext(SelectContext), { isOpen, handleClose, closeOnOverlayClick, isDisabled, hoverRef, hoverProps, focusProps, onValueChange, value, setFocused, setValue, label, setLabel, onOpen, placeholder, isReadOnly } = _b, portalProps = __rest(_b, ["isOpen", "handleClose", "closeOnOverlayClick", "isDisabled", "hoverRef", "hoverProps", "focusProps", "onValueChange", "value", "setFocused", "setValue", "label", "setLabel", "onOpen", "placeholder", "isReadOnly"]);
    if (Platform.OS !== 'web') {
        return (<StyledSelectPortal isOpen={isOpen} onClose={handleClose} closeOnOverlayClick={closeOnOverlayClick} {...props} ref={ref}>
          <SelectPortalContext.Provider value={Object.assign({ isOpen,
                handleClose,
                closeOnOverlayClick,
                isDisabled,
                hoverRef,
                hoverProps,
                focusProps,
                setValue, value: !value ? PLACEHOLDER_OPTION : value, setLabel,
                label,
                isReadOnly,
                setFocused,
                onValueChange,
                placeholder }, portalProps)}>
            {children}
          </SelectPortalContext.Provider>
        </StyledSelectPortal>);
    }
    return (<>
        <select disabled={isDisabled || isReadOnly} {...focusProps} onMouseEnter={hoverProps.onHoverIn} onMouseLeave={hoverProps.onHoverOut} onChange={(e) => {
            onValueChange(e.target.value);
            setLabel(e.target.options[e.target.selectedIndex].text);
            handleClose();
        }} onKeyDown={(e) => {
            if (e.code === 'Space') {
                onOpen && onOpen();
            }
        }} ref={mergeRefs([ref, hoverRef])} value={!value ? PLACEHOLDER_OPTION : value} aria-label={placeholder} aria-readonly={isReadOnly} style={StyleSheet.flatten([
            {
                appearance: 'none',
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                position: 'absolute',
                width: '100%',
                height: '100%',
                opacity: 0,
                zIndex: 1,
                cursor: isDisabled ? 'not-allowed' : 'pointer',
            },
        ])} onClick={onOpen} onFocus={() => {
            setFocused(true);
        }} onBlur={() => {
            setFocused(false);
        }}>
          <option disabled value={PLACEHOLDER_OPTION}>
            {placeholder}
          </option>
          {children}
        </select>
      </>);
});
//# sourceMappingURL=SelectPortal.jsx.map