export interface IExtractObjectValue {
    (row: object, fieldName: string): string
}

export interface IEnumItem {
    id: string,
    text: string,
    icon: string
}

export interface IComponent {
    (props: object): object;
}

export interface IColumnProcessor {
    readonly columnType: string;
    getCellData(row: object, fieldName: string): object;
    getCellComponent(): IComponent;
    getFilterComponent(): IComponent | null;
}

export interface IGridManager {
    requireProcessor(column: IColumnData): IColumnProcessor;
    findProcessor(column: IColumnData, silent?: boolean): IColumnProcessor | null;
}

export interface IGridColumn {
    getType(): string;
    FieldName: string;
    Processor: IColumnProcessor;
    IsSortable: boolean;
    GridMgr: IGridManager;
}

export interface IColumnData {
    title: string;
    id: number;
    type: string;
    field: string;
    sortable?: boolean;
    filterable?: boolean;
    values?: IEnumItem[];
}