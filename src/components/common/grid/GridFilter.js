import { useDispatch, useSelector } from "react-redux";
import { getThemedClassName } from "../../../common/utils";
import { Button } from "../Button";
import * as actionTypes from '../../../redux/actionTypes'
import './GridFilter.css';
import { Input } from "../Input";
import { toggleFilterDetail } from "../../../redux/actionCreators";

export function GridFilter(props) {
    const currentTheme = useSelector(state => state.themes.currentTheme);
    const isDetailVisible = useSelector(state => state.filter.isDetailVisible);
    const textFilterValue = useSelector(state => state.filter.textFilterValue);
    const dispatch = useDispatch();
    const toggleFilterDetailVisibility = () => {
        dispatch(toggleFilterDetail(!isDetailVisible))
    }

    const onTextFilterChanged = (event) => {
        dispatch({
            payload: event.target.value,
            type: actionTypes.TEXT_FILTER_CHANGED
        })
    }

    const gridManager = props.gridManager;
    const filters = props.columns.filter((column) => column.filterable)
        .map((column) => {
            const FilterComponent = gridManager.findProcessor(column).getFilterComponent();
            return FilterComponent && (<FilterComponent classModificator = {currentTheme?.name} name = {column.id} items = {column.values} key = {column.id} title = {column.title} />);
        }) ||[];

    return (
        <div className = {getThemedClassName(['grid__filter'], currentTheme?.name)}>
            <div className = {getThemedClassName(['grid__filter-row'], currentTheme?.name)}>
                <div className = "grid__text-filter">
                    <Input value = {textFilterValue} 
                        prefixIcon = "Search" 
                        className = {getThemedClassName(['grid__text-filter-input'], currentTheme?.name)}
                        classModificator = {currentTheme?.name}
                        placeholder = "Номер заказа или ФИО" 
                        onChanged = {onTextFilterChanged} />
                    <Button className = {getThemedClassName(['grid__filter-expand-button', 'admin-panel__blue-button'], currentTheme?.name)} 
                        icon = "Filter" 
                        onClick = {toggleFilterDetailVisibility}
                        text = "Фильтры" /> 
                </div>
                <Button className = {getThemedClassName(["admin-panel__transparent-button"], currentTheme?.name)} 
                    icon = "Refresh" 
                    text = "Загрузка" />
            </div>
            {isDetailVisible && (
                <div className = {getThemedClassName(['grid__filter-detail'], currentTheme?.name)}>
                    {filters}
                    {filters.length > 0 && (
                        <Button className = {getThemedClassName(["admin-panel__transparent-button", "grid__apply-filter"], currentTheme?.name)} text = "Применить" />
                    )}
                </div>
            )}        
        </div>
    );
}