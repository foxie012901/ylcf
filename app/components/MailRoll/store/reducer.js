import { actionTypes } from "./index";
import { fromJS } from "immutable";

const defaultState = fromJS({
    isShow: null,
    mailList:[],//首页站内信

})

export default (state = defaultState, action) => {

    console.log(action.data)

    switch (action.type) {
        case actionTypes.INIT_MAIL_LIST:
            return state.set('mailList',action.data.toJS())
            
    }


    return state
}