import './Align.css';

export function Align(props) {
    const {className, children} = props;
    return (
        <div className = {'align' + (className ? ' ' + className : '')}>
            <div className = "align__content">
                {children}
            </div>
        </div>
    );
}