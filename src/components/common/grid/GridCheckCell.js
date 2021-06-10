import { getThemedClassName } from "../../../common/utils"
import "./GridCheckCell.css"

export function GridCheckCell(props) {
    const { classModificator, onClick } = props

    return (
        <div className = {getThemedClassName(['grid__check-cell'], classModificator)}>
            <input type = "checkbox" onClick = {onClick} />
        </div>
    );
}