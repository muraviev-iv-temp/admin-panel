import { IExtractObjectValue } from "./GridInterfaces";

export class ColumnProcessor {
    extractObjectValue: IExtractObjectValue = function (row: object, fieldName: string): string {
        const r:{[index: string]: any} = row;
        return String(r[fieldName] || '');
    }
    extractObjectDateValue = function (row: object, fieldName: string): Date {
        const r:{[index: string]: any} = row;
        return new Date(r[fieldName] || '');
    }
}