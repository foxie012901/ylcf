import { call, put } from "redux-saga/effects";
import axios from 'axios'


//引入各组件redux拦截Creators
import { initImgList } from "../../components/Home/store/actionCreators";

function* getAxios(url, data) {
    console.log('sagashome')
    try {
        console.log('homesagas')
        console.log(url)
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
    getAxios
}