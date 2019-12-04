

import { actionTypes } from "./";

export const getIsShow = changedata => ({
    type: actionTypes.GET_IS_SHOW,
    changedata
})
export const changeSelectIndex = (index,time)=>({
    type: actionTypes.CHANGE_SELECT_INDEX,
    index,time
})
export const getNewServiceReservationResultList = (list) =>({
    type: actionTypes.GET_NEW_LIST,
    list
})

