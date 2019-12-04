

import { actionTypes } from "./";

export const getIsShow = changedata => ({
    type: actionTypes.GET_IS_SHOW,
    changedata
})
export const changeSelectIndex = (index,accPackageId,storeId,storeChildItemId) =>({
    type: actionTypes.CHANGE_SELECT_INDEX,
    index,accPackageId,storeId,storeChildItemId
})

