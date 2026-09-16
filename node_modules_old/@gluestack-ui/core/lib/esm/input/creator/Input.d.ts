import React from 'react';
import { NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';
export interface InputProps {
    children?: React.ReactNode;
    name?: string;
    type?: string;
    onKeyPress?: (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void;
    editable?: boolean;
    disabled?: boolean;
    secureTextEntry?: boolean;
    id?: string;
    isDisabled?: boolean;
    isInvalid?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;
    onFocus?: (e: any) => void;
    onBlur?: (e: any) => void;
    [key: string]: any;
}
export declare const Input: (StyledInput: any) => React.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React.RefAttributes<any>>;
//# sourceMappingURL=Input.d.ts.map