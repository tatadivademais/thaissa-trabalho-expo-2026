import * as React from 'react';
import { Keyboard, Platform } from 'react-native';
export const useKeyboardBottomInset = () => {
    const [bottom, setBottom] = React.useState(0);
    const subscriptions = React.useRef([]);
    React.useEffect(() => {
        function onKeyboardChange(e) {
            if (Platform.OS === 'ios') {
                if (e.startCoordinates &&
                    e.endCoordinates.screenY <= e.startCoordinates.screenY)
                    setBottom(e.endCoordinates.height / 2);
                else
                    setBottom(0);
            }
            else {
                if (e.endCoordinates.height > 0) {
                    setBottom(e.endCoordinates.height);
                }
                else {
                    setBottom(0);
                }
            }
        }
        if (Platform.OS === 'ios') {
            subscriptions.current = [
                Keyboard.addListener('keyboardWillChangeFrame', onKeyboardChange),
            ];
        }
        else {
            subscriptions.current = [
                Keyboard.addListener('keyboardDidHide', onKeyboardChange),
                Keyboard.addListener('keyboardDidShow', onKeyboardChange),
            ];
        }
        return () => {
            subscriptions.current.forEach((subscription) => {
                subscription.remove();
            });
        };
    }, [setBottom, subscriptions]);
    return bottom;
};
//# sourceMappingURL=index.js.map