import React, { Component } from 'react';
import { View, Text, YellowBox, StyleSheet } from 'react-native';
import {
    Router,
    Stack,
    Scene
} from "react-native-router-flux";

import App from "./App";
import Home from './app/components/Home/Home'
import ShangJia from './app/components/ShangJia/ShangJia'
import Order from './app/components/Order/Order'
import My from './app/components/My/My'
//react-redux
import { Provider } from "react-redux";
import store from './app/store'

export default class Main extends Component {
    constructor(props) {
        super(props);
        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
            'Warning: componentWillUpdate is deprecated',
            'Warning: ViewPagerAndroid has been extracted from react-native',
            // 'Warning: componentWillReceiveProps has been',
            'Warning: componentWillReceiveProps has been'

        ])
        this.state = {
        };
    }

    render() {
        return (
            <Provider style={styles.container} store={store}>
                <Router>
                    <Stack>
                        <Scene key='app' component={App} title='' hideNavBar={true} />
                        <Scene key='home' component={Home} title='' hideNavBar={true} />
                        <Scene key='shangjia' component={ShangJia} title='' hideNavBar={true} />
                        <Scene key='order' component={Order} title='' hideNavBar={true} />
                        <Scene key='my' component={My} title='' hideNavBar={true} />
                    </Stack>
                </Router>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})