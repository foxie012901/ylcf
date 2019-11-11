// import {
//     GET_IS_SHOW,
//     CHANGE_INPUT_VALUE,
//     INIT_LIST
// } from "./actionTypes";

import { actionTypes } from "./";
import { fromJS } from "immutable";

export const getIsShow = changedata => ({
    type: actionTypes.GET_IS_SHOW,
    changedata
})
//获取首页需要的渲染数据
export const getHomeData = () => ({
    type: actionTypes.GET_HOME_DATA
})
//添加获取到首页的数据 
export const initHomeData = data => ({
    type: actionTypes.INIT_HOME_DATA,
    data: fromJS(data)
})

// //获取首页icon按钮数据并添加
// export const getImgListData = () => ({
//     type: actionTypes.GET_IMGLIST_DATA
// })
// export const initImgList = data => ({
//     type: actionTypes.INIT_IMG_LIST,
//     data: fromJS(data)
// })

//获取首页顶部页面数据
export const getTopData = () => ({
    type: actionTypes.GET_TOP_DATA
})
export const initTopData = data => ({
    type: actionTypes.INIT_TOP_DATA,
    data: fromJS(data)
})

//获取首页图标按钮数据并添加
export const getIconListData = () => ({
    type: actionTypes.GET_ICONLIST_DATA
})
export const initIconList = data => ({
    type: actionTypes.INIT_ICON_LIST,
    data: fromJS(data)
})

//获取首页绘制复杂矩形的数据
export const beginPainting = width => ({
    type: actionTypes.BEGIN_PAINTING,
    width
})

//首页加载开关HOME_ISSHOW_CHANGE
export const homeIsshowChange = tOf => ({
    type: actionTypes.HOME_ISSHOW_CHANGE,
    tOf,
})


export const textTwo = () => ({
    type: actionTypes.TEXT_TWO
})

export const getTextTwo = () => ({
    type: actionTypes.GET_TEXT_TWO
})


//获取1.92 真实接口
// export const 




// export const getChangeInputValue = value => ({
//     type: actionTypes.CHANGE_INPUT_VALUE,
//     value,
// })

// export const InitList = () => ({
//     type: actionTypes.INIT_LIST,
// })

// export const delInitListIndex = index => ({
//     type: actionTypes.DELETE_LIST_INDEX,
//     index
// })

// export const getData = data => ({
//     type: actionTypes.GET_DATA,
//     data: fromJS(data)
// })

// export const putDataToList = () => ({
//     type: actionTypes.PUT_DATA_TO_LIST
// })