/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,  
} from 'react-native';

import JDLaunchImage from './Classes/Main/JDLaunchImage';

class HuBaoTV extends Component {
    render() {
        return (
            <Navigator
                initialRoute = {{component:JDLaunchImage}}
                renderScene = {
                    (route,navigator)=>{
                        let Component = route.component;
                        return <Component {...route.params} navigator={navigator} />
                }
            }
    />
        );
    }
}
const styles = StyleSheet.create({

});

AppRegistry.registerComponent('HuBaoTV', () => HuBaoTV);
