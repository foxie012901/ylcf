          

import { actionTypes } from "./index";
import { fromJS } from "immutable";
import DeviceStorageUtil from '../../../util/DeviceStorageUtil';
import DateUtil  from "../../../util/DateUtil";
import { Actions, ActionConst } from "react-native-router-flux";
let listDate =_dateList();
function _dateList () {
     let list =[];
    for(let i=1;i<=7;i++){
        let dataTime =  DateUtil.getAfterDayDate(i).getTime();
        let strDate = DateUtil.formatDate(dataTime,'w');
        let strD = DateUtil.formatDate(dataTime,'MM.d');
        let s ={dataTime:dataTime,strDate:strDate,strD:strD} 
        list.push(s)
      }
      return list;
 }
const defaultState = fromJS({
      list : listDate,
      selectIndex : 0,
     
})

export default (state = defaultState, action) => {
        switch(action.type){
            case actionTypes.CHANGE_SELECT_INDEX:
                return state.set("selectIndex",action.index);
            
            
        }
            
   
    return state
}