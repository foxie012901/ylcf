          

import { actionTypes } from "./index";
import { fromJS } from "immutable";
import DeviceStorageUtil from '../../../util/DeviceStorageUtil';
import DateUtil  from "../../../util/DateUtil";
import { Actions, ActionConst } from "react-native-router-flux";
import LoadingUtil from '../../../util/LoadingUtil';

const defaultState = fromJS({
     list:[],
     selectServiceIndex:undefined,
     
})

export default (state = defaultState, action) => {
        switch(action.type){
          case actionTypes.GET_NEW_LIST:
              console.log(action)
              LoadingUtil.dismissLoading();
              return state.merge({"list":fromJS(action.list)})
          case actionTypes.CHANGE_SELECT_INDEX:
              return state.set("selectServiceIndex",action.index);
        }
            
   
    return state
}