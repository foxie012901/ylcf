import React, { Component } from 'react';
import {StyleSheet, View, Text,Dimensions,ScrollView,NativeModules,Platform,ActivityIndicator,FlatList,RefreshControl,TouchableHighlight} from 'react-native';
import { actionCreators } from "./store";
import { connect } from "react-redux";
import DeviceStorageUtil  from '../../util/DeviceStorageUtil';
import   LoadingUtil         from "../../util/LoadingUtil";
import { Actions } from 'react-native-router-flux';
const mWidth = Dimensions.get('window').width;
const mHeight = Dimensions.get('window').height;
class ReserveProject extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
    };
    this.props._changeLoding(true);
    this.props._getStoreChildItemList(props.storeId,props.storeItemId,props.accPackageId);

    
  }
 
  componentDidUpdate(){
   
  }
  async _jumpPage () {
    let token ="";
    DeviceStorageUtil.get('token').then(val=>{
      val===null?Actions.login({actionTo:'reserveproject'}):token=val,alert(token);
    });
  }

  render() {
   let{
     storeChildItemList,//项目列表
     isLoading,//请稍后
    _getStoreChildItemList,
   }=this.props
   console.log(storeChildItemList)
    return (
    <ScrollView style={{flex:1}}>
      {this.props.storeChildItemList.map((item,index)=>{
        return (<View style={styles.itemStyle} key={index}>
      
          <View style={styles.itemNameStyle}>
            <Text style={styles.itemNameTextStyle}>{item.projectName}</Text>             
            <TouchableHighlight style={styles.reserveButtonStyle}
                            onPress={()=>{
                              this._jumpPage();
                            }} >
               <Text style={styles.reserveTextStyle}>立即预约</Text>
            </TouchableHighlight> 
          </View>
          <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
            <Text style={styles.priceTextStyle}>￥{item.custAccountPrcie}</Text> 
            {item.oldPrice===undefined?null: <Text style={styles.oldPriceTextStyle}>原价: ￥20.00</Text>}
          </View>
          <View style={styles.remarksStyle}>
            <Text style={styles.remarksTextStyle}>{item.remarks}</Text> 
          </View>
      </View>)
      })}
             {this.props.isLoading?LoadingUtil.showLoading():LoadingUtil.dismissLoading()}

    </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  
    return {
      storeChildItemList:(state.getIn(['reserveproject','storeChildItemList'])).toJS(),
      isLoading:state.getIn(['reserveproject','isLoading']),
        }
 
}
const mapDispatchToProps = dispatch => {
  return {
    _getStoreChildItemList(storeId,storeItemId,accPackageId){
          dispatch(actionCreators.getData(storeId,storeItemId,accPackageId));
       },
    _changeLoding(isLoding){
          dispatch(actionCreators.CHANGE_IS_LODING(isLoding));
    }
    
    }
}
const styles = StyleSheet.create({
  itemStyle:{
    width:mWidth*0.9,height:mHeight*0.14,justifyContent:'center',flexDirection:'column',alignSelf:'center',backgroundColor:"rgb(255,255,255)",marginTop:10
  },
  itemNameStyle:{
    flexDirection:'row',justifyContent:'space-between',marginBottom:2
  },
  itemNameTextStyle:{
    marginLeft:10,color:'rgb(51,51,51)',fontSize:15,fontWeight:'bold',flex:8
  },
  reserveButtonStyle:{
    flex:2,backgroundColor:'rgb(227,241,255)',marginRight:10,borderRadius:12,justifyContent:'center',
  },
  reserveTextStyle:{
    fontSize:12,color:'rgb(6,123,237)',alignSelf:'center',textAlign:'center',
  },
  priceTextStyle:{
    color:'rgb(244,86,93)',marginLeft:10,fontSize:15
  },
  oldPriceTextStyle:{
    textDecorationLine:'line-through',marginLeft:22,fontSize:12,color:'rgb(204,204,204)'
  },
  remarksTextStyle:{
    color:'rgb(154,154,154)',fontSize:12,marginLeft:10
  },
  remarksStyle:{
    flexDirection:'row',justifyContent:'flex-start',marginTop:2
  }
  

})
export default connect(mapStateToProps, mapDispatchToProps)(ReserveProject)
