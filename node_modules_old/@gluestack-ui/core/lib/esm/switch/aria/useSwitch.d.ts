import type { AriaSwitchProps } from '@react-types/switch';
import type { RefObject } from 'react';
import type { ToggleState } from '@react-stately/toggle';
import type { AccessibilityProps } from 'react-native';
export interface SwitchAria {
    /** Props for the input element. */
    inputProps: any;
}
/**
 * Provides the behavior and accessibility implementation for a switch component.
 * A switch is similar to a checkbox, but represents on/off values as opposed to selection.
 * @param props - Props for the switch.
 * @param state - State for the switch, as returned by `useToggleState`.
 * @param ref - Ref to the HTML input element.
 */
export declare function useSwitch(props: AriaSwitchProps & AccessibilityProps, state: ToggleState, ref: RefObject<HTMLInputElement>): SwitchAria;
//# sourceMappingURL=useSwitch.d.ts.map