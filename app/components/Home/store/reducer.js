// import {
//     CHANGE_INPUT_VALUE,
//     INIT_LIST,
//     DELETE_LIST_INDEX,
//     GET_DATA,
//     GET_IS_SHOW,
// } from "./actionTypes";

import { actionTypes } from "./index";
import { Path } from '@react-native-community/art'
import { fromJS } from "immutable";

const defaultState = fromJS({
    imgList: [], // 首页icon按钮列表   
    iconList: [], // 首页图标按钮2 
    HomePath: null, // 首页绘制复杂矩形参数
    isShow: true, // 首页加载开关
    brand: null, // 首页车辆品牌
    logo: null, // 首页车辆品牌logo
    plate: null, //首页车牌号 
    wxts: null, //首页顶部温馨提示
})

export default (state = defaultState, action) => {

    switch (action.type) {
        case actionTypes.INIT_HOME_DATA:
            const {
                homeFunctionAreaList, //可配置功能区域
                bannerV180ResponseList, //焦点区域
                creditV192ResponseList, //积分区域
                activityStyleV180ResponseList, //活动区域
                needPay, //积分余额
                integralBalance, //是否有待支付信息 0 无 1有 【商家服务、非标准收费处于延时支付 的 待支付订单】
                neverRead, //是否有新消息 0 无 1有
                neverReadNum //未读消息数 根据上次查询站内信时间开始到当前时间 V188新增
            } = action.data.toJS()

            // console.log('size',action.data.size)

            // console.log('bigdata', bigData)
            return state.merge({
                homeFunctionAreaList,
                bannerV180ResponseList,
                creditV192ResponseList,
                activityStyleV180ResponseList,
                needPay,
                integralBalance,
                neverRead,
                neverReadNum
            })



        // case actionTypes.INIT_IMG_LIST:
        //     console.log(5)
        //     const imgList = action.data.toJS()
        //     // console.log(111, imgList)
        //     return state.set('imgList', imgList)
        case actionTypes.INIT_TOP_DATA:
            console.log(7)
            const { brand, logo, plate, wxts } = action.data.toJS()

            // console.log(111)
            // console.log(brand, logo)
            return state.merge({
                'brand': brand,
                'logo': logo,
                'plate': plate,
                'wxts': wxts
            })

        case actionTypes.BEGIN_PAINTING:
            let path = new Path();
            let width = action.width
            // console.log('width', width)
            path.moveTo(0, 0)
                .lineTo(width, 0)
                .lineTo(width, 120)
                // .lineTo(0,200)
                .arc(-width, 0, 1500)
                .lineTo(0, 0)
                .close()
            return state.set('HomePath', path)
        case actionTypes.HOME_ISSHOW_CHANGE:
            console.log(7)

            return state.set('isShow', action.tOf)

        case actionTypes.INIT_ICON_LIST:
            const iconList = action.data.toJS()
            // console.log(111, imgList)
            return state.set('iconList', iconList)
    }





    if (action.type === actionTypes.GET_TEXT_TWO) {
        console.warn('gettexttwo')
    }


    return state





    // if (action.type === actionTypes.INIT_IMG_LIST) {
    //     return state.merge({
    //         'imgList': action.data,
    //         'isShow': false
    //     })
    // }

    // if (action.type === actionTypes.INIT_TOP_DATA) {
    //     const { brand, logo, plate } = action.data
    //     return state.merge({
    //         'brand': brand,
    //         'logo': logo,
    //         'plate': plate
    //     })
    //     // return state.set
    // }



    // if (action.type === actionTypes.GET_IS_SHOW) {
    //     return state.set('isShow', action.changedata)
    // }

    // if (action.type === actionTypes.CHANGE_INPUT_VALUE) {
    //     return state.set('inputValue', action.value)
    // }
    // if (action.type === actionTypes.INIT_LIST) {
    //     return (state.update('list', item => item.concat(state.get('inputValue'))).set('inputValue', null))
    // }

    // if (action.type === actionTypes.DELETE_LIST_INDEX) {
    //     return state.update('list', item => item.delete(action.index))
    // }

    // if (action.type === actionTypes.GET_DATA) {
    //     return state.set('list', action.data)
    // }
}