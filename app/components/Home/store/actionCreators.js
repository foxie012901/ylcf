// import {
//     GET_IS_SHOW,
//     CHANGE_INPUT_VALUE,
//     INIT_LIST
// } from "./actionTypes";

import { actionTypes } from "./";
import { fromJS } from "immutable";

export const getIsShow = changedata => ({
    type: actionTypes.GET_IS_SHOW,
    changedata
})

export const getChangeInputValue = value => ({
    type: actionTypes.CHANGE_INPUT_VALUE,
    value,
})

export const InitList = () => ({
    type: actionTypes.INIT_LIST,
})

export const delInitListIndex = index => ({
    type: actionTypes.DELETE_LIST_INDEX,
    index
})

export const getData = data => ({
    type: actionTypes.GET_DATA,
    data: fromJS(data)
})

export const putDataToList = () => ({
    type: actionTypes.PUT_DATA_TO_LIST
})

export const initImgList = data => ({
    type: actionTypes.INIT_IMG_LIST,
    data: fromJS(data),
    isshow: false
})

export const getImgListData = () => ({
    type: actionTypes.GET_IMGLIST_DATA
})



export const textTwo = () => ({
    type: actionTypes.TEXT_TWO
})

export const getTextTwo = () => ({
    type:actionTypes.GET_TEXT_TWO
})
