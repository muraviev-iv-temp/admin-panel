import { PlainTextCell } from "../GridCell";
import { DateFilter } from "../GridColumnFilter";
import { ColumnProcessor } from "./ColumnProcessor";
import { IColumnProcessor, IComponent } from "./GridInterfaces";

export class DateColumnProcessor extends ColumnProcessor implements IColumnProcessor {
    columnType: string = 'date';

    normalizeDate(value: Date): string {
        return `${
            String(value.getDate()).padStart(2, '0')
        }.${
            String(value.getMonth() + 1).padStart(2, '0')
        }.${value.getFullYear()
        }, ${
            String(value.getHours()).padStart(2, '0')
        }:${
            String(value.getMinutes()).padStart(2, '0')
        }`
    }

    getCellData(row: object, fieldName: string): object {
        const value: Date = this.extractObjectDateValue(row, fieldName);
        return ({text: String(this.normalizeDate(value))})
    }

    getCellComponent(): IComponent {
        return PlainTextCell
    }

    getFilterComponent(): IComponent | null {
        return DateFilter;
    }
}