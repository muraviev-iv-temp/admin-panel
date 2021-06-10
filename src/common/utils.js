import {ReactComponent as Abort} from "./svg/abort.svg";
import {ReactComponent as Bin} from "./svg/bin.svg";
import {ReactComponent as CheckMark} from "./svg/checkmark.svg";
import {ReactComponent as Dot} from "./svg/dot.svg";
import {ReactComponent as Filter} from "./svg/filter.svg";
import {ReactComponent as Locked} from "./svg/locked.svg";
import {ReactComponent as Moon} from "./svg/moon.svg";
import {ReactComponent as Pencil} from "./svg/pencil.svg";
import {ReactComponent as Refresh} from "./svg/refresh.svg";
import {ReactComponent as Search} from "./svg/search.svg";
import {ReactComponent as Sun} from "./svg/sun.svg";
import {ReactComponent as VArrow} from "./svg/v_arrow.svg";
import {ReactComponent as XLarge} from "./svg/x-large.svg";
import {ReactComponent as XMedium} from "./svg/x-medium.svg";

export const SVG = {
    Abort,
    Bin,
    CheckMark,
    Dot,
    Filter,
    Locked,
    Moon,
    Pencil,
    Refresh,
    Search,
    Sun,
    VArrow,
    XLarge,
    XMedium
}

export const baseUrl = 'http://localhost:3000/'; 
export const serverUrl = 'http://localhost:3001/';
export const sendRequest = (req) => {
    return fetch(serverUrl, {
        method:'POST', 
        headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
        } , body: JSON.stringify(req)
    })
}

export const getThemedClassName = (classes, themeName) => 
    themeName ? classes.map(className => `${className} ${className}_${themeName}`).join(' ') 
    : classes.join(' ')
