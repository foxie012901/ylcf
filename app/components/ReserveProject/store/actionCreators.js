import { actionTypes } from "./";
import { fromJS } from "immutable";

export const getIsShow = changedata => ({
    type: actionTypes.GET_IS_SHOW,
    changedata
})

export const getData = (storeId,storeItemId,accPackageId) =>({
    type : actionTypes.GET_STORE_CHILD_ITEM_LIST,
    storeId,storeItemId,accPackageId
})
export const getChildItemListJson = response =>({
    type:actionTypes.GET_JSON,
    response
})
export const CHANGE_IS_LODING = isLoding =>({
    type:actionTypes.CHANGE_IS_LODING,
    isLoding
})
