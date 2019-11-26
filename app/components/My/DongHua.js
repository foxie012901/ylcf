import React, { Component } from 'react';
import {
  View, 
  Text,
  Animated,
  Easing,
  transform,
  TouchableOpacity
} from 'react-native';
import styles from './style'
export default class DongHua extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translateValue: new Animated.Value(1)
    };
  }
  _onPress = () => {
    Animated.timing(
      this.state.translateValue,
      {
        toValue: 0,
        easing: Easing.linear,
        duration: 100
      }
    ).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={
            [styles.viewStyle,
            {
              transform: [
                {
                  translateY: this.state.translateValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [100, 0]
                  })
                }
              ]
            }
            ]
          }
        >
        </Animated.View>

        <TouchableOpacity style={styles.btnContainerStyle} onPress={this._onPress}>
          <Text style={{ color: '#FFFFFF' }}>触发动画</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
