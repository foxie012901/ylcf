import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import {
  Surface, //  一个矩形可渲染的区域，是其他元素的容器
  Shape, // 形状定义，可填充
  Path, // 路径
  Group, // 可容纳多个形状、文本和其他的分组
  LinearGradient, // 渐变色
  Pattern, // 填充图片
  ClippingRectangle, // 剪辑
} from '@react-native-community/art'

export default class My extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }

  render() {
    const { height, width } = Dimensions.get('window');

    const path = new Path();
    path.moveTo(0, 0)
      .lineTo(width, 0)
      .lineTo(width, 200)
      // .lineTo(0,200)
      .arc(-width, 0, 500)
      .lineTo(0, 0)
      .close()

    return (
      <View>
        <Text> this is my </Text>
        <Surface width={width} height={300}
          style={styles.conART}
        >
          <Shape d={path} stroke="#f00" strokeWidth={1}
            visible={true} opacity={1.0} fill="#00f" />
        </Surface>
        <Text>this is my</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conART: {
    backgroundColor: 'lightblue'
  }
})