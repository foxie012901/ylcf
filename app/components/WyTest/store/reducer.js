import { actionTypes } from "./index";
import { fromJS } from "immutable";

const defaultState = fromJS({
    response:Object
})

export default (state = defaultState, action) => {

  

    switch (action.type) {
            case actionTypes.GET_RESPONSE:
                console.log(action)
                return state
    }


    return state
}