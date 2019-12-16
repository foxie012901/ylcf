import { actionTypes } from "./";
import { fromJS } from "immutable";


export const getData = data =>({
    type:actionTypes.GET_DATA,
    data
})
export const changeMenu = index =>({
    type:actionTypes.CHANGE_MENU,
    index
})
export const changeLevelSelectStatus = status =>({
    type:actionTypes.CHANGE_STATUS,
    status
})