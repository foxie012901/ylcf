
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
    isShow:true,
    storeChildItemList:[],//服务项目列表
    isLoading:true,//请稍后
})

export default (state = defaultState, action) => {
   
    switch (action.type){
        case actionTypes.GET_IS_SHOW:
            return state;
        case actionTypes.GET_JSON:
            console.log(action.response);
            return state.merge({
                'storeChildItemList':fromJS(action.response.data.list),
                'isLoading':false
             });
        case actionTypes.CHANGE_IS_LODING:
            return state.set('isLoading',action.isLoding);
            
       
    }
 
    return state
}