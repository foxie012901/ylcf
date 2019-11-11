import { call, put } from "redux-saga/effects";
import axios from 'axios'
import DevicesStorageUtil from '../../util/DeviceStorageUtil';
import DateUtil from '../../util/DateUtil';
import { getIsShow as shangjiaGetIsShow, shangjiaJsonData as getShangJia } from "../../components/ShangJia/store/actionCreators";


  function* fetchPost  (api, params, headers)  {

    let url = 'https://cs.jlcxtx.com/' + api
    let fetchOptions = {
        method: 'POST',
        headers: headers,
        body: params,
    };
    console.log(api + "请求开始", fetchOptions);
    let res = yield fetch(url, fetchOptions); 
    let response = yield res.text();
    alert("旗舰店页面请求成功",response);
    yield put(getShangJia(response));
    yield put(shangjiaGetIsShow(false));
}

export {
    fetchPost
}