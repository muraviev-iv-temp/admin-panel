import { getThemedClassName } from "../../../common/utils";
import { Align } from "../Align";
import { Button } from "../Button";
import "./GridFooter.css"
import { GridPagination } from "./GridPagination";

export function GridFooter(props) {
    const {classModificator} = props;
    const selectedCount = 5
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
                    <Button text = 'Удалить' icon = 'Bin' className = {getThemedClassName(['admin-panel__red-button', 'grid__footer-button'], classModificator)} />
                </Align>
            </div>
            <div className = "grid__footer-pagination">
                <Align>
                    <GridPagination classModificator = {classModificator} />
                </Align>
            </div>
        </div>
    )
}