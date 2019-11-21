import React, { Component } from 'react';
import {StyleSheet, View, Text,Picker,Dimensions,ScrollView,TouchableOpacity,Image } from 'react-native';
import { actionCreators } from "./store";
import { connect } from "react-redux";
const mWidth = Dimensions.get('window').width;
const mHeight = Dimensions.get('window').height;
 class ShangJiaMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{width:mWidth*0.9,height:mHeight*0.14,alignSelf:'center',backgroundColor:'rgb(244,244,244)',marginTop:8,marginBottom:8,flexDirection:'row'}}>
        <TouchableOpacity style={{paddingLeft:8,paddingTop:7,flex:2}} onPress={()=>{alert(1)}}>
          <Image style={{width:58,height:58,resizeMode:'stretch',}} source={{uri:'http://124.129.157.208:8889/data/uploads/kecheng/2018/01/18/5a600b2c99836.png@0o_0l_220w.png'}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'column',flex:5,paddingTop:7}}>
          <View><Text style={{fontSize:15,fontStyle:'italic',color:'rgb(74,74,74)'}}>汇骏名车</Text></View>
          <View><Text style={{fontSize:12,fontStyle:'normal',color:'rgb(154,154,154)'}} numberOfLines={3}>广西壮族自治区 来宾市 象州县 象州镇 金象路61号御象城汇骏车行广西壮族自治区 来宾市 象州县 象州镇 金象路61号御象城汇骏车行广西壮族自治区 来宾市 象州县 象州镇 金象路61号御象城汇骏车行广西壮族自治区 来宾市 象州县 象州镇 金象路61号御象城汇骏车行广西壮族自治区 来宾市 象州县 象州镇 金象路61号御象城汇骏车行</Text></View>

        </TouchableOpacity>
        <View style={{flexDirection:'column',flex:2,justifyContent:'space-between',paddingRight:6,paddingTop:7,paddingBottom:5,paddingLeft:5}}>
          <TouchableOpacity style={{backgroundColor:'rgb(227,241,255)',borderRadius:12,width:'90%',height:'25%',justifyContent:'center'}}><Text style={{fontSize:12,color:'rgb(6,123,237)',textAlign:'center'}}>进店</Text></TouchableOpacity>
          <TouchableOpacity style={{width:'90%',height:'25%',flexDirection:'row'}}><Image style={styles.map_pointImg}source={require('../../images/map_point.png')}/><View><Text style={{fontSize:9,color:'rgb(6,123,237)',textAlign:'center',marginLeft:3.6}}>132465km</Text></View></TouchableOpacity>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
    console.log(state)
    return {

    }
  }
  const mapDispatchToProps = dispatch => {
    return {
  
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
    },
    map_pointImg :{
      width:6.8,
      height:8.8,
      resizeMode:'stretch'
    },  
  })
  export default connect(mapStateToProps, mapDispatchToProps)(ShangJiaMessage)
