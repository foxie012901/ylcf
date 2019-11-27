import React, { Component } from 'react';
import {StyleSheet, View, Text,Dimensions,ScrollView,NativeModules,Platform,ActivityIndicator,FlatList,RefreshControl} from 'react-native';
import { actionCreators } from "./store";
import {actionCreators as shopListPickerActionCreators} from "../ShopListPicker/store";
import { connect } from "react-redux";
import ShopListPicker   from '../ShopListPicker/ShopListPicker';
import   ShangJiaMessage     from'../ShangJiaMessage/ShangJiaMessage';
import   LoadingUtil         from "../../util/LoadingUtil";
const { StatusBarManager } = NativeModules;
const mWidth = Dimensions.get('window').width;
const mHeight = Dimensions.get('window').height;
class ShangjiaList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.props._changeShop()

    
  }
 
  componentDidUpdate(){
   
  }
  _renderItem(item){
    return (
      <View>
         <ShangJiaMessage name={item.item.name} address={item.item.address} img={item.item.imgs[0]} distance={item.item.distance} key={item.index.toString()} id={item.item.id}/>
         {item.index===shopList.length-1?<View style={{width:mWidth,alignSelf:'center'}}><Text style={{textAlign:'center'}}>-----到底了-----</Text></View>:null}
    </View>
    )
  }

  render() {
    let {
      shopList,//旗舰店列表
      cityList,//旗舰店城市列表
      city,//城市
      scrollViewStyle,//页面样式
      shopListPickerIsSelect,//下拉框是否被拉起
      isLoading,//是否加载中,
      refreshing,//下拉刷新中
      _changeCity,
      _changeIsSelect,
      _onRefresh
    }=this.props
    return (
      <View>
       <ShopListPicker />
            <FlatList
            onEndReached={(e)=>{console.log("e")}} onEndReachedThreshold={1}
            refreshControl={
                <RefreshControl
                  title={'下拉刷新'}
                  refreshing={refreshing}
                  colors={['rgb(255,176,0)', "#ffb100"]}
                  onRefresh={() => {
                    this.props._onRefresh()
                  }}
                />
              
            }
            keyExtractor={(item, index) => index.toString()}
            onTouchEnd={()=>{this.props._changeIsSelect()}} style={this.props.scrollViewStyle} horizontal={false}  scrollEnabled={!this.props.shopListPickerIsSelect} data={this.props.shopList} 
            renderItem={(item)=>{
              return (
                <View>
                   <ShangJiaMessage name={item.item.name} address={item.item.address} img={item.item.imgs[0]} distance={item.item.distance} key={item.index.toString()} id={item.item.id}/>
                   {item.index===shopList.length-1?<View style={{width:mWidth,alignSelf:'center'}}><Text style={{textAlign:'center'}}>-----到底了-----</Text></View>:null}
              </View>
              )
            }}/>
       
        
     {this.props.isLoading?LoadingUtil.showLoading():LoadingUtil.dismissLoading()}
       
      </View>
    );
  }
}
const mapStateToProps = state => {
    if((state.getIn(['shangjialist','shopList'])).toJS()==[]){
      
    }
    return {
    shopList:(state.getIn(['shangjialist','shopList'])).toJS(),
    cityList:state.getIn(['shangjialist','cityList']),
    city:state.getIn(['shangjialist','city']),
    shopListPickerIsSelect:state.getIn(['shoplistpicker','isSelect']),
    scrollViewStyle:(state.getIn(['shangjialist','scrollViewStyle'])).toJS(),
    isLoading:state.getIn(['shangjialist','isLoading']),
    refreshing:state.getIn(['shangjialist','refreshing']),
  }
 
}
const mapDispatchToProps = dispatch => {
  return {
     _changeCity(value){
       dispatch(actionCreators.changeCity(value))
     },
     _changeIsSelect(){
      let style= {backgroundColor:'rgba(0,0,0,0)',height:mHeight*0.83-(Platform.OS === 'ios' ? 20 :StatusBarManager.HEIGHT)};
       dispatch(shopListPickerActionCreators.changeIsSelect(false));
       dispatch(actionCreators.changeShangJiaListViewStyle(style));
     },
     _changeShop(){
       dispatch(actionCreators.changeShops(false));
     },
     _onRefresh(){
      dispatch(actionCreators.changeRefreshing(true));
      dispatch(actionCreators.changeShops(true));
     }
  }
}
const styles = StyleSheet.create({
  picker:{  
    justifyContent:'center',  
    // height: 216,//Picker 默认高度  
  
  },  
  itempicker:{  
    color:'#e6454a',  
    fontSize:3,  
    height:161  
  }  
})
export default connect(mapStateToProps, mapDispatchToProps)(ShangjiaList)
