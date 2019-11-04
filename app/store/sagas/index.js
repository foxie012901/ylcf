import { takeEvery, put } from "redux-saga/effects";
import { getAxios } from "./HomeSagas.js";




//引入各组件redux派发types
import {  GET_IMGLIST_DATA  } from "../../components/Home/store/actionTypes";


function* mySaga() {
    yield takeEvery(GET_IMGLIST_DATA, HomeImgList) // home组件redux
}

//home组件首页加载数据
function* HomeImgList() {
    // let jsonS = [
    //     'http://192.168.34.102:8082/public/home/img.json',
    //     'http://192.168.34.102:8081/public/home/cars.json'
    // ]
    // yield getAxios(jsonS,null)

    yield getAxios('http://192.168.34.102:8081/public/home/img.json',null)

    // yield put (getIsShow)
}

export default mySaga