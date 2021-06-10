import { GridHeader } from "./GridHeader";
import "./Grid.css"
import { GridRow } from "./GridRow";
import { GridFooter } from "./GridFooter";
import { GridFilter } from "./GridFilter";
import { GridManager } from "./gridManager/GridManager";
import { getThemedClassName } from "../../../common/utils";

export function Grid(props) {
    const {columns, rows, classModificator} = props;
    const gridManager = new GridManager(columns);

    return (
        <div className = {getThemedClassName(['grid'], classModificator)}>
            <GridFilter gridManager = {gridManager} columns = {columns} classModificator = {classModificator} />
            <GridHeader columns = {columns} classModificator = {classModificator}/>
            <div className = {getThemedClassName(['grid__body'], classModificator)}>
                <div className = 'grid__rows'>
                {rows && rows.map(row => (
                    <GridRow gridManager = {gridManager} key = {row.id} rowData = {row} columns = {columns}  classModificator = {classModificator} />    
                ))}
                </div>
            </div>
            <GridFooter classModificator = {classModificator} />
        </div>
    );
}