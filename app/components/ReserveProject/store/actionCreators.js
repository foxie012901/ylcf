import { actionTypes } from "./";
import { fromJS } from "immutable";

export const getIsShow = changedata => ({
    type: actionTypes.GET_IS_SHOW,
    changedata
})
