import "./GridRow.css";
import { GridCheckCell } from "./GridCheckCell";
import { getThemedClassName } from "../../../common/utils";

export function GridRow(props) {
    const { rowData, columns, classModificator, gridManager, checked, onCheck } = props;
    const cells = columns.map((column) => {
        const processor = gridManager.findProcessor(column);
        const Cell = processor.getCellComponent()
        return (
            <div key = {column.id} className = {getThemedClassName(['grid__cell'], classModificator)}>
                <Cell classModificator = {classModificator} data = {processor.getCellData(rowData, column.field)} />
            </div>
        )        
    });

    const onCheckCellClick = (checked) => {
        onCheck && onCheck(checked, rowData.id)
    }

    return (
        <div className = {getThemedClassName(['grid__row'], classModificator)}>
            <GridCheckCell checked = {!!checked} onCheck = {onCheckCellClick} />
            {cells}
        </div>
    );
}