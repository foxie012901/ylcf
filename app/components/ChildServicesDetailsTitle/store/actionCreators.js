

import { actionTypes } from "./";

export const getIsShow = changedata => ({
    type: actionTypes.GET_IS_SHOW,
    changedata
})
export const getCarList =() =>({
    type: actionTypes.GET_CAR_LIST,
})
export const getCarListJSON = data =>({
    type: actionTypes.GET_JSON,
    data
})
export const changeSelectShow = show =>({
    type: actionTypes.CHANGE_SELECT_SHOW,
    show
})
export const changeTitle = hphm =>({
    type: actionTypes.CHANGE_TITLE,
    hphm
})

