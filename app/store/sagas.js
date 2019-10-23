import { takeEvery, put } from "redux-saga/effects";
import { PUT_DATA_TO_LIST } from "../components/Home/store/actionTypes";
import { getData,getIsShow } from "../components/Home/store/actionCreators";

import axios from 'axios'

function* mySaga() {
    yield takeEvery(PUT_DATA_TO_LIST, getInitList) //当saga收到GET_INIT_LIST,就会执行getInitList方法
    //当我们派发action的时候,不仅仅是reducer能收到,sagas也能收到,一旦sagas接收到就会根据需求执行方法
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