
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
    shopList:[],
    isSelect:false,
    cityList:['吉林市','长春市','延吉市'],
    city:'吉林市',
    scrollViewStyle:{backgroundColor:'rgba(0,0,0,0)',height:mHeight*0.83-(Platform.OS === 'ios' ? 20 :StatusBarManager.HEIGHT)},//滑动样式
    isLoading:true,
    refreshing:false,
})

export default (state = defaultState, action) => {
   
    switch (action.type){
        case actionTypes.GET_IS_SHOW:
            return state;
        case actionTypes.GET_SHANGJIALIST_JSON:
            return state.set('shopList',fromJS(action.data.list));
        case actionTypes.CHANGE_CITY:
            return state.set('city',action.data);
        case actionTypes.CHANGE_VIEW_STYLE:
            return state.set('scrollViewStyle',fromJS(action.style));
        case actionTypes.CHANGE_LOADING:
            return state.set('isLoading',action.isLoad);
        case actionTypes.REFRESHING:
            return state.set('refreshing',action.refreshing);
       
    }
 
    return state
}