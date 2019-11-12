import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    TextInput,
    Button,
    ActivityIndicator,
    Platform
    
} from 'react-native';
import styles from "./style";
import { connect } from "react-redux";
import DeviceInfo from 'react-native-device-info';

import { Actions } from "react-native-router-flux";
const deviceId = DeviceInfo.getUniqueId();
export default class PasswordReset extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
     
           
     
        return (
            
            <View style={styles.content}>
               
               
            </View>
        );
    }
}
const mapStateToProps = state => {
    return {
    
     
    }
  }
  const mapDispatchToProps = dispatch => {
    
  }

  connect(mapStateToProps, mapDispatchToProps)(PasswordReset)