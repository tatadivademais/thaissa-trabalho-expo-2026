var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { mergeProps } from '@react-aria/utils';
export function usePress(_a) {
    var { isDisabled, onPress, onPressStart, onPressEnd, onPressUp, // No onPressUp on RN.
    onPressChange, isPressed: isPressedProp } = _a, restProps = __rest(_a, ["isDisabled", "onPress", "onPressStart", "onPressEnd", "onPressUp", "onPressChange", "isPressed"]);
    let [isPressed, setPressed] = React.useState(false);
    let pressProps = {
        onPress: (e) => {
            if (isDisabled)
                return;
            onPress && onPress(e);
        },
        onPressIn: (e) => {
            if (isDisabled)
                return;
            onPressStart && onPressStart(e);
            setPressed(true);
            onPressChange && onPressChange(true);
        },
        onPressOut: (e) => {
            if (isDisabled)
                return;
            onPressEnd && onPressEnd(e);
            setPressed(false);
            onPressChange && onPressChange(false);
            onPressUp && onPressUp(e);
        },
    };
    pressProps = mergeProps(pressProps, restProps);
    return {
        isPressed: isPressedProp || isPressed,
        pressProps,
    };
}
//# sourceMappingURL=usePress.js.map