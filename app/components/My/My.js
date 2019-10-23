import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';



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

    // const path = new Path();
    // path.moveTo(0, 0)
    // .lineTo(width, 0)
    // .lineTo(width,200)
    // // .lineTo(0,200)
    // .arc(-width,0,500)
    // .lineTo(0,0)
    // .close()

    return (
      <View>
        <Text> this is my </Text>
        
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