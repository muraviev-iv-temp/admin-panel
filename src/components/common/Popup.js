import "./Popup.css"

export function Popup(props) {
    const popup = (
        <div className = {'popup' + (props.className ? ' ' + props.className : '')}>
            <div className = "popup__content" onFocus = {props.onFocus}>
                {props.children}
            </div>
            <div className = "popup__shroud" onClick = {props.onClose} />
        </div>
    );
    return popup;
}