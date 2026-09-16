import React from 'react';
import type { IToastProps } from './types';
export declare const ToastProvider: ({ children, ViewComponent, }: {
    children: any;
    ViewComponent?: any;
}) => React.JSX.Element;
export declare const getToastHook: (ViewComponent: any) => () => {
    show: (props: IToastProps) => string;
    close: (id: string) => void;
    closeAll: () => void;
    isActive: (id: string) => boolean;
};
//# sourceMappingURL=Toast.d.ts.map