import { call, put } from "redux-saga/effects";
import axios from 'axios'
import DevicesStorageUtil from '../../util/DeviceStorageUtil';
import DateUtil from '../../util/DateUtil';
import { getIsShow as shangjiaGetIsShow, shangjiaJsonData as getShangJia } from "../../components/ShangJia/store/actionCreators";
import {getIsShow as ShangjiaListGetIsShow,getShangJiaListJson } from"../../components/ShangjiaList/store/actionCreators";

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
    let json = JSON.parse(response);
    if(json.ret===0){
        alert(json.message);
    }else{
   
    yield put(getShangJia(response));
    yield put(shangjiaGetIsShow(false));
    }
}
function* getShopList  (api, params, headers)  {
   
    
    let url = 'https://cs.jlcxtx.com/' + api
    let fetchOptions = {
        method: 'POST',
        headers: headers,
        body: params,
    };
    console.log(api + "请求开始", fetchOptions);
    let res = yield fetch(url, fetchOptions); 
    let response = yield res.text();
    let json = JSON.parse(response);
    if(json.ret===0){
        alert(json.message);
    }else if(json.ret===1){
       
        yield put(getShangJiaListJson(json.data));
    } 
    else {
        console.log(json);
        
    }
}

export {
    fetchPost,
    getShopList
}