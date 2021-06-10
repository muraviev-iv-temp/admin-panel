import { getThemedClassName, SVG } from "../../../common/utils";
import { Align } from "../Align";
import './GridCell.css';

export function PlainTextCell(props) {
    const {data, classModificator} = props;
    return (
        <Align>
            <p className = {getThemedClassName(['grid__cell-text'], classModificator)}>
                {data.text || '-'}
            </p>
        </Align>
    );
}

export function EnumCell(props) {
    const {id, text, icon, classModificator} = props.data;
    const Icon = SVG[icon];
    return (
        <div className = {getThemedClassName(['enum-cell', `enum-cell_${id}`], classModificator)}>
            {Icon && (
            <Align>
                <Icon />
            </Align>
            )}
            <Align>
                <p className = "grid__cell-text">{text}</p>
            </Align>
            
        </div>
    );
}