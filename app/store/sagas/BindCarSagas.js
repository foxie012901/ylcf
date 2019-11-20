import { call, put } from "redux-saga/effects";
import axios from 'axios'
import DeviceStorageUtil from "../../util/DeviceStorageUtil";

import { initVioIndex } from "../../components/BindCar/store/actionCreators";

//获取首页顶部帮车信息

function* getVioIndex(url, header, body, hasToken) {

    try {
        console.log('哈哈hastoken', hasToken)
        if (hasToken === null) {
            console.log('没有token')
            yield put(initVioIndex({ type: '未登录', wxts: '绑定车辆可查询违章、办理年检、优惠洗车等' }))
        } else {
            console.log('有token')
            const res = yield call(axios.post, url, body, header)
            console.log(res)
            let { status } = res
            let { ret, message, data } = res.data
            if (status === 200) {
                if (ret === 1) {
                    if (data === null) {
                        // console.log('null')
                        yield put(initVioIndex({ type: '未绑车', wxts: '绑定车辆可查询违章、办理年检、优惠洗车等' }))
                    } else {
                        yield put(initVioIndex(data))
                    }
                } else if (ret === 0) {
                    alert(message)
                } else if (ret === 3) {
                    DeviceStorageUtil.clean()
                    console.log('未登录token失效')
                    // yield put(initVioIndex({ hphm: '添加车辆', wxts: '绑定车辆可查询违章、办理年检、优惠洗车等' }))
                    // yield put(noToken({ noToken: false }))

                }
            }
        }

    } catch (error) {
        console.log('BindCar getVioIndex error', error)
    }
}



export {
    getVioIndex,
}