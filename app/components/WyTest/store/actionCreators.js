import { actionTypes } from "./";
import { fromJS } from "immutable";

export const postImg =(url,fileName) =>({
    type:actionTypes.POST_IMG,
    url,fileName
})
export const getResponse = res =>({
    type:actionTypes.GET_RESPONSE,
    res
})