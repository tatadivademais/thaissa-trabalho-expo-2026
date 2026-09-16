import { useCheckboxGroup as useCheckboxGroupWeb } from '@react-aria/checkbox';
import { mapDomPropsToRN } from '@gluestack-ui/utils/aria';
/**
 * Provides the behavior and accessibility implementation for a checkbox group component.
 * Checkbox groups allow users to select multiple items from a list of options.
 * @param props - Props for the checkbox group.
 * @param state - State for the checkbox group, as returned by `useCheckboxGroupState`.
 */
export function useCheckboxGroup(props, state) {
    const params = useCheckboxGroupWeb(props, state);
    return {
        labelProps: Object.assign(Object.assign({}, params.labelProps), mapDomPropsToRN(params.labelProps)),
        groupProps: Object.assign(Object.assign({}, params.groupProps), mapDomPropsToRN(params.groupProps)),
    };
}
//# sourceMappingURL=useCheckboxGroup.web.js.map