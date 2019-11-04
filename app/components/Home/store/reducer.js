// import {
//     CHANGE_INPUT_VALUE,
//     INIT_LIST,
//     DELETE_LIST_INDEX,
//     GET_DATA,
//     GET_IS_SHOW,
// } from "./actionTypes";

import { actionTypes } from "./index";
import { fromJS } from "immutable";

const defaultState = fromJS({
    inputValue: '',
    list: [],
    imgList: [],
    isShow: true
})

export default (state = defaultState, action) => {
    if (action.type === actionTypes.GET_IS_SHOW) {
        return state.set('isShow', action.changedata)
    }

    if (action.type === actionTypes.CHANGE_INPUT_VALUE) {
        return state.set('inputValue', action.value)
    }
    if (action.type === actionTypes.INIT_LIST) {
        return (state.update('list', item => item.concat(state.get('inputValue'))).set('inputValue', null))
    }

    if (action.type === actionTypes.DELETE_LIST_INDEX) {
        return state.update('list', item => item.delete(action.index))
    }

    if (action.type === actionTypes.GET_DATA) {
        return state.set('list', action.data)
    }

    if (action.type === actionTypes.GET_IMGLIST_DATA) {
        console.log('reducer')
    }

    if (action.type === actionTypes.INIT_IMG_LIST) {
        const set1 = state.set('imgList', action.data)
        const set2 = state.set('isShow', false)
        return state.merge({
            'imgList': action.data,
            'isShow': false
        })
    }

    if(action.type === actionTypes.GET_TEXT_TWO){
        console.warn('gettexttwo')
    }


    return state
}