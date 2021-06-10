import { useDispatch, useSelector } from "react-redux";
import { getThemedClassName } from "../common/utils";
import AdminPanelHeader from './AdminPanelHeader';
import { Grid } from "./common/grid/Grid";
import './AdminPanel.css';
import './AdminPanelCells.css';
import './themes/light.css';
import './themes/dark.css';
import { fetchColumns, fetchOrders, fetchThemes } from "../redux/actionCreators";
import { useEffect } from "react";

const AdminPanelGrid = (props) => {
    const { classModificator } = props;

    const columns = useSelector(state => state.columns.columns);
    const orders = useSelector(state => state.orders.orders);
    return (<Grid columns = {columns} 
        rows = {orders} 
        classModificator = {classModificator} />)
}


export const AdminPanel = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchThemes());
        dispatch(fetchColumns());
        dispatch(fetchOrders());
    })
    const currentTheme = useSelector(state => state?.themes?.currentTheme);
    
        
    return (
        <div className = {getThemedClassName(['admin-panel'], currentTheme?.name)}>
            <AdminPanelHeader classModificator = {currentTheme?.name} />
            <AdminPanelGrid classModificator ={currentTheme?.name} />
        </div>            
    );
}

// const mapStateToProps = state => ({
//     currentTheme: state.themes.currentTheme,
//     orders: state.orders.orders,
//     columns: state.columns.columns
// })

// const mapDispatchToProps = dispatch => {
//     return {
//         themesFetch: () => dispatch(themesFetch()),
//         applyTheme: (theme) => dispatch(applyTheme(theme)),
//         fetchColumns: () => dispatch(fetchColumns())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);