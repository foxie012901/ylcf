import { actionTypes } from "./";
import { fromJS } from "immutable";

export const getIsShow = () => ({
    type: actionTypes.GET_IS_SHOW,
})

export const alertIsShow = data => ({
    type: actionTypes.ALERT_IS_SHOW,
    data: fromJS(data)
})




export const levelOneIsShow = data => ({
    type: actionTypes.LEVEL_ONE_ISSHOW,
})
export const levelOneIsHidden = data => ({
    type: actionTypes.LEVEL_ONE_ISHIDDEN
})



export const levelTwoIsShow = data => ({
    type: actionTypes.LEVEL_TWO_ISSHOW
})
export const levelTwoIsHidden = data => ({
    type: actionTypes.LEVEL_TWO_ISHIDDEN
})