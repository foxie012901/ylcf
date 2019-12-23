import { call, put } from "redux-saga/effects";
import axios from 'axios'
import DeviceStorageUtil from "../../util/DeviceStorageUtil";

import { alertIsShow } from "../../components/My/store/actionCreators";
import { getResponse } from "../../components/WyTest/store/actionCreators";

function* getMyData (data) {
    yield put(alertIsShow(data))
}

function* getRes(urls,headers,params){
   
    let url = urls;

    let formdata = new FormData();


    console.log("formdata", JSON.stringify(formdata))

    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
        },
        processData: false,
        contentType: false,
        body: params
    }).then(function (response) {
        console.log(response)
    }).catch(err => {
        console.log(err)
    })


}



// function* getMyData(url, header, body) {
//     try {
//         const res = yield call(axios.post, url, body, header)
//         let { status } = res
//         let { ret, message, data } = res.data

//         if (status === 200) {
//             if (ret === 1) {
//                 // console.log(data.list)
//                 yield put(initMailList(data.list));
//             } else if (ret === 0) {
//                 alert(message);
//             }
//         } else {

//         }
//     } catch (error) {
//         console.log('error:', error)

//     }
// }

export {
    getMyData,getRes
}