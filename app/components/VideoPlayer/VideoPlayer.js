import React, { Component } from 'react';
import { View, Text } from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import {Actions} from 'react-native-router-flux';
export default class VPlayer extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
    };
  }
 componentWillReceiveProps(props){
   console.log(props)
 }
  render() {
    return (
      <View  style={{flex:1}}>
        <VideoPlayer source={{ uri: this.props.url }}
       onBack={()=>{Actions.pop()}} ></VideoPlayer>
      </View>
    );
  }
}
