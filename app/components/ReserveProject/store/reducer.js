
import { 
    Dimensions,
    NativeModules,Platform 
} from 'react-native';
import { actionTypes } from "./index";
import { fromJS } from "immutable";
import DeviceStorageUtil from '../../../util/DeviceStorageUtil';
import { Actions, ActionConst } from "react-native-router-flux";
const mWidth = Dimensions.get('window').width;
const mHeight = Dimensions.get('window').height;
const { StatusBarManager } = NativeModules;
const defaultState = fromJS({
    isShow:true
})

export default (state = defaultState, action) => {
   
    switch (action.type){
        case actionTypes.GET_IS_SHOW:
            return state;
       
       
    }
 
    return state
}