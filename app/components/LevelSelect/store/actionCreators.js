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
export const changeMenuSelect = (menuIndex,twoIndex,threeIndex) =>({
    type:actionTypes.CHANGE_MENU_LIST,
    menuIndex,twoIndex,threeIndex
})
export const changeMenuSelectTow =(index) =>({
    type:actionTypes.CHANGE_MENU_LIST_TOW,
    index
})