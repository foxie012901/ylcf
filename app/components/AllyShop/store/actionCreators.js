import { actionTypes } from "./";
import { fromJS } from "immutable";


export const postJson =(init,params)=>({
    type:actionTypes.POST_JSON,
    init,params
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

export const changeIsButtom = isButtom =>({
    type:actionTypes.CHANGE_IS_BUTTOM,
    isButtom
})
export const getFlatListData = JSON =>({
    type:actionTypes.FLATLIST_DATA,
    JSON
})
export const addAllyShop = Data =>({
    type:actionTypes.ADDING,
    Data
})