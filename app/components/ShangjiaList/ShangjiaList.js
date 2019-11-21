import React, { Component } from 'react';
import {StyleSheet, View, Text,Picker,Dimensions,ScrollView } from 'react-native';
import { actionCreators } from "./store";
import {actionCreators as shopListPickerActionCreators} from "../ShopListPicker/store";
import { connect } from "react-redux";
import ShopListPicker   from '../ShopListPicker/ShopListPicker';
const mWidth = Dimensions.get('window').width;
const mHeight = Dimensions.get('window').height;
class ShangjiaList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let {
      shopList,//旗舰店列表
      cityList,//旗舰店城市列表
      city,//城市
      scrollViewStyle,//页面样式
      shopListPickerIsSelect,//下拉框是否被拉起
      _changeCity,
      _changeIsSelect
    }=this.props
    console.log(scrollViewStyle);
    
    return (
      <View>
       <View style={{zIndex:999}}>
       <ShopListPicker />
       </View>
      
        
        <ScrollView style={this.props.scrollViewStyle} scrollEnabled={!this.props.shopListPickerIsSelect} contentContainerStyle={{  paddingVertical:20}} onTouchEnd={()=>{this.props._changeIsSelect()}}>
        <View style={{width:mWidth,height:mHeight*0.2,backgroundColor:'#024441',marginTop:10}}></View>
        <View style={{width:mWidth,height:mHeight*0.2,backgroundColor:'#024441',marginTop:10}}></View>
        <View style={{width:mWidth,height:mHeight*0.2,backgroundColor:'#024441',marginTop:10}}></View>
        <View style={{width:mWidth,height:mHeight*0.2,backgroundColor:'#024441',marginTop:10}}></View>
        <View style={{width:mWidth,height:mHeight*0.2,backgroundColor:'#024441',marginTop:10}}></View>
        <View style={{width:mWidth,height:mHeight*0.2,backgroundColor:'#024441',marginTop:10}}></View>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => {
  console.log(state)
  return {
    shopList:state.getIn(['shangjialist','shopList']),
    cityList:state.getIn(['shangjialist','cityList']),
    city:state.getIn(['shangjialist','city']),
    shopListPickerIsSelect:state.getIn(['shoplistpicker','isSelect']),
    scrollViewStyle:(state.getIn(['shangjialist','scrollViewStyle'])).toJS(),
  }
}
const mapDispatchToProps = dispatch => {
  return {
     _changeCity(value){
       dispatch(actionCreators.changeCity(value))
     },
     _changeIsSelect(){
      let style= {backgroundColor:'rgba(0,0,0,0)'};
       dispatch(shopListPickerActionCreators.changeIsSelect(false));
       dispatch(actionCreators.changeShangJiaListViewStyle(style));

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
