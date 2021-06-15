import { Component, useState } from "react";
import { getThemedClassName } from "../../../common/utils";
import { Input } from "../Input";
import "./GridColumnFilter.css";

class ColumnFilter extends Component {
    render() {
        const { classModificator } = this.props;
        return (
            <div className = "column-filter">
                <p className = {getThemedClassName(['column-filter__title'], classModificator)}>{this.props.title}</p>
                <div className = "column-filter__range">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export function DateFilter(props) {
    const {classModificator} = props;
    const [value, setValue] = useState(0);
    const onFromChanged = (event) => {
        setValue({...value, from: event.target.value});
    }
    const onToChanged = (event) => {
        setValue({...value, to: event.target.value});
    }
    return (
        <ColumnFilter title = {props.title} classModificator = {classModificator}>            
            <Input textPrefix = "с"
                type = "date" 
                classModificator = {classModificator}
                onChanged = {onFromChanged} 
                value = {value?.from}
                className = "column-filter__input date-filter__input" 
                placeholder = "dd.mm.yyyy" />
            <Input textPrefix = "по" 
                type = "date" 
                classModificator = {classModificator}
                onChanged = {onToChanged} 
                value = {value?.to}
                className = "column-filter__input date-filter__input" 
                placeholder = "dd.mm.yyyy" />
        </ColumnFilter>
    )
}

export function EnumFilter(props) {
    const {classModificator} = props;
    return (
        <ColumnFilter title = {props.title} classModificator = {classModificator}>
            <Input type = "enum" 
                className = "column-filter__input enum-filter__input"                
                classModificator = {classModificator} 
                placeholder = "Выберите" popupItems = {props.items} />
        </ColumnFilter>
    );
}

export function SumFilter(props) {
    const {classModificator} = props;
    return (
        <ColumnFilter title = {props.title} classModificator = {classModificator}>            
            <Input textPrefix = "от" 
                className = "column-filter__input sum-filter__input"
                classModificator = {classModificator}
                placeholder = "P" />
            <Input textPrefix = "до" 
                className = "column-filter__input sum-filter__input"
                classModificator = {classModificator} 
                placeholder = "P" />
        </ColumnFilter>
    )
}