import { GridHeader } from "./GridHeader";
import "./Grid.css"
import { GridRow } from "./GridRow";
import { GridFooter } from "./GridFooter";
import { GridFilter } from "./GridFilter";
import { GridManager } from "./gridManager/GridManager";
import { getThemedClassName } from "../../../common/utils";
import { useState } from "react";

export function Grid(props) {
    const {columns, rows, classModificator, onPageChange, pagination, onDeleteRows} = props;
    const [state, setState] = useState({selected: [] })
    const gridManager = new GridManager(columns);
    const onHeaderCheck = (checked) => {
        if(checked)
            setState({...state, selected: rows.map(row => row.id)})
        else
            setState({...state, selected: []})
    }
    const onRowCheck = (checked, rowId) => {
        if(!checked) {
            setState({...state, selected: state.selected.filter(id => id !== rowId)})
        } else {
            const selected = state.selected;
            selected.push(rowId)
            setState({...state, selected})
        }
    }

    const onDeleteSelected = () => {
        onDeleteRows && onDeleteRows(state.selected)
        setState({...state, selected: []})
    }

    return (
        <div className = {getThemedClassName(['grid'], classModificator)}>
            <GridFilter gridManager = {gridManager} columns = {columns} classModificator = {classModificator} />
            <GridHeader checked = {state.selected.length !== 0} onCheck = {onHeaderCheck} columns = {columns} classModificator = {classModificator}/>
            <div className = {getThemedClassName(['grid__body'], classModificator)}>
                <div className = 'grid__rows'>
                {rows && rows.map(row => (
                    <GridRow gridManager = {gridManager} 
                        key = {row.id}
                        checked = {state.selected.find(id => id === row.id)} 
                        rowData = {row}
                        onCheck = {onRowCheck} 
                        columns = {columns}  
                        classModificator = {classModificator} />    
                ))}
                </div>
            </div>
            <GridFooter pagination = {pagination} 
                onPageChange = {onPageChange}
                onDeleteSelected = {onDeleteSelected} 
                selectedCount = {state.selected.length} 
                classModificator = {classModificator} />
        </div>
    );
}