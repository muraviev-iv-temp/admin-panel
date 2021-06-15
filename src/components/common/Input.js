import { useState } from "react";
import { getThemedClassName, SVG } from "../../common/utils";
import { Align } from "./Align";
import "./Input.css";
import { Popup } from "./Popup";


export function Input(props) {
    const { prefixIcon, textPrefix, value, placeholder, onChange, 
        onChanged, className, type = 'text', popupItems, classModificator} = props
    const PrefixIcon = SVG[prefixIcon];
    const ResetIcon = SVG.XMedium;
    const [state, setValue1] = useState({droppedDown: false, value: ''});
    const convertToMasked = (value) => {
        let result = value.replace(/[^\d]+/g, '') + '________';
        result = result.replace(/^(..)(..)(....).*/, '$1.$2.$3')
        return result
    }

    const setValue = (st) => {
        console.log('changed', st)
        setValue1(st)
    }

    const onValueChange = (event) => {
        console.log(event.target.value, state, type)

        if(onChange)
            onChange(event)
        else switch (type) {
            case 'date':
                setValue({...state, value: convertToMasked(event.target.value)});
                break;
            case 'enum':
                break;
            case 'text':
                setValue({...state, value: event.target.value});
                break;
            default:
                setValue({...state, value: event.target.value});
        }
    }

    const onValueChanged = (event) => {
        switch (type) {
            case 'date':
                const [day, month, year] = event.target.value.split('.');
                const dateValue = new Date(year, month, day);
                setValue({...state, value: !isNaN(dateValue.valueOf()) ? event.target.value : ''});
                break;
            default:
                
        }
        onChanged && onChanged(event)
    }

    const onFocus = (event) => {
        popupItems && setValue({...state, droppedDown: true})
    }

    const onPopupClose = () => {
        popupItems && setValue({...state, droppedDown: false});
    }

    const onItemSelected = (item) => {
        popupItems && setValue({...state, droppedDown: false, value: item.text, item})
        onChanged && onChanged(item)
    } 

    const input = (
        <div className = {"input" + (className ? " " + className : "")}>
            {PrefixIcon && (
                <Align>
                    <PrefixIcon />                    
                </Align>
            )}
            {textPrefix && (
                <Align>
                    <p className = {getThemedClassName(['input__prefix'], classModificator)}>{textPrefix}</p>
                </Align>
            )}
                <input type = "text" 
                    placeholder = {placeholder} 
                    value = {state.value  || ''} 
                    onChange = {onValueChange}
                    onBlur = {onValueChanged}
                    onFocus = {onFocus} />
                {state.droppedDown && popupItems && (
                    <Popup className = {getThemedClassName(['admin-panel__popup'], classModificator)} onClose = {onPopupClose}>
                        {popupItems.map(item => (
                            <div onClick = {() => onItemSelected(item)} 
                                    className = {getThemedClassName(['enum-filter__popup-item'], classModificator)}>
                                <Align>
                                    <p>{item.text}</p>
                                </Align>
                            </div>
                        ))}
                    </Popup>
                )}

            {value && (
                <Align>
                    <ResetIcon onClick = {() => {setValue({...state, value: ''})}} />
                </Align>
            )}
        </div>
    );

    return input;
}