export interface TableQuery<Model extends object, Filter extends object> {
    filter: Partial<Filter>;
    order: {
        by: keyof Model | undefined;
        asc: boolean;
    };
    limit: number;
}