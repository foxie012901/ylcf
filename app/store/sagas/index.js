import { takeEvery ,put} from "redux-saga/effects";

//组件级sagas
import { getAxios, getHomeIconBtn, getHomeTopData } from "./HomeSagas.js";
import { fetchPost } from './ShangJiaSagas';



//持久化工具
import DevicesStorageUtil from '../../util/DeviceStorageUtil';
//日期类工具
import DateUtil from '../../util/DateUtil';



//引入各组件redux派发types
import { GET_IMGLIST_DATA, GET_HOME_DATA } from "../../components/Home/store/actionTypes";
import { TEST_JSON } from '../../components/ShangJia/store/actionTypes';

//引入各组件redux派发的creators
import { homeIsshowChange } from "../../components/Home/store/actionCreators";

//拦截
function* mySaga() {
    yield takeEvery(GET_HOME_DATA, GetHomeData) // 获取home组件默认数据
    yield takeEvery(TEST_JSON, getShangJiaJSON);//shangjia组件

}

function* GetHomeData() {
    console.log(3)
    yield getHomeIconBtn('http://192.168.34.102:8081/public/home/img.json', null)
    yield getHomeTopData('http://192.168.34.102:8081/public/home/cars.json', null)

    yield put (homeIsshowChange(false))
    
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






// //保留参考
// function* HomeImgList() {
//     // let jsonS = [
//     //     'http://192.168.34.102:8082/public/home/img.json',
//     //     'http://192.168.34.102:8081/public/home/cars.json'
//     // ]
//     // yield getAxios(jsonS,null)

//     yield getAxios('http://192.168.34.102:8081/public/home/img.json', null)

// }
