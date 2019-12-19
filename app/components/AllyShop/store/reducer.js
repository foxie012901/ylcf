import { actionTypes } from "./index";
import { fromJS } from "immutable";
const defaultState = fromJS({
    dataList:[],
    shopServiceTypeList:[],//商家服务类别
    loopList:[],//轮播
    recommendList:[],//推荐
    isShow:false,
    levelSelectDataList:[],
    localDataList:[{text:"离我最近",code:0},{text:"价格从低到高",code:1},{text:"价格从高到低",code:2}],
    levelSelectDataLists:[],
    shopResponse:[],//商店列表
    cdCityResponse:[],//地理编码
})

export default (state = defaultState, action) => {

    switch (action.type) {
        case actionTypes.GET_DATA:
            console.log(action.Json)
            let{shopAdResponse,shopType2Response,topItemResponse,cdCityResponse,shopLableResponse,shopResponse}=action.Json
            let levList =[];let levsList=[];
            levList.push({type:'ttt',selectedIndex:0,data:cdCityResponse});
            levList.push({type:'ttt',selectedIndex:0,data:shopType2Response});
            console.log(state.toJS());
            state.toJS().localDataList.map((item,index)=>{
                shopLableResponse.splice(index,0,item)
            })
            levList.push({type:'lab',selectedIndex:0,data:shopLableResponse});
            levsList.push(cdCityResponse);levsList.push(shopType2Response);levsList.push(shopLableResponse)
            return state.merge({
                shopServiceTypeList:fromJS(shopType2Response),
                loopList:fromJS(shopAdResponse),
                recommendList:fromJS(topItemResponse),
                isShow:true,
                levelSelectDataList:fromJS(levList),
                levelSelectDataLists:fromJS(levsList),
                shopResponse:fromJS(shopResponse),
                cdCityResponse:fromJS(cdCityResponse),
            });
        case actionTypes.CHANGE_SCOLLVIEW:   
            return state;
             
    }
        


    return state
}



   //如果页面使用 FlatList 需要使用List格式的数据,并且需要将数据排好顺序
       /*    let dlist=new Array(); let res ={};
            for (let [key, value] of Object.entries(action.Json)) {
                console.log(key,value)
                switch(key){
                    case 'shopType2Response':                          
                        res={type:key,val:value}
                        dlist.splice(0,0,res)
                        break
                    case 'shopAdResponse':
                        res={type:key,val:value}
                        dlist.splice(1,0,res)
                        break
                    case 'topItemResponse':
                        res={type:key,val:value}
                        dlist.splice(2,0,res)
                        break
                    case 'shopResponse':
                        res={type:key,val:value}
                        dlist.splice(3,0,res)
                        break
                }
              }
              res={type:'hmhp',val:'添加车辆'}
              dlist.splice(1,0,res);
              res={type:'tj',val:'推荐'}
              dlist.splice(3,0,res);
              
             return state.set('dataList',fromJS(dlist)) */