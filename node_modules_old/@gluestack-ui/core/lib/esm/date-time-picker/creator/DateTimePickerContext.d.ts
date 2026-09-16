import React from 'react';
export type DateTimePickerMode = 'date' | 'time' | 'datetime';
export interface DateTimePickerContextValue {
    value?: Date;
    onChange?: (date: Date | undefined) => void;
    mode: DateTimePickerMode;
    minimumDate?: Date;
    maximumDate?: Date;
    locale?: string;
    timeZoneOffsetInMinutes?: number;
    is24Hour?: boolean;
    disabled?: boolean;
    placeholder?: string;
    format?: string;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}
export declare const DateTimePickerContext: React.Context<DateTimePickerContextValue>;
export declare const useDateTimePicker: () => DateTimePickerContextValue;
export interface DateTimePickerProviderProps {
    children: React.ReactNode;
    value?: Date;
    onChange?: (date: Date | undefined) => void;
    mode?: DateTimePickerMode;
    minimumDate?: Date;
    maximumDate?: Date;
    locale?: string;
    timeZoneOffsetInMinutes?: number;
    is24Hour?: boolean;
    disabled?: boolean;
    placeholder?: string;
    format?: string;
}
export declare const DateTimePickerProvider: React.FC<DateTimePickerProviderProps>;
//# sourceMappingURL=DateTimePickerContext.d.ts.map