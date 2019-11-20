

import { actionTypes } from "./index";
import { fromJS } from "immutable";
import DeviceStorageUtil from '../../../util/DeviceStorageUtil';
import { Actions, ActionConst } from "react-native-router-flux";

const defaultState = fromJS({
    shopList:[],
    isSelect:false,
    cityList:['吉林市','长春市','延吉市'],
    city:'吉林市',
    scrollViewStyle:{backgroundColor:'rgba(0,0,0,0)'}
})

export default (state = defaultState, action) => {
   
    switch (action.type){
        case actionTypes.GET_IS_SHOW:
            return state;
        case actionTypes.GET_SHANGJIALIST_JSON:
            return state.set('shopList',action.data.list);
        case actionTypes.CHANGE_CITY:
            return state.set('city',action.data);
        case actionTypes.CHANGE_VIEW_STYLE:
            return state.set('scrollViewStyle',fromJS(action.style));
    }
 
    return state
}