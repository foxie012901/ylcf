import React, { Component } from 'react';
import {StyleSheet, View, Text,Picker,Dimensions,ScrollView } from 'react-native';
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
      <View style={{width:mWidth*0.9,height:mHeight*0.14,alignSelf:'center',backgroundColor:'rgb(244,244,244)',borderWidth:5}}>
        <Text> My </Text>
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
    }  
  })
  export default connect(mapStateToProps, mapDispatchToProps)(ShangJiaMessage)
