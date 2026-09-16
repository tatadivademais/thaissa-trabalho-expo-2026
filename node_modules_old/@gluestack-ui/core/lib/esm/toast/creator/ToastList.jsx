/* eslint-disable react-native/no-inline-styles */
import { useKeyboardBottomInset } from '@gluestack-ui/utils/hooks';
import { Overlay } from '../../overlay/creator';
import React from 'react';
import { Platform, View, Animated } from 'react-native';
import { initialWindowMetrics, SafeAreaProvider, SafeAreaView, } from 'react-native-safe-area-context';
import { ToastContext } from './ToastContext';
const initialAnimationOffset = 24;
const transitionConfig = {
    'bottom': initialAnimationOffset,
    'top': -initialAnimationOffset,
    'top right': -initialAnimationOffset,
    'top left': -initialAnimationOffset,
    'bottom left': initialAnimationOffset,
    'bottom right': initialAnimationOffset,
};
const toastPositionStyle = Platform.OS === 'web' ? 'fixed' : 'absolute';
const isWeb = Platform.OS === 'web';
const POSITIONS = {
    'top': {
        top: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    'top right': {
        top: 0,
        right: 0,
        alignItems: 'flex-end',
    },
    'top left': {
        top: 0,
        left: 0,
        alignItems: 'flex-start',
    },
    'bottom': {
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    'bottom left': {
        bottom: 0,
        left: 0,
        alignItems: 'flex-start',
    },
    'bottom right': {
        bottom: 0,
        right: 0,
        alignItems: 'flex-end',
    },
};
export const ToastList = () => {
    const { toastInfo, visibleToasts, removeToast, ViewComponent } = React.useContext(ToastContext);
    const ViewComponentRef = (ViewComponent === null || ViewComponent === void 0 ? void 0 : ViewComponent.current) || View;
    const bottomInset = useKeyboardBottomInset() * 2;
    const getPositions = () => {
        return Object.keys(toastInfo);
    };
    let hasToastOnOverlay = false;
    getPositions().map((position) => {
        var _a;
        if (((_a = toastInfo[position]) === null || _a === void 0 ? void 0 : _a.length) > 0)
            hasToastOnOverlay = true;
    });
    return getPositions().length > 0 ? (<Overlay isOpen={hasToastOnOverlay} isKeyboardDismissable={false}>
      {getPositions().map((position) => {
            if (Object.keys(POSITIONS).includes(position))
                return (<View key={position} style={Object.assign({ justifyContent: 'center', margin: 'auto', 
                        //@ts-expect-error it is properly defined above per-platform
                        position: toastPositionStyle, pointerEvents: isWeb ? 'none' : 'box-none' }, POSITIONS[position])}>
              {toastInfo[position].map((toast) => {
                        var _a, _b;
                        return (<SafeAreaProvider key={toast.id} initialMetrics={initialWindowMetrics}>
                    <SafeAreaView style={{ pointerEvents: isWeb ? 'none' : 'box-none' }}>
                      <AnimatedToastView key={toast.id} visible={visibleToasts[toast.id]} position={position} ViewComponent={ViewComponentRef} containerStyle={(_a = toast.config) === null || _a === void 0 ? void 0 : _a.containerStyle} avoidKeyboard={(_b = toast.config) === null || _b === void 0 ? void 0 : _b.avoidKeyboard} bottomInset={bottomInset} onExit={() => {
                                var _a, _b;
                                removeToast(toast.id);
                                ((_a = toast.config) === null || _a === void 0 ? void 0 : _a.onCloseComplete) &&
                                    ((_b = toast.config) === null || _b === void 0 ? void 0 : _b.onCloseComplete());
                            }}>
                        {toast.component}
                      </AnimatedToastView>
                    </SafeAreaView>
                  </SafeAreaProvider>);
                    })}
            </View>);
            else
                return null;
        })}
    </Overlay>) : null;
};
const AnimatedToastView = ({ visible, position, ViewComponent, containerStyle, avoidKeyboard, bottomInset, onExit, children, }) => {
    const initialOffset = transitionConfig[position] || 0;
    const opacity = React.useRef(new Animated.Value(visible ? 1 : 0)).current;
    const translateY = React.useRef(new Animated.Value(visible ? 0 : initialOffset)).current;
    const prevVisible = React.useRef(visible);
    const AnimatedViewComponent = React.useMemo(() => Animated.createAnimatedComponent(ViewComponent), [ViewComponent]);
    React.useEffect(() => {
        if (prevVisible.current !== visible) {
            if (visible) {
                // Animate in
                Animated.parallel([
                    Animated.timing(opacity, {
                        toValue: 1,
                        duration: 150,
                        useNativeDriver: true,
                    }),
                    Animated.timing(translateY, {
                        toValue: 0,
                        duration: 150,
                        useNativeDriver: true,
                    }),
                ]).start();
            }
            else {
                // Animate out
                Animated.parallel([
                    Animated.timing(opacity, {
                        toValue: 0,
                        duration: 150,
                        useNativeDriver: true,
                    }),
                    Animated.timing(translateY, {
                        toValue: initialOffset,
                        duration: 150,
                        useNativeDriver: true,
                    }),
                ]).start(() => {
                    onExit();
                });
            }
            prevVisible.current = visible;
        }
    }, [visible, opacity, translateY, initialOffset, onExit]);
    if (!visible && !prevVisible.current) {
        return null;
    }
    return (<AnimatedViewComponent style={[
            {
                opacity,
                transform: [{ translateY }],
                pointerEvents: isWeb ? 'none' : 'box-none',
            },
            containerStyle,
        ]}>
      <View style={{
            bottom: ['bottom', 'bottom-left', 'bottom-right'].includes(position) &&
                avoidKeyboard
                ? bottomInset
                : undefined,
        }}>
        {children}
      </View>
    </AnimatedViewComponent>);
};
//# sourceMappingURL=ToastList.jsx.map