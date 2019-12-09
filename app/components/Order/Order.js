import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    Animated,
    Easing,
    Linking,
    Alert
} from 'react-native';
import { RNCamera } from 'react-native-camera'
import LocalBarcodeRecognizer from '../../androidModules/LocalBarcodeRecognizer';
import {readerQR} from 'react-native-lewin-qrcode'
import AlertPro from "react-native-alert-pro";

//图片选择器
var ImagePicker = require('react-native-image-picker');
//图片选择器参数设置
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
class ScanScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        alert("123123")
    }

  
    //  识别二维码
    onBarCodeRead = (result) => {
        alert(result.data)
    };
    choosePic() {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
           if (response.error) {
                alert("ImagePicker发生错误：" + response.error);
            }
            else if (response.customButton) {
                alert("自定义按钮点击：" + response.customButton);
            }
            else {
                if(Platform.OS==="android"){
                this.recoginze(response.data);
                }else{
                    console.log(response)
                    readerQR(response.uri).then((data)=>{
                        console.log('二维码结果',data)
                        alert('识别结果'+data);
                    }).catch((err)=>{
                        alert('识别失败');
                        Alert.alert()
                    });
                }
            }
        });
    }
   
    
    recoginze = async (e)=>{
        // Here is the demoe
         let result = await LocalBarcodeRecognizer.decode(e,{codeTypes:['codabar','qr']});
         alert(result)
    }  
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.item} onPress={this.choosePic.bind(this)}>相册</Text>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    onBarCodeRead={this.onBarCodeRead}
                >
                    <View style={styles.rectangleContainer}>
                        <View style={styles.rectangle}/>
                        
                        <Text style={styles.rectangleText}>将二维码放入框内，即可自动扫描</Text>
                    </View>
                    </RNCamera>
            </View>
        );
    }
}

export default ScanScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    rectangleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    rectangle: {
        height: 200,
        width: 200,
        borderWidth: 1,
        borderColor: '#00FF00',
        backgroundColor: 'transparent'
    },
    rectangleText: {
        flex: 0,
        color: '#fff',
        marginTop: 10
    },
    border: {
        flex: 0,
        width: 200,
        height: 2,
        backgroundColor: '#00FF00',
    } , 
    item:{
       
        height:30,
        width:50,
        borderWidth:1,
        padding:6,
        borderColor:'#ddd',
        textAlign:'center'
      },
});