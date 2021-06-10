import { useDispatch, useSelector } from 'react-redux';
import { getThemedClassName, SVG } from '../common/utils';
import './AdminPanelHeader.css'
import { Button } from './common/Button';
import './AdminPanelButtons.css'
import { useState } from 'react';
import { Popup } from './common/Popup';
import { Align } from './common/Align';
import { applyTheme } from '../redux/actionCreators';

function ThemeSwitchSelector() {
    const themes = useSelector(state => state.themes.allThemes)
    const currentTheme = useSelector(state => state.themes.currentTheme)
    const [state, setState] = useState(0);
    const dispatch = useDispatch();
    const changeTheme = (theme) => {
        dispatch(applyTheme(theme))
    }

    return (
        <Button onClick = {()=>setState({...state, droppedDown: !state.droppedDown})} 
            icon = {currentTheme.icon} 
            text = {currentTheme.title + ' тема'} 
            className = {getThemedClassName(["admin-panel__transparent-button"], currentTheme?.name)}>
            {state.droppedDown && (
                <Popup className = {getThemedClassName(['admin-panel__popup'], currentTheme?.name)}>
                    {themes.map(theme => {
                        const Icon = SVG[theme.icon]
                        return (
                            <div onClick = {() => changeTheme(theme)} 
                                className = {"theme-switch__popup-item theme-switch__popup-item_" + theme.name} >
                                <Align><Icon /></Align>
                                <Align><p>{theme.title}</p></Align>
                            </div>
                        )
                    })}
                </Popup>
            )}
        </Button>
    );
}

function AdminPanelHeader(props) { 
    const { classModificator } = props;
    return (
        <div className = {getThemedClassName(['admin-panel__header'], classModificator)}>
            <h1 className = {getThemedClassName(['admin-panel__default-text'], classModificator)}>Список заказов</h1>
            <ThemeSwitchSelector />
        </div>
    )
}

export default AdminPanelHeader;