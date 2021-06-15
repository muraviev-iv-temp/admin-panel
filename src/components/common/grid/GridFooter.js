import { useState } from "react";
import { getThemedClassName } from "../../../common/utils";
import { Align } from "../Align";
import { Button } from "../Button";
import { Popup } from "../Popup";
import "./GridFooter.css"
import { GridPagination } from "./GridPagination";

function RemoveButton(props) {
    const { classModificator, onDeleteSelected } = props;
    const [state, setState] = useState({droppedDown: false});
    return (
        <Button text = 'Удалить' 
                icon = 'Bin' 
                onClick = {()=>setState({...state, droppedDown: !state.droppedDown})} 
                className = {getThemedClassName(['admin-panel__red-button', 'grid__footer-button'], classModificator)}>
            {state.droppedDown && (
                <Popup direction="up">
                    <p className={getThemedClassName(['remove-dialog__caption'], classModificator)}>Удалить N записей?</p>
                    <Button className = {getThemedClassName(['admin-panel__transparent-button', 'remove-dialog__button'], classModificator)}
                        text="Удалить"
                        onClick={onDeleteSelected} />
                    <Button className = {getThemedClassName(['admin-panel__blue-button'], classModificator)}
                        text="Отмена" />
                </Popup>
            )}
        </Button>
    );
}

export function GridFooter(props) {
    const {classModificator, selectedCount, pagination, onPageChange, onDeleteSelected} = props;
    return (
        <div className = {getThemedClassName(['grid__footer'], classModificator)}>
            <div className = 'grid__footer-selection'>
                <Align className = "grid__footer-item">
                    <p className = {getThemedClassName(['grid__footer-selection-count'], classModificator)}>Выбрано записей: {selectedCount}</p>
                </Align>
                <Align className = "grid__footer-item">
                    <Button text = 'Изменить статус' icon = 'Pencil' className = {getThemedClassName(['admin-panel__blue-button', 'grid__footer-button'], classModificator)} />
                </Align>
                <Align className = "grid__footer-item">
                    <RemoveButton classModificator={classModificator} onDeleteSelected = {onDeleteSelected} />
                </Align>
            </div>
            {pagination?.pagesCount > 1 && (
                <div className = "grid__footer-pagination">
                    <Align>
                        <GridPagination pagination = {pagination} onPageChange = {onPageChange} classModificator = {classModificator} />
                    </Align>
                </div>
            )}
        </div>
    )
}