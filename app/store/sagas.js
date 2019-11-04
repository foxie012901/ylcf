import { takeEvery, put,call } from "redux-saga/effects";
import { TEST_JSON } from '../components/ShangJia/store/actionTypes';
import { PUT_DATA_TO_LIST, GET_IMGLIST_DATA, TEXT_TWO } from "../components/Home/store/actionTypes";
import { getData, getIsShow, getImgListData, initImgList, textTwo, getTextTwo } from "../components/Home/store/actionCreators";


import axios from 'axios'
import DevicesStorageUtil from '../util/DeviceStorageUtil';
import DateUtil from '../util/DateUtil';
import { getIsShow as shangjiaGetIsShow, shangjiaJsonData as getShangJia } from "../components/ShangJia/store/actionCreators"

//fetch请求数据,  add wy
fetchPost = (api, params, headers) => {

    let url = 'https://cs.jlcxtx.com/' + api
    let fetchOptions = {
        method: 'POST',
        headers: headers,
        body: params,
    };
    console.log(api + "请求开始", fetchOptions);
    return fetch(url, fetchOptions)
        .then(response => {
            switch (response.status) {
                case 200:
                    alert("请求成功" + api);
                    return response.text();
                case 404:
                    alert("网路请求失败 code_404" + api)
                    return null;
                case 500:
                    alert("服务器错误 code_500" + api)
                    return null;
                case 405:
                    alert("请求异常 code_405" + api)
                    return null
            }
        })
        .then(responseText => {
            console.log(responseText);
            return responseText;
        })
        .catch(error => {
            console.log(error)
            return error
        });
}

function* mySaga() {
    yield takeEvery(PUT_DATA_TO_LIST, getInitList) //当saga收到GET_INIT_LIST,就会执行getInitList方法
    //当我们派发action的时候,不仅仅是reducer能收到,sagas也能收到,一旦sagas接收到就会根据需求执行方法
    yield takeEvery(TEST_JSON, getShangJiaJSON);
    yield takeEvery(GET_IMGLIST_DATA, getImgList)
    yield takeEvery(TEXT_TWO, getTTwo)
}
//获取旗舰店页面数据 add wy
function* getShangJiaJSON(action) {
    console.log(action);
    let formData = new FormData();
    let lastPullTime = yield DevicesStorageUtil.get('lastPullTime');
    if (lastPullTime == null) {
        lastPullTime = DateUtil.formatDate(DateUtil.getBeforeDayDate(2).getTime(), 'yyyy-MM-dd hh:mm:ss');
    }
    let map = {};
    formData.append('lastPullTime', lastPullTime)
    map = { Accept: 'application/json, text/plain,*/*' };
    let response = yield fetchPost("/store/home", formData, map);
    console.log("请求完成", response)
    yield put(getShangJia(response))

    DevicesStorageUtil.save("lastPullTime", yield DateUtil.formatDate(new Date().getTime(), 'yyyy-MM-dd hh:mm:ss'));
    console.log("验证时间", DateUtil.time_range(JSON.parse(response).data.businessHours.split("-")[0], JSON.parse(response).data.businessHours.split("-")[1], DateUtil.formatDate(new Date().getTime(), 'hh:mm:ss')))
    yield put(shangjiaGetIsShow(false))
}

function* getTTwo(){
    
}

function* getImgList() {

    console.log('getImgList')
    yield getAxios()


}
function* getAxios() {
    try {
        const res = yield axios.get('http://192.168.34.102:8081/public/home/img.json');
        console.log('res', res);
        let { status, msg, data } = res
        console.log('data', data.imgList)
        console.log('sataus', status)

        if (status === 200) {
            yield put(initImgList(data.imgList))
            // yield put(getTextTwo())
        }
    } catch (error) {
        console.log('error', error);
    }
}


function* getInitList() {
    // console.warn('saga')
    try {
        const res = yield axios.get('http://localhost.charlesproxy.com:3000/list.json');
        let { status, data } = res.data
        if (status === 200) {
            console.log(data)
            const action = getData(data)
            yield put(action)  //因为saga没有dispatch,所以得用put,效果一样 ,加yield表示等action处理完成之后再继续往下执行代码
        }
        const action = getIsShow(false)
        yield put(action)

    } catch (e) {
        console.log('list.json 网络请求失败')
        var data2 = {
            "status": 200,
            "data": [
                "war",
                "money",
                "woman"
            ]
        }
        if (data2.status === 200) {
            console.log('走了进来', data2.data)
            // const action = getData(fromJS(data2.data))
            const action = getData(data2.data)
            yield put(action)
        }
        const action = getIsShow(false)
        yield put(action)
    }

}





export default mySaga
