import React, { Component } from 'react';
import {StyleSheet, View, Text,Dimensions,ScrollView,NativeModules,Platform,ActivityIndicator,FlatList,RefreshControl} from 'react-native';
import { actionCreators } from "./store";
import { connect } from "react-redux";

import   LoadingUtil         from "../../util/LoadingUtil";
const mWidth = Dimensions.get('window').width;
const mHeight = Dimensions.get('window').height;
class ReserveProject extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
    };


    
  }
 
  componentDidUpdate(){
   
  }

  render() {
   
    return (
    <View><Text>2432143</Text></View>
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
 
})
export default connect(mapStateToProps, mapDispatchToProps)(ReserveProject)
