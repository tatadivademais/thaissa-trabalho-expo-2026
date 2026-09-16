import { useSwitch as useSwitchWeb } from '@react-aria/switch';
/**
 * Provides the behavior and accessibility implementation for a switch component.
 * A switch is similar to a checkbox, but represents on/off values as opposed to selection.
 * @param props - Props for the switch.
 * @param state - State for the switch, as returned by `useToggleState`.
 * @param ref - Ref to the HTML input element.
 */
export function useSwitch(props, state, ref) {
    const label = props.accessibilityLabel;
    let temp = useSwitchWeb(Object.assign(Object.assign({}, props), { 'aria-label': label }), state, ref);
    return temp;
}
//# sourceMappingURL=useSwitch.web.js.map