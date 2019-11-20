import { actionTypes } from "./";
import { fromJS } from "immutable";


//获取首页站内信数据
export const getMailList = () => ({
    type: actionTypes.GET_MAIL_LIST
})
export const initMailList = data => ({
    type: actionTypes.INIT_MAIL_LIST,
    data: fromJS(data)
})