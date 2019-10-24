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

export const changeData = data =>({
    type : actionTypes.CHANGE_DATA,
    data
})
export const videoLoadStart = data =>({
    type:actionTypes.VIDEO_LOAD_START,
    data
})
export const videoOnLoad = () =>({
    type:actionTypes.VIDEO_ON_LOAD,
})

