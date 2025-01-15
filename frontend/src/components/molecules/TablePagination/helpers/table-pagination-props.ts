export interface ITablePaginationProps {
    limit: number;
    currentPage: number;
    listLength: number;
    onChangeLimit: (value: number) => void;
    onChangePage: (value?: number) => void;
}