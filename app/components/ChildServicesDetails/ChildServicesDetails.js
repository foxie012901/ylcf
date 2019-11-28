import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    TextInput,
    Button,
    ActivityIndicator,
    Platform,
    ScrollView,
    Dimensions

} from 'react-native';
import { actionCreators } from "./store";
import { connect } from "react-redux";
import DeviceInfo from 'react-native-device-info';
import { Actions } from "react-native-router-flux";
import { getLogIn } from './store/actionCreators';
import IconFont from 'react-native-vector-icons/Ionicons'
const mWidth = Dimensions.get('window').width;
const mHeight = Dimensions.get('window').height;
class ChildServicesDetails extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
        };



    }
    componentWillUpdate() {
     
    }
    render() {
      
     
        return (

            <View style={{flex:1}}>
                <ScrollView style={{flex:1}}>
                    <View style={{width:mWidth,height:mHeight*0.3,backgroundColor:'green',marginTop:20}}></View>
                    <View style={{width:mWidth,height:mHeight*0.3,backgroundColor:'green',marginTop:20}}></View>

                    <View style={{width:mWidth,height:mHeight*0.3,backgroundColor:'green',marginTop:20}}></View>

                    <View style={{width:mWidth,height:mHeight*0.3,backgroundColor:'green',marginTop:20}}></View>


                </ScrollView>
                

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

export default connect(mapStateToProps, mapDispatchToProps)(ChildServicesDetails)