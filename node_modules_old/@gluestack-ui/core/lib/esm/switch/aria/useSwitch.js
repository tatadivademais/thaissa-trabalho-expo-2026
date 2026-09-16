/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
import { useToggle } from '@gluestack-ui/utils/aria';
import { mergeProps } from '@react-aria/utils';
/**
 * Provides the behavior and accessibility implementation for a switch component.
 * A switch is similar to a checkbox, but represents on/off values as opposed to selection.
 * @param props - Props for the switch.
 * @param state - State for the switch, as returned by `useToggleState`.
 * @param ref - Ref to the HTML input element.
 */
export function useSwitch(props, state, ref) {
    let { inputProps } = useToggle(props, state, ref);
    let { isSelected } = state;
    return {
        inputProps: mergeProps(inputProps, {
            'role': 'switch',
            'checked': isSelected,
            'accessible': true,
            'aria-checked': isSelected,
            'aria-disabled': props.isDisabled,
            'aria-readonly': props.isReadOnly,
        }),
    };
}
//# sourceMappingURL=useSwitch.js.map