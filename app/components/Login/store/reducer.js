

import { actionTypes } from "./index";
import { fromJS } from "immutable";
import DeviceStorageUtil from '../../../util/DeviceStorageUtil';
import { Actions, ActionConst } from "react-native-router-flux";

const defaultState = fromJS({
    phone: '',//电话号
    password: '',//密码
    isLogin: false,//是否正在登录
    actionTo: '',//跳转标识
    actionData: {},//跳转参数
})

export default (state = defaultState, action) => {

    if (action.type === actionTypes.CHANGE_LOGIN_PHONE) {
        return state.set('phone', action.phone);
    }
    if (action.type === actionTypes.CHANGE_LOGIN_PASSWORD) {
        return state.set('password', action.password)
    }
    if (action.type === actionTypes.GET_LOGIN_RESPONSE) {
        console.log('loginresponse', action.response);
        if (action.response.ret === 1) {
            DeviceStorageUtil.save('token', action.response.data.token);
            DeviceStorageUtil.save('invitationCode', action.response.data.invitationCode);
            DeviceStorageUtil.save('firstLogin', action.response.data.firstLogin);
            DeviceStorageUtil.save('appuserId', action.response.data.appuserId);
            
            return state.merge({
                actionTo: "home",
                actionData: { aa: 111 },
            })
        } else {
            alert(action.response.message);
        }

    }
    if (action.type === actionTypes.CHANGE_ISLOGIN) {
        return state.set('isLogin', action.isLogin);
    }
    if (action.type === actionTypes.CLEAN_ACTION) {
        return state.merge({
            actionTo: "",
            actionData: {},
        });
    }
    return state
}