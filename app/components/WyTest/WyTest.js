import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  Touchable,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  Animated,
  Button
} from 'react-native';

import { actionCreators } from './store'
//react-redux
import { connect } from "react-redux";
//路由
import { Actions } from "react-native-router-flux";
const { height, width } = Dimensions.get('window');
var ImagePicker = require('react-native-image-picker');
var options = {
  title: '请选择图片来源',
  cancelButtonTitle:'取消',
  takePhotoButtonTitle:'拍照',
  chooseFromLibraryButtonTitle:'相册图片',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};
class WyTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  choosePic =()=> {
    ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
      
       if (response.error) {
            alert("ImagePicker发生错误：" + response.error);
        }
        else if (response.customButton) {
            alert("自定义按钮点击：" + response.customButton);
        }
        else {
        console.log(response.uri)
        this.props._postImg(response.uri,response.fileName)
        }
    });
}
  render() {
  


  
    return(
      <View style={{flex:1}}>
      <TouchableOpacity onPress={()=>{this.choosePic()}} style={{width:width*0.5,height:50,backgroundColor:'blue'}}>
          <Text style={{lineHeight:50,alignSelf:'center'}}>确定</Text>
      </TouchableOpacity>
  </View>
    )
  }
}
const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
        _postImg(path,fileName){
          dispatch(actionCreators.postImg(path,fileName))
        }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WyTest)