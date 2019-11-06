import { takeEvery, put } from "redux-saga/effects";
import {fetchPost} from './ShangJiaSagas';
import{loginFetchPost} from "./LoginSagas";
import { getAxios, getHomeIconBtn, getHomeTopData } from "./HomeSagas.js";
//日期类工具
import DateUtil from '../../util/DateUtil';
import DevicesStorageUtil from '../../util/DeviceStorageUtil';//持久化工具

//引入各组件redux派发的creators
import { homeIsshowChange } from "../../components/Home/store/actionCreators";
import { GET_IMGLIST_DATA, GET_HOME_DATA } from "../../components/Home/store/actionTypes";
import {TEST_JSON} from '../../components/ShangJia/store/actionTypes';
import {GET_LOGIN} from '../../components/Login/store/actionTypes';


//拦截
function* mySaga() {
    yield takeEvery(GET_HOME_DATA, GetHomeData) // 获取home组件默认数据
    yield takeEvery(TEST_JSON, getShangJiaJSON);//shangjia组件
    yield takeEvery(GET_LOGIN,getLoginJSON);

}

function* GetHomeData() {
    console.log(3)
    yield getHomeIconBtn('http://192.168.34.102:8081/public/home/img.json', null)
    yield getHomeTopData('http://192.168.34.102:8081/public/home/cars.json', null)

    yield put (homeIsshowChange(false))

}


//加载旗舰店页面数据
function* getShangJiaJSON(action) {
    let formData = new FormData();
    let lastPullTime = yield DevicesStorageUtil.get('lastPullTime');
    if (lastPullTime == null) {
        lastPullTime = DateUtil.formatDate(DateUtil.getBeforeDayDate(2).getTime(), 'yyyy-MM-dd hh:mm:ss');
    }
    let map = {};
    formData.append('lastPullTime', lastPullTime)
    map = { Accept: 'application/json, text/plain,*/*' };
    yield fetchPost("/store/home", formData, map);

    DevicesStorageUtil.save("lastPullTime", yield DateUtil.formatDate(new Date().getTime(), 'yyyy-MM-dd hh:mm:ss'));
}
//登录
function* getLoginJSON(action){

    console.log(JSON.stringify(action));
    let formData = new FormData();
    formData.append('phone',action.phone);
    formData.append('passwd',action.password);
    formData.append("deviceType",action.os);
    formData.append('deviceId',action.deviceId);
    yield loginFetchPost("/appuser/login",formData,null);

}
export default mySaga







// //保留参考
// function* HomeImgList() {
//     // let jsonS = [
//     //     'http://192.168.34.102:8082/public/home/img.json',
//     //     'http://192.168.34.102:8081/public/home/cars.json'
//     // ]
//     // yield getAxios(jsonS,null)

//     yield getAxios('http://192.168.34.102:8081/public/home/img.json', null)

// }
