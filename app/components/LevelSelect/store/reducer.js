import { actionTypes } from "./index";
import { fromJS } from "immutable";

const defaultState = fromJS({
    menuSelectIndex:undefined,//被拉起的菜单下标
    localDataList:[{text:"离我最近",code:0},{text:"价格从低到高",code:1},{text:"价格从高到低",code:2}],
    levelTowSelectIndex:undefined,//被拉起的二级菜单下标(有三级)  被选中的二级菜单下标(无三级)
    levelThreeselectedIndex:undefined,//被选中的三级菜单下标
    menuList:[{one:0,tow:null,three:null},{one:0,tow:null,three:null},{one:0,tow:null,three:null}],//菜单列表
    openStatus:false
})

export default (state = defaultState, action) => {

    switch (action.type) {
        case actionTypes.CHANGE_MENU:
           return state.set("menuSelectIndex",action.index)
        case actionTypes.CHANGE_STATUS:
            return state.set("openStatus",action.status)
    }


    return state
}