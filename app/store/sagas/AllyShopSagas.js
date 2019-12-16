import { call, put } from "redux-saga/effects";
import axios from 'axios'
import DeviceStorageUtil from "../../util/DeviceStorageUtil";
import {getData} from "../../components/AllyShop/store/actionCreators";

function* queryIndexList18(url, header, body) {
    try {
        const res = yield call(axios.post, url, body, header)
        let { status } = res
        let { ret, message, data } = res.data
        if (status === 200) {
            if (ret === 1) {
               yield put(getData(data))
            } else if (ret === 0) {
                alert(message);
            }
        } else {

        }
    } catch (error) {
        console.log('error:', error)

    }
}

export {
    queryIndexList18,
}