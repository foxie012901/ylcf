import { call, put } from "redux-saga/effects";
import axios from 'axios'
import DevicesStorageUtil from '../../util/DeviceStorageUtil';
import DateUtil from '../../util/DateUtil';
import { getLogInResponse, changeIsLogin } from '../../components/Login/store/actionCreators';

function* loginFetchPost(baseUrl,api, params, headers) {

    let url = baseUrl + api
    let fetchOptions = {
        method: 'POST',
        headers: headers,
        body: params,
    };
    console.log(api + "请求开始", fetchOptions);
    let res = yield fetch(url, fetchOptions);
    let response = yield res.text();
    yield put(getLogInResponse(JSON.parse(response)));
    yield put(changeIsLogin(false))

}

export {
    loginFetchPost
}