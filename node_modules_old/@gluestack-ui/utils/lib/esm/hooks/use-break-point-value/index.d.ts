declare const screenSize: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
};
type breakpoints = keyof typeof screenSize | 'default';
type BreakPointValue = Partial<Record<breakpoints, unknown>>;
export declare const getBreakPointValue: (values: BreakPointValue, width: number) => unknown;
export declare function useBreakpointValue(values: BreakPointValue): unknown;
export declare function isValidBreakpoint(breakPointWidth: number, width?: number): boolean;
export {};
//# sourceMappingURL=index.d.ts.map