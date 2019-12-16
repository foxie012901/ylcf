import { actionTypes } from "./";
import { fromJS } from "immutable";


export const postJson = params=>({
    type:actionTypes.POST_JSON,
    params
})

export const changeScollView =()=>({
    type:actionTypes.CHANGE_SCOLLVIEW
})

export const getData = Json =>({
    type:actionTypes.GET_DATA,
    Json
})
export const changeAllyShopShow = isShow =>({
    type:actionTypes.GET_IS_SHOW,
    isShow
})