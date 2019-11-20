
import { actionTypes } from "./";
import { fromJS } from "immutable";

export const getIsShow = changedata => ({
    type: actionTypes.GET_IS_SHOW,
    changedata
})
export const getShangJiaListJson = data =>({
    type:actionTypes.GET_SHANGJIALIST_JSON,
    data
})
export const changeCity = data =>({
    type:actionTypes.CHANGE_CITY,
    data
})
export const changeShangJiaListViewStyle = style =>({
    type:actionTypes.CHANGE_VIEW_STYLE,
    style
})
