import { PlainTextCell } from "../GridCell";
import { ColumnProcessor } from "./ColumnProcessor";
import { IColumnProcessor, IComponent } from "./GridInterfaces";

export class TextColumnProcessor extends ColumnProcessor implements IColumnProcessor {
    columnType: string = 'text';
    getCellData = (row: object, fieldName: string) => ({text: this.extractObjectValue(row, fieldName)});

    getCellComponent(): IComponent {
        return PlainTextCell
    }

    getFilterComponent(): IComponent | null {
        return null;
    }
}