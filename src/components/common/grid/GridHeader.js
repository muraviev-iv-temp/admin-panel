import "./GridHeader.css";
import { getThemedClassName, SVG } from "./../../../common/utils"
import { GridCheckCell } from "./GridCheckCell";

export function GridHeader(props) {
    const {columns, classModificator} = props
    const renderSort = (column) => {
        if(column.sortable) 
            return (
                <span className = {getThemedClassName(['grid__header-cell-sort'], classModificator)} >
                    <SVG.VArrow />                   
                </span>
            );
    };


    return (
        <div className = {getThemedClassName(['grid__header'], classModificator)}>
            <GridCheckCell classModificator = {classModificator} />
            {columns.map(column => (
                <div key = {column.id} className = {getThemedClassName(['grid__header-cell'], classModificator)}>
                    <div>
                        <span className = {getThemedClassName(['grid__header-cell-text'], classModificator)}>{column.title}</span>
                        {renderSort(column)}
                    </div>
                </div>
            ))}
        </div>
    );
}