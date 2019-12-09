;

import { actionTypes } from "./";

export const getIsShow = changedata => ({
    type: actionTypes.GET_IS_SHOW,
    changedata
})
export const getStoreChildItemInfo = (accPackageId,storeId,storeChildItemId,date) =>({
    type: actionTypes.GET_CHILD_SERVICES_DETAILS,
    accPackageId,storeId,storeChildItemId,date
})
export const getChildServicesDetailsJson = data =>({
    type: actionTypes.GET_CHILD_SERVICES_DETAILS_JSON,
    data
})
export const changeVideoStatus =data =>({
    type : actionTypes.CHANGE_VIDEO_STATUS,
    data
})
export const changeShangjiaScreenStatus =data =>({
    type:actionTypes.CHANGE_SCREEN_STATUS,
    data
})
export const videoLoadStart = data =>({
    type:actionTypes.VIDEO_LOAD_START,
    data
})
export const videoOnLoad = () =>({
    type:actionTypes.VIDEO_ON_LOAD,
})
export const orderStoreChildItem =(formData,serviceName,dateTime)=>({
    type:actionTypes.ORDER_STORE_CHILD_ITEM,
    formData,serviceName,dateTime
})
export const getOrderResult = (bool,data,serviceName,dateTime) =>({
    type:actionTypes.ORDER_RESULT,
    bool,data,serviceName,dateTime
})

