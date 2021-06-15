import { useDispatch, useSelector } from "react-redux";
import { getThemedClassName } from "../common/utils";
import AdminPanelHeader from './AdminPanelHeader';
import { Grid } from "./common/grid/Grid";
import './AdminPanel.css';
import './AdminPanelCells.css';
import './themes/light.css';
import './themes/dark.css';
import { fetchColumns, fetchOrders, fetchThemes, removeOrders } from "../redux/actionCreators";
import { useEffect } from "react";

const AdminPanelGrid = (props) => {
    const dispatch = useDispatch();
    const { classModificator } = props;

    const { orders, pageNum, pagesCount } = useSelector(state => state.orders);

    const onPageChange = (pageNum) => {
        dispatch(fetchOrders(pageNum || 1));
    }

    const onDeleteRows = (ids) => {
        dispatch(removeOrders(ids, pageNum))
    }

    const columns = useSelector(state => state.columns.columns);
    return (<Grid columns = {columns} 
        rows = {orders} 
        pagination = {{pageNum, pagesCount}}
        onPageChange = {onPageChange}
        onDeleteRows = {onDeleteRows}
        classModificator = {classModificator} />)
}


export const AdminPanel = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchThemes());
        dispatch(fetchColumns());
        dispatch(fetchOrders(1));
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