import { actionTypes } from "./index";
import { fromJS } from "immutable";
const defaultState = fromJS({
    allyShopList:[]

})

export default (state = defaultState, action) => {

    switch (action.type) {
        case actionTypes.INIT_SHOP_LIST_JSON:
            return state

    }
        


    return state
}



