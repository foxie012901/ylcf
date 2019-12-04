          

import { actionTypes } from "./index";
import { fromJS } from "immutable";
import DeviceStorageUtil from '../../../util/DeviceStorageUtil';
import { Actions, ActionConst } from "react-native-router-flux";

const defaultState = fromJS({
     title:"▼  请绑定车辆",
     carList:[],
     selectIsShow:false,
     selectPlateNum:undefined
     
})

export default (state = defaultState, action) => {
        switch(action.type){
            case actionTypes.GET_JSON:
                if(action.data.data.list.length>0){
                    let carList =fromJS(action.data.data.list)
                    let title ="▼  请绑定车辆";
                    let selectPlateNum = undefined;
                    action.data.data.list.map((item,index) =>{
                        if(item.isDefault==="1"){
                            title="▼ "+item.hphm,
                            selectPlateNum=item.hphm
                        }
                    })
                    return state.merge({
                        "carList":carList,
                        "title":title,
                        "selectPlateNum":selectPlateNum
                    });
                }
            case actionTypes.CHANGE_SELECT_SHOW:
                return state.set("selectIsShow",action.show);
            case actionTypes.CHANGE_TITLE:
                return state.merge({'title':'▼ '+action.hphm,
                                    "selectPlateNum":action.hphm
                                 })
        }
            
   
    return state
}