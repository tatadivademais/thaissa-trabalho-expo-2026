import React, { createContext, useContext, useState, useCallback } from 'react';
export const DateTimePickerContext = createContext({
    mode: 'datetime',
    isOpen: false,
    setIsOpen: () => { },
});
export const useDateTimePicker = () => useContext(DateTimePickerContext);
export const DateTimePickerProvider = ({ children, value, onChange, mode = 'datetime', minimumDate, maximumDate, locale, timeZoneOffsetInMinutes, is24Hour, disabled, placeholder, format, }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleChange = useCallback((date) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(date);
    }, [onChange]);
    return (<DateTimePickerContext.Provider value={{
            value,
            onChange: handleChange,
            mode,
            minimumDate,
            maximumDate,
            locale,
            timeZoneOffsetInMinutes,
            is24Hour,
            disabled,
            placeholder,
            format,
            isOpen,
            setIsOpen,
        }}>
      {children}
    </DateTimePickerContext.Provider>);
};
//# sourceMappingURL=DateTimePickerContext.jsx.map