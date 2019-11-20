import { actionTypes } from "./index";
import { fromJS } from "immutable";

const defaultState = fromJS({
    isShow: null,
    InitVioIndex:null,

})

export default (state = defaultState, action) => {

    switch (action.type) {
        case actionTypes.INIT_VIOINDEX:
            let InitVioIndex = action.data.toJS()
            console.log('11111bindCar initvioindex', InitVioIndex)
            return state.set('InitVioIndex', InitVioIndex)
    }


    return state
}