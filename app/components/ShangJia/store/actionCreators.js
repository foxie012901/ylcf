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

export const getData = data => ({
    type: actionTypes.GET_DATA,
    data:fromJS(data)
})

export const changeData = (data,type) =>({
    type : actionTypes.CHANGE_DATA,
    data,type
})
export const videoLoadStart = data =>({
    type:actionTypes.VIDEO_LOAD_START,
    data
})
export const videoOnLoad = () =>({
    type:actionTypes.VIDEO_ON_LOAD,
})
export const getShangJia = (shangjiaId,e) =>({
    type:actionTypes.TEST_JSON,
    shangjiaId,e
})
export const shangjiaJsonData = (data,e) =>({
    type: actionTypes.JSON_DATA,
    data,e
})
export const changeVideoStatus =data =>({
    type : actionTypes.CHANGE_VIDEO_STATUS,
    data
})
export const changeShangjiaScreenStatus =data =>({
    type:actionTypes.CHANGE_SCREEN_STATUS,
    data
})
export const refreshing = data =>({
    type:actionTypes.CHANGE_REFRESHING,
    data
})
export const changePageIsLoding = data =>({
    type:actionTypes.CHANGE_PAGE_IS_LODING,
    data
})


