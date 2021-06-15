import { getThemedClassName } from "../../../common/utils"
import "./GridCheckCell.css"

export function GridCheckCell(props) {
    const { classModificator, onCheck, checked } = props;
    const onChange = (event) => {
        onCheck && onCheck(event.target.checked);
    }
    return (
        <div className = {getThemedClassName(['grid__check-cell'], classModificator)}>
            <input checked = {checked} value = {checked} type = "checkbox" onChange = {onChange} />
        </div>
    );
}