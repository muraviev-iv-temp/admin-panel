import { EnumCell } from "../GridCell";
import { EnumFilter } from "../GridColumnFilter";
import { ColumnProcessor } from "./ColumnProcessor";
import { IColumnProcessor, IComponent, IEnumItem } from "./GridInterfaces";

export class EnumColumnProcessor extends ColumnProcessor implements IColumnProcessor {
    items: IEnumItem[];
    columnType: string = 'enum'; 
    constructor(id: number, items: IEnumItem[]) {
        super()
        this.columnType = this.columnType + '_' + id;
        this.items = items;
    }
    getCellData = (row: object, fieldName: string) => {
        const id: string = this.extractObjectValue(row, fieldName);
        const item: IEnumItem = this.items.find((enumItem) => enumItem.id === id) || {id: '', text: 'error', icon: ''};
        return {id, text: item.text, icon: item.icon};
    }

    getCellComponent(): IComponent {
        return EnumCell;
    }

    getFilterComponent(): IComponent | null {
        return EnumFilter;
    }
}