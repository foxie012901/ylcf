import React, { Component } from 'react';
import {StyleSheet, View, Text,Picker,Dimensions,ScrollView,TouchableOpacity,Image } from 'react-native';
import { actionCreators } from "./store";
import { connect } from "react-redux";
import {Actions} from 'react-native-router-flux';

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
      <View style={styles.viewStyle}>
        <TouchableOpacity style={{paddingLeft:8,paddingTop:7,flex:2}} onPress={()=>{alert(1)}}>
          <Image style={styles.shangJiaMessageImg} source={{uri:this.props.img}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'column',flex:5,paddingTop:7}}>
          <View><Text style={{fontSize:15,fontStyle:'italic',color:'rgb(74,74,74)'}}>{this.props.name}</Text></View>
          <View><Text style={{fontSize:12,fontStyle:'normal',color:'rgb(154,154,154)'}} numberOfLines={3}>{this.props.address}</Text></View>

        </TouchableOpacity>
        <View style={styles.shangjiaMessageFun}>
          <TouchableOpacity style={styles.jindianView} onPress={()=>{/*Actions.app({shangjiaId:this.props.id,selectedTab:'shangjia'})*/Actions.reset('app',{shangjiaId:this.props.id,selectedTab:'shangjia'})}}><Text style={styles.jindianText}>进店</Text></TouchableOpacity>
          <TouchableOpacity style={{width:'90%',height:'25%',flexDirection:'row'}}><Image style={styles.map_pointImg}source={require('../../images/map_point.png')}/>
          <View><Text style={styles.distanceText}>{this.props.distance}km</Text></View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
    return {

    }
  }
  const mapDispatchToProps = dispatch => {
    return {
  
    }
  }
  const styles = StyleSheet.create({
    viewStyle:{
      width:mWidth*0.9,height:mHeight*0.14,alignSelf:'center',backgroundColor:'rgb(244,244,244)',marginTop:8,marginBottom:8,flexDirection:'row'
    },
    map_pointImg :{
      width:6.8,
      height:8.8,
      resizeMode:'stretch'
    }, 
    shangJiaMessageImg:{
      width:58,height:58,resizeMode:'stretch',
    },
    shangjiaMessageFun:{
      flexDirection:'column',flex:2,justifyContent:'space-between',paddingRight:6,paddingTop:7,paddingBottom:5,paddingLeft:5
    },
    jindianView:{
      backgroundColor:'rgb(227,241,255)',borderRadius:12,width:'90%',height:'25%',justifyContent:'center'
    },
    jindianText:{
      fontSize:12,color:'rgb(6,123,237)',textAlign:'center'
    },
    distanceText:{
      fontSize:9,color:'rgb(6,123,237)',textAlign:'center',marginLeft:3.6
    }
  })
  export default connect(mapStateToProps, mapDispatchToProps)(ShangJiaMessage)
