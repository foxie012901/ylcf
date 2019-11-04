import { takeEvery, put } from "redux-saga/effects";
import { getAxios } from "./HomeSagas.js";
import {fetchPost} from './ShangJiaSagas';
import { TEST_JSON } from '../../components/ShangJia/store/actionTypes';
import DevicesStorageUtil from '../../util/DeviceStorageUtil';
import DateUtil from '../../util/DateUtil';



//引入各组件redux派发types
import {  GET_IMGLIST_DATA  } from "../../components/Home/store/actionTypes";


function* mySaga() {
    yield takeEvery(GET_IMGLIST_DATA, HomeImgList) // home组件redux
    yield takeEvery(TEST_JSON, getShangJiaJSON);//shangjia组件

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

export default mySaga