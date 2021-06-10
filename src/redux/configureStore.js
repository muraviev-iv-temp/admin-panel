import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { Columns } from "./columns";
import { Filter } from "./filter";
import { Orders } from "./orders";
import { Themes } from "./themes";


export const configureStore = () => 
    createStore(
        combineReducers({
            columns: Columns,
            themes: Themes,
            filter: Filter,
            orders: Orders
        }),
        applyMiddleware(thunk)
    )