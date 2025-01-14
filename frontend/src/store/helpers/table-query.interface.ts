export interface ITableQuery<T extends object> {
    filter: Partial<T>;
    order: {
        by: keyof T | undefined;
        asc: boolean;
    };
    limit: number;
}