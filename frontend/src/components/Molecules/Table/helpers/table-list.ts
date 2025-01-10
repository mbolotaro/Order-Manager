export function createTableListItem<T>(item: T): TableListItem<T> {
    return {...item, selected: false}
}

export type TableListItem<T> = T & { selected: boolean }