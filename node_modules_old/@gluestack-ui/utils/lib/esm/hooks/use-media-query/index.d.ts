type QueryKeys = 'maxWidth' | 'minWidth' | 'maxHeight' | 'minHeight' | 'orientation';
type SubQuery = {
    [queryKey in QueryKeys]?: number | string;
};
type Query = Array<SubQuery>;
export declare function useMediaQuery(query: SubQuery | Query): boolean[];
export {};
//# sourceMappingURL=index.d.ts.map