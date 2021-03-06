import { call, put } from "redux-saga/effects";
import axios from 'axios'
import DevicesStorageUtil from '../../util/DeviceStorageUtil';
import DateUtil from '../../util/DateUtil';
import { getIsShow as shangjiaGetIsShow, shangjiaJsonData as getShangJia } from "../../components/ShangJia/store/actionCreators";
import {getIsShow as ShangjiaListGetIsShow,getShangJiaListJson } from"../../components/ShangjiaList/store/actionCreators";
import {getChildItemListJson} from '../../components/ReserveProject/store/actionCreators';
import {getCarListJSON} from '../../components/ChildServicesDetailsTitle/store/actionCreators';
import {getChildServicesDetailsJson,getOrderResult} from '../../components/ChildServicesDetails/store/actionCreators';
import {getNewServiceReservationResultList } from "../../components/ServiceReservation/store/actionCreators";
import {
    DeviceEventEmitter
} from 'react-native';
  function* fetchPost  (baseUrl,api, params, headers,e)  {


    let url = baseUrl + api
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

    yield put(getShangJia(response,e));
    }
}
function* getShopList  (baseUrl,api, params, headers)  {
    let url = baseUrl + api
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

function* storeChildItemList  (baseUrl,api, params, headers){

    let url = baseUrl + api
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
        yield put(getChildItemListJson(json));
    }
    else {
        console.log(json);

    }
}
function* fetchGetCarList (baseUrl,api,params,headers){

    let url = baseUrl + api;
    let fetchOptions = {
        method: 'GET',
        headers: headers,
    };
    let param ="?"

for (let [key, value] of Object.entries(params)) {
    param+=key+'='+value+'&'
  }
    console.log(api + "请求开始", fetchOptions);
    let res = yield fetch(url+param, fetchOptions);
    let response = yield res.text();


    let json = JSON.parse(response);


    if(json.ret===0){
    }else if(json.ret===1){
        yield put(getCarListJSON(json));
    }
    else {
        console.log(json);
    }
}
function* storeChildItemInfo  (baseUrl,api, params, headers){

    let url = baseUrl + api
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

        console.log(json);
    }else if(json.ret===1){
        yield put(getNewServiceReservationResultList(json.data.serviceReservationResult))
        yield put(getChildServicesDetailsJson(json));
    }
    else {
        console.log(json);

    }
}

function* getNewServiceReservationResult  (baseUrl,api, params, headers){

    let url = baseUrl + api
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

        console.log(json);
    }else if(json.ret===1){
        yield put(getNewServiceReservationResultList(json.data.serviceReservationResult));
    }
    else {
        console.log(json);

    }
}

function* orderResult  (baseUrl,api, params, headers,serviceName,dateTime){

    let url = baseUrl + api
    let fetchOptions = {
        method: 'POST',
        headers: headers,
        body: params,
    };
    console.log(api + "请求开始", fetchOptions);
   let res = yield fetch(url, fetchOptions);
    let response = yield res.text();
    let json = JSON.parse(response);
 console.log(response)
    if(json.ret===0){
        yield put(getOrderResult(false,json,serviceName,dateTime));
    }else if(json.ret===1){
        DeviceEventEmitter.emit('refresh',null);
        yield put(getOrderResult(true,json,serviceName,dateTime));
    }
    else {
        console.log(json);

    }
}

export {
    fetchPost,
    getShopList,
    storeChildItemList,
    fetchGetCarList,
    storeChildItemInfo,
    getNewServiceReservationResult,
    orderResult
}
