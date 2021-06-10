import { SVG } from "../../common/utils";
import './Button.css';

export function Button(props) {
    const {onClick, icon, text, className} = props;
    const Icon = SVG[icon];
    return (
        <div className = {'button' + (className ? ' ' + className : '')} onClick = {onClick}>
            {Icon && (<Icon />)}
            <p>{text}</p>
            {props.children}
        </div>
    );
}