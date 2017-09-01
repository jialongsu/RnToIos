'use strict';

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

class HelloWorld extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.hello}>Hello, World</Text>
                <Text style={styles.hello}>尼玛的,终于好了---ios</Text>
            </View>
    )
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    hello: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

AppRegistry.registerComponent('MyReactNativeApp', () => HelloWorld);