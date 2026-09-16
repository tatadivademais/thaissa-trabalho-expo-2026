import { mergeProps } from '@react-aria/utils';
import { usePress } from '../interactions';
import { getLabel } from '../utils';
/**
 * Handles interactions for toggle elements, e.g. Checkboxes and Switches.
 */
export function useToggle(props, state, _ref) {
    let { isDisabled = false, isRequired, isReadOnly, value, name,
    // validationState = 'valid', // No support for Invalid in RN
     } = props;
    let onPress = () => {
        state.setSelected(!state.isSelected);
    };
    let hasChildren = props.children != null;
    const label = getLabel(props);
    if (!hasChildren && !label) {
        console.warn('If you do not provide children, you must specify an aria-label for accessibility');
    }
    // This handles focusing the input on pointer down, which Safari does not do by default.
    let { pressProps } = usePress({
        isDisabled,
        onPress,
    });
    return {
        inputProps: mergeProps(props, Object.assign(Object.assign({ 'disabled': isDisabled, 'required': isRequired, 'readOnly': isReadOnly, value,
            name }, pressProps), { 'aria-label': label, 'aria-disabled': isDisabled })),
    };
}
//# sourceMappingURL=useToggle.js.map