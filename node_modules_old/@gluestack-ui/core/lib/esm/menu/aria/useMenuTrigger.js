import { useOverlayTrigger } from '../../overlay/aria';
/**
 * Provides the behavior and accessibility implementation for a menu trigger.
 * @param props - Props for the menu trigger.
 * @param state - State for the menu trigger.
 */
export function useMenuTrigger(props, state, ref) {
    const { triggerProps } = useOverlayTrigger(props, state, ref);
    return {
        menuTriggerProps: Object.assign({ onPress() {
                state.toggle();
            } }, triggerProps),
        menuProps: {},
    };
}
//# sourceMappingURL=useMenuTrigger.js.map