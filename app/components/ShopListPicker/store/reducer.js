

import { actionTypes } from "./index";
import { fromJS } from "immutable";
import DeviceStorageUtil from '../../../util/DeviceStorageUtil';

const defaultState = fromJS({
    isSelect:false,
    dataList:["吉林市","长春市","口前县",'磐石','四平'],
    isSelectIndex:0,
    isSelectItemName:'吉林市'
})

export default (state = defaultState, action) => {
   
    switch (action.type){
        case actionTypes.GET_IS_SHOW:
            return state;  
        case actionTypes.CHANGE_IS_SELECT:
            return state.set('isSelect',action.data);
        case actionTypes.CHANGE_IS_SELECT_INDEX:
            return state.set('isSelectIndex',action.index);
        case actionTypes.CHANGE_IS_SELECT_DATA:
            return state.merge({'isSelectIndex':action.index,'isSelectItemName':action.name,'isSelect':action.isSelect});
        }
 
    return state
}