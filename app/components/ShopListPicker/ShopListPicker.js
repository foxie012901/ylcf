import React, { Component } from 'react';
import {StyleSheet, View, Text,Picker,Dimensions,TextInput , PixelRatio,TouchableHighlight,Animated,Modal} from 'react-native';
import { actionCreators } from "./store";
import {actionCreators as shangJiaListActionCreators} from "../ShangjiaList/store";
import { connect } from "react-redux";
import {
  Surface, //  一个矩形可渲染的区域，是其他元素的容器
  Shape, // 形状定义，可填充
  Path, // 路径
  Group, // 可容纳多个形状、文本和其他的分组
  LinearGradient, // 渐变色
  Pattern, // 填充图片
  ClippingRectangle, // 剪辑
} from '@react-native-community/art'
import { FlatList } from 'react-native-gesture-handler';

const mWidth = Dimensions.get('window').width;
const mHeight = Dimensions.get('window').height;
const T_WIDTH = 10;
const T_HEIGHT = 6;

const COLOR_HIGH = '#00bea9';
const COLOR_NORMAL = '#6c6c6c';
const LINE = 1 / PixelRatio.get();
const se = new Path().moveTo(T_WIDTH/3,T_HEIGHT/3).lineTo(T_WIDTH/2, T_HEIGHT/2).lineTo(T_WIDTH,0 );
 class ShopListPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
   
    };
  }
  _renderDataList (item){
      console.log(item.item,item.index);
      let selectItemTextStyle={lineHeight:mHeight*0.0625,fontSize:12};
      if(item.index===this.props.isSelectIndex){
        selectItemTextStyle={lineHeight:mHeight*0.0625,fontSize:17};
      }
    return  (
      <TouchableHighlight onPress={()=>{this.props._changeIsSelectData(item.index,item.item,false)}}>
      <View style={styles.selectItem}><Text style={selectItemTextStyle}>{item.item}</Text>
         {this.props.isSelectIndex===item.index? <View style={{paddingRight:20,paddingTop:2}}>
            <Surface  width={T_WIDTH} height={T_HEIGHT}>
              <Shape d={se} stroke="#000000" strokeWidth={1}/>
            </Surface>
          </View>:null}
    </View>
    </TouchableHighlight>
)
  }
  render() {
    let path;
    let fill;
    let {isSelect,dataList,isSelectIndex,isSelectItemName,_changeIsSelect,_changeIsSelectData,_changeShangJiaListViewStyle}=this.props
    console.log(this.props)
    if (isSelect) {
        fill = COLOR_HIGH;
        path = new Path()
            .moveTo(0,T_HEIGHT)
            .lineTo(T_WIDTH/2,0)
            .lineTo(T_WIDTH,T_HEIGHT)
            
    } else {
       fill = COLOR_NORMAL;
        path = new Path()
          .moveTo(0,0)
          .lineTo(T_WIDTH/2, T_HEIGHT/2 )
          .lineTo(T_WIDTH,0 )        
    }
    return (
      <View>
       
        <View style={styles.isSelectRow}>
      <TouchableHighlight onPress={()=>{this.props._changeIsSelect(this.props.isSelect),this.props._changeShangJiaListViewStyle}}>
      <View style={styles.isSelectItemName}><View><Text style={{fontSize:12,lineHeight:mHeight*0.07}}>{this.props.isSelectItemName}</Text></View>
      <Surface style={{marginLeft:5,marginTop:20}} width={T_WIDTH} height={T_HEIGHT}>
                <Shape d={path} stroke="#000000" strokeWidth={1}/>
            </Surface>
      </View>
      </TouchableHighlight>
      <TextInput
        placeholder={'🔍门店名称'}
        placeholderTextColor={'rgb( 154 154 154)'}
        style={styles.inputText}
        keyboardType='numeric'/>
        </View>
      {this.props.isSelect?
      
      <FlatList style={{width:mWidth,height:mHeight*0.25,backgroundColor:'#ffffff', position:'absolute',top:mHeight*0.07,zIndex:99}} data={this.props.dataList.toJS()} renderItem={this._renderDataList.bind(this)}></FlatList>
       
   
      :null}
    
  
      </View>
    );
  }
}
const mapStateToProps = state => {
  console.log(state)
  return {
    isSelect:state.getIn(['shoplistpicker','isSelect']),
    dataList:state.getIn(['shoplistpicker','dataList']),
    isSelectIndex:state.getIn(['shoplistpicker','isSelectIndex']),
    isSelectItemName:state.getIn(['shoplistpicker','isSelectItemName'])
  }
}
const mapDispatchToProps = dispatch => {
  return {
     _changeIsSelect(isSelect){
      let style= {};
      
       if(isSelect){
        style={backgroundColor:'rgba(244,244,244,0)'};
         dispatch(actionCreators.changeIsSelect(false));
         dispatch(shangJiaListActionCreators.changeShangJiaListViewStyle(style));
       }else{
        style={backgroundColor:'rgba(244,244,244,0.8)'};
        dispatch(actionCreators.changeIsSelect(true));
        dispatch(shangJiaListActionCreators.changeShangJiaListViewStyle(style));
       }
     },
     _changeIsSelectData(index,name,isSelect){
      let style= {backgroundColor:'rgba(244,244,244,0)'};
       dispatch(actionCreators.changeIsSelectData(index,name,isSelect));
       dispatch(shangJiaListActionCreators.changeShangJiaListViewStyle(style));

     },
     _changeShangJiaListViewStyle(){
  
      
     }
  }
}

const styles = StyleSheet.create({
  picker:{  
    justifyContent:'center',   
  },  
  itempicker:{  
    color:'#e6454a',  
    fontSize:3,  
    height:161,
    
  },
  inputText:{
    width: "60%",
    height: 35,
    lineHeight:35,
    textAlign:'justify',
    backgroundColor: "#cccc",
    fontSize: 11,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius:18,
    alignSelf:'center',
    alignContent:'center',
    marginLeft:17
  },
  isSelectItemName:{
    flexDirection:'row',height:mHeight*0.07,alignSelf:'center',alignContent:'center',marginLeft:20
  },
  isSelectRow:{
    flexDirection:'row',backgroundColor:'#ffffff',width:mWidth,height:mHeight*0.07,
  },
  selectItem:{
    flexDirection:'row',justifyContent:'space-between',width:mWidth*0.92,height:mHeight*0.0625,borderBottomWidth:1,alignSelf:'center',borderBottomColor:'#e5e5e5',backgroundColor:'#ffffff',
    
   
  }  
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopListPicker)
