import { 
    Dimensions,  
} from 'react-native';
 import { actionTypes } from "./index";
import { fromJS } from "immutable";
const mWidth = Dimensions.get('window').width;
const mHeight = Dimensions.get('window').height;
const defaultState = fromJS({

})

export default (state = defaultState, action) => {
   
    switch (action.type){
        case actionTypes.GET_IS_SHOW:
            return state;
   
    }
 
    return state
}