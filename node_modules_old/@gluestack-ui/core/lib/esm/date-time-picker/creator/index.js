import { DateTimePicker as DateTimePickerMain } from './DateTimePicker';
import { DateTimePickerTrigger } from './DateTimePickerTrigger';
import { DateTimePickerInput } from './DateTimePickerInput';
import { DateTimePickerIcon } from './DateTimePickerIcon';
export { DateTimePickerContext, useDateTimePicker, DateTimePickerProvider, } from './DateTimePickerContext';
export function createDateTimePicker({ Root, Trigger, Input, Icon, }) {
    const DateTimePicker = DateTimePickerMain(Root);
    DateTimePicker.Trigger = DateTimePickerTrigger(Trigger);
    DateTimePicker.Input = DateTimePickerInput(Input);
    DateTimePicker.Icon = DateTimePickerIcon(Icon);
    DateTimePicker.displayName = 'DateTimePicker';
    DateTimePicker.Trigger.displayName = 'DateTimePicker.Trigger';
    DateTimePicker.Input.displayName = 'DateTimePicker.Input';
    DateTimePicker.Icon.displayName = 'DateTimePicker.Icon';
    return DateTimePicker;
}
//# sourceMappingURL=index.js.map