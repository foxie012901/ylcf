import { call, put } from "redux-saga/effects";
import axios from 'axios'
import DeviceStorageUtil from "../../util/DeviceStorageUtil";


//引入各组件redux拦截Creators
import { initHomeData } from "../../components/Home/store/actionCreators";



//获取首页相关数据  /index/homeV192
function* getHome(url, header, body) {
    try {
        const res = yield call(axios.post, url, body, header)
        let { status } = res
        let { ret, message, data } = res.data
        // console.log('status', status)
        // console.log('message', message)
        console.log('sagadata console', data)

        if (status === 200) {
            if (ret === 1) {
                // console.log(message)
                yield put(initHomeData(data))
            } else if (ret === 0) {
                alert(message)
            }
        } else {

        }
    } catch (error) {
        console.log('error:', error)
    }
}


// 参考样本 一起请求多个接口
function* getAxios(url, da) {
    console.log('sagashome')
    try {
        // console.log('homesagas')
        // console.log(url)
        const res = yield call(axios.get, url)
        let { status, msg, data } = res
        if (status === 200) {
            yield put(initImgList(data.imgList))

            // yield put(initImgList(data.imgList))
            // yield put(getTextTwo())
        }



        // let res = yield axios.all([
        //    yield axios.get(url[0]),
        //    yield axios.get(url[1])
        // ])
        // yield isshow = false
        // yield console.log(res)
    } catch (error) {
        console.log('error', error);
        // yield put(putNam+'Err'(data.imgList))

    }
}

export {
    getHome,
}