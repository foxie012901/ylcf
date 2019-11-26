import { takeEvery, put } from "redux-saga/effects";
import { fetchPost,getShopList } from './ShangJiaSagas';
import { loginFetchPost } from "./LoginSagas";
import { getHome } from "./HomeSagas";
import { getVioIndex as getVio } from "./BindCarSagas";
import { getMailRoll } from './MailRollSagas'
//日期类工具
import DateUtil from '../../util/DateUtil';
import DevicesStorageUtil from '../../util/DeviceStorageUtil';//持久化工具
import  MyLBS     from '../../androidModules/BaiduLBS'; //安卓获取地理位置信息原生
import {Platform} from 'react-native';
//引入各组件redux派发的creators
import { homeIsshowChange } from "../../components/Home/store/actionCreators";
import {refreshing as shangJiaRefreshing,getIsShow as shangjiaGetIsShow} from "../../components/ShangJia/store/actionCreators";
import { changeLoading,changeRefreshing as shangJiaListRefreshing } from "../../components/ShangjiaList/store/actionCreators";
//引入各组件redux派发的TYPES
import { TEST_JSON } from '../../components/ShangJia/store/actionTypes';
import {CHANGE_SHOPS } from '../../components/ShangjiaList/store/actionTypes';
import { GET_HOME_DATA } from "../../components/Home/store/actionTypes";
import { GET_VIOINDEX } from "../../components/BindCar/store/actionTypes";
import { GET_LOGIN } from '../../components/Login/store/actionTypes';
import { GET_MAIL_LIST } from "../../components/MailRoll/store/actionTypes";

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
    yield takeEvery(GET_VIOINDEX, getVioIndex)  // 获取首页顶部绑车信息
    yield takeEvery(TEST_JSON, getShangJiaJSON);//shangjia组件
    yield takeEvery(CHANGE_SHOPS,changeShop);//换店
    yield takeEvery(GET_LOGIN, getLoginJSON); //login 组件
    yield takeEvery(GET_MAIL_LIST, getMailList);

}
function* getMailList() {
    let token = yield DevicesStorageUtil.get('token')
    //token格式
    let tk = {
        headers: { token: yield DevicesStorageUtil.get('token') }
    }
    if (token !== null) {
        let mailFormData = new FormData();
        mailFormData.append('pageno', 0);
        mailFormData.append('pagesize', 5);
        yield getMailRoll(hostUrl + '/appmail/getMailsV180', tk, mailFormData);
    }
}

function* getVioIndex() {
    let hasToken = null
    if (yield DevicesStorageUtil.get('token')) {
        hasToken = yield DevicesStorageUtil.get('token')
    } else {
        hasToken = null
    }


    let token = yield DevicesStorageUtil.get('token');

    //token格式
    let tk = {
        headers: { token: yield DevicesStorageUtil.get('token') }
    }

    console.log('有hasToken index', hasToken)
    console.log('有Token index', token)
    //carid
    let vioIndexBody = new FormData()
    vioIndexBody.append('carid', '')


    yield getVio(hostUrl + 'peccancy/getVioIndex192', tk, vioIndexBody, hasToken)


}

function* getHomeData() {


    let token = yield DevicesStorageUtil.get('token')
    let lastPullTime = DateUtil.formatDate(DateUtil.getBeforeDayDate(2).getTime(), 'yyyy-MM-dd hh:mm:ss');
    //body数据
    let formData = new FormData();
    formData.append('lastPullTime', lastPullTime)
    //token格式
    let tk = {
        headers: { token: yield DevicesStorageUtil.get('token') }
    }



    yield getHome(hostUrl + 'index/homeV192', tk, formData)

    yield put(homeIsshowChange(false))

}


//加载旗舰店页面数据
function* getShangJiaJSON(action) {
    let formData = new FormData();
    console.log(action.e);
    if(Platform.OS==='android'){
        let gps = yield MyLBS.startLocation();
        let lng=JSON.parse(gps).d;
        let lat=JSON.parse(gps).c;
        formData.append('lng', lng);
        formData.append('lat', lat);

         }
    if(action.shangjiaId!==undefined){
        let storeId = action.shangjiaId;
        formData.append('storeId', storeId);
    }
    let map = {};
    map = { Accept: 'application/json, text/plain,*/*' };
    yield fetchPost("/store/home", formData, map,action.e);
   // yield put(shangJiaRefreshing(false));
   // yield put(shangjiaGetIsShow(false));
    


    
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
   if(Platform.OS==='android'){
  let gps = yield MyLBS.startLocation();
  lng=JSON.parse(gps).d;
  lat=JSON.parse(gps).c;
   }else{
    lng=0;
    lat=0;
   }
  let formData = new FormData();
  formData.append('lat', lat);
  formData.append('lng', lng);
    yield getShopList('/store/storeList',formData,null);
    action.data==false?yield put(changeLoading(false)): yield put(shangJiaListRefreshing(false));
    

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
