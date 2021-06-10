import { PlainTextCell } from "../GridCell";
import { SumFilter } from "../GridColumnFilter";
import { ColumnProcessor } from "./ColumnProcessor";
import { IColumnProcessor, IComponent } from "./GridInterfaces";

export class SumColumnProcessor extends ColumnProcessor implements IColumnProcessor {
    columnType: string = 'sum';
    getCellData = (row: object, fieldName: string) => ({text: this.extractObjectValue(row, fieldName)});

    getCellComponent(): IComponent {
        return PlainTextCell;
    }

    getFilterComponent(): IComponent | null {
        return SumFilter;
    }
}