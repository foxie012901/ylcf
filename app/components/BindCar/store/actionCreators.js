import { actionTypes } from "./";
import { fromJS } from "immutable";


export const getVioIndex = () => ({
    type:actionTypes.GET_VIOINDEX
})
export const initVioIndex = data => ({
    type: actionTypes.INIT_VIOINDEX,
    data: fromJS(data)
})