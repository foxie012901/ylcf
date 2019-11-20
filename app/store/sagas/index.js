import { takeEvery, put } from "redux-saga/effects";
import { fetchPost,getShopList } from './ShangJiaSagas';
import { loginFetchPost } from "./LoginSagas";
import {getHome, getVioIndex,getHomeMail} from "./HomeSagas.js";
//日期类工具
import DateUtil from '../../util/DateUtil';
import DevicesStorageUtil from '../../util/DeviceStorageUtil';//持久化工具
import  MyLBS     from '../../androidModules/BaiduLBS'; //安卓获取地理位置信息原生

//引入各组件redux派发的creators
import { homeIsshowChange, noToken } from "../../components/Home/store/actionCreators";

//引入各组件redux派发的TYPES
import { GET_HOME_DATA, GET_VIOINDEX } from "../../components/Home/store/actionTypes";
import { TEST_JSON ,CHANGE_SHOPS } from '../../components/ShangJia/store/actionTypes';
import { GET_LOGIN } from '../../components/Login/store/actionTypes';

//全局请求地址
// const hostUrl = 'https://mapp.jlcxtx.com/'
// const hostUrl = 'https://dev.jlcxtx.com/'
const hostUrl = 'https://cs.jlcxtx.com/'

// const tok =async DevicesStorageUtil.get('token').then(e=>{
//     await return e
// }
// );
// console.log('tok',tok)

//拦截
function* mySaga() {
    yield takeEvery(GET_HOME_DATA, getHomeData) // 获取home组件默认数据
    yield takeEvery(TEST_JSON, getShangJiaJSON);//shangjia组件
    yield takeEvery(CHANGE_SHOPS,changeShop);
    yield takeEvery(GET_LOGIN, getLoginJSON); //login 组件

}


function* getHomeData() {

    let token = yield DevicesStorageUtil.get('token');
    console.log('saga token', token)
    let lastPullTime = DateUtil.formatDate(DateUtil.getBeforeDayDate(2).getTime(), 'yyyy-MM-dd hh:mm:ss');
    //body数据
    let formData = new FormData();
    formData.append('lastPullTime', lastPullTime)
    //token格式
    let tk = {
        headers: { token: token }
    }
    //carid
    let vioIndexBody = new FormData()
    vioIndexBody.append('carid', '')


    yield getHome(hostUrl + 'index/homeV192', tk, formData)
    if (token !== null) {
        yield put(noToken({ noToken: true }))
        yield getVioIndex(hostUrl + 'peccancy/getVioIndex192', tk, vioIndexBody)
    } else {
        yield put(noToken({ noToken: false }))
    }
    console.log('11111111', token)
    console.log(3)

    yield getHome(hostUrl + 'index/homeV192', tk, formData);
    if(token!==null){
    let mailFormData = new FormData();
    mailFormData.append('pageno',0);
    mailFormData.append('pagesize',5);
    yield getHomeMail(hostUrl+'/appmail/getMailsV180',tk,mailFormData);
    }

    yield put(homeIsshowChange(false))

}


//加载旗舰店页面数据
function* getShangJiaJSON(action) {
    let formData = new FormData();
    let lastPullTime = yield DevicesStorageUtil.get('lastPullTime');
    if (lastPullTime == null) {
        lastPullTime = DateUtil.formatDate(DateUtil.getBeforeDayDate(2).getTime(), 'yyyy-MM-dd hh:mm:ss');
    }
    let map = {};
    formData.append('lastPullTime', lastPullTime);
    map = { Accept: 'application/json, text/plain,*/*' };
    yield fetchPost("/store/home", formData, map);

    DevicesStorageUtil.save("lastPullTime", yield DateUtil.formatDate(new Date().getTime(), 'yyyy-MM-dd hh:mm:ss'));
}
//登录
function* getLoginJSON(action) {

    // console.log(JSON.stringify(action));
    let formData = new FormData();
    formData.append('phone', action.phone);
    formData.append('passwd', action.password);
    formData.append("deviceType", action.os);
    formData.append('deviceId', action.deviceId);
    yield loginFetchPost("/appuser/login", formData, null);

}
//去换店
function* changeShop(action){
    let lng ='';
    let lat ='';
  let gps = yield MyLBS.startLocation();
  lng=JSON.parse(gps).d;
  lat=JSON.parse(gps).c;

  let formData = new FormData();
  formData.append('lat', lat);
  formData.append('lng', lng);
    yield getShopList('/store/storeList',formData,null);

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
