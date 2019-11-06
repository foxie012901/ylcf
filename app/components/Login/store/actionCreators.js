;

import { actionTypes } from "./";

export const getIsShow = changedata => ({
    type: actionTypes.GET_IS_SHOW,
    changedata
})
export const getLogIn = (phone,password,os,deviceId) =>({
    type: actionTypes.GET_LOGIN,
    phone,password,os,deviceId
})

export const changeLoginPhone = phone =>({
    type: actionTypes.CHANGE_LOGIN_PHONE,
    phone
})
export const changeLoginPassword = password =>({
    type :actionTypes.CHANGE_LOGIN_PASSWORD,
    password
})
export const getLogInResponse = response =>({
    type : actionTypes.GET_LOGIN_RESPONSE,
    response

})

export const changeIsLogin = isLogin =>({
    type : actionTypes.CHANGE_ISLOGIN,
    isLogin
})

export const cleanAction = action =>({
    type : actionTypes.CLEAN_ACTION,
    action
})
