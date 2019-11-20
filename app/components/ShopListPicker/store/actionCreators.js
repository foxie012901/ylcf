
import { actionTypes } from "./";
import { fromJS } from "immutable";

export const getIsShow = changedata => ({
    type: actionTypes.GET_IS_SHOW,
    changedata
})
export const changeIsSelect = data =>({
    type:actionTypes.CHANGE_IS_SELECT,
    data
})
export const changeIsSelectIndex = index =>({
    type:actionTypes.CHANGE_IS_SELECT_INDEX,
    index
})
export const changeIsSelectName = name =>({
    type:actionTypes.CHANGE_IS_SELECT_NAME,
    name
})
export const changeIsSelectData = (index,name,isSelect,style) =>({
    type:actionTypes.CHANGE_IS_SELECT_DATA,
    index,name,isSelect,style
})
