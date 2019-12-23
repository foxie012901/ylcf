import { actionTypes } from "./";
import { fromJS } from "immutable";

export const postImg =(url) =>({
    type:actionTypes.POST_IMG,
    url
})
export const getResponse = res =>({
    type:actionTypes.GET_RESPONSE,
    res
})