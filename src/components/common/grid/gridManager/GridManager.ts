import { DateColumnProcessor } from "./DateColumnProcessor";
import { EnumColumnProcessor } from "./EnumColumnProcessor";
import { IColumnData, IColumnProcessor, IGridManager } from "./GridInterfaces";
import { NumberColumnProcessor } from "./NumberColumnProcessor";
import { SumColumnProcessor } from "./SumColumnProcessor";
import { TextColumnProcessor } from "./TextColumnProcesor";

export class GridManager implements IGridManager {
    private processors:IColumnProcessor[];

    constructor(columns: IColumnData[]) {
        this.processors = [];
        columns.forEach(column => {
            if(!this.findProcessor(column, true)) 
                switch (column.type) {
                    case "enum":  
                    console.log(column.values)
                        this.processors.push(new EnumColumnProcessor(column.id, column.values || []));
                        break;
                    case "number":
                        this.processors.push(new NumberColumnProcessor());
                        break;
                    case "sum":
                        this.processors.push(new SumColumnProcessor());
                        break;
                    case "text":
                        this.processors.push(new TextColumnProcessor());
                        break;
                    case "date":
                        this.processors.push(new DateColumnProcessor());
                        break;
                    default:;
                } 
                
        });
    }

    findProcessor(column: IColumnData, silent?: boolean): IColumnProcessor | null {
        const processorName = column.type === "enum" ? `${column.type}_${column.id}` : column.type;

        const proc = this.processors.find((proc) => proc.columnType === processorName);
        if(proc)
            return proc
        else if (silent)
            return null
        throw new Error(`processor '${processorName}' not found`)
    }

    requireProcessor(column: IColumnData): IColumnProcessor {
        const processorName = column.type === "enum" ? `${column.type}_${column.id}` : column.type;
        const proc = this.processors.find((proc) => proc.columnType === processorName);
        if(proc)
            return proc
        else
            throw new Error(`processor '${processorName}' not found`)
    }
}