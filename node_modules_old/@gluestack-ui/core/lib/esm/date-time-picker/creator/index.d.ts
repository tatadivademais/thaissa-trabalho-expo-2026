import type { IDateTimePickerComponentType } from './types';
export { DateTimePickerContext, useDateTimePicker, DateTimePickerProvider, } from './DateTimePickerContext';
export type { DateTimePickerContextValue, DateTimePickerMode, } from './DateTimePickerContext';
export declare function createDateTimePicker<DateTimePickerProps, DateTimePickerTriggerProps, DateTimePickerInputProps, DateTimePickerIconProps>({ Root, Trigger, Input, Icon, }: {
    Root: React.ComponentType<DateTimePickerProps>;
    Trigger: React.ComponentType<DateTimePickerTriggerProps>;
    Input: React.ComponentType<DateTimePickerInputProps>;
    Icon: React.ComponentType<DateTimePickerIconProps>;
}): IDateTimePickerComponentType<DateTimePickerProps, DateTimePickerTriggerProps, DateTimePickerInputProps, DateTimePickerIconProps>;
//# sourceMappingURL=index.d.ts.map