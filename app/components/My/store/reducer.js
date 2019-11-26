import { actionTypes } from "./index";
import { fromJS } from "immutable";

const defaultState = fromJS({
    isShow: false,
    levelOneIsShow: false,
    levelTwoIsShow: false,
})

export default (state = defaultState, action) => {

    console.log('my redux')

    switch (action.type) {
        case actionTypes.ALERT_IS_SHOW:
            return state.set('isShow', action.data)
        case actionTypes.LEVEL_ONE_ISSHOW:
            return state.set('levelOneIsShow', true)
        case actionTypes.LEVEL_ONE_ISHIDDEN:
            return state.set('levelOneIsShow', false)

        case actionTypes.LEVEL_TWO_ISSHOW:
            return state.set('levelTwoIsShow', true)
        case actionTypes.LEVEL_TWO_ISHIDDEN:
            return state.set('levelTwoIsShow', false)
    }


    return state
}