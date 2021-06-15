import { getThemedClassName } from "../../common/utils"
import "./Popup.css"

export function Popup(props) {
    const { direction = "down", onClose, children, onFocus, className } = props;
    const popup = (
        <div className = {'popup' + (className ? ' ' + className : '')}>
            <div className = {getThemedClassName(['popup__content'], direction)} onFocus = {onFocus}>
                {children}
            </div>
            <div className = "popup__shroud" onClick = {onClose} />
        </div>
    );
    return popup;
}