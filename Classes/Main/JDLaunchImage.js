/**
 * Created by admin on 16/7/19.
 */
/**
 * Android---启动图   create by jiaoyindong
 * */

import React ,{Component}from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
} from 'react-native';

import TabBar from '../TabBar/TabBar';
export default class JDLaunchImage extends Component {
    componentDidMount(){
        // 定时: 隔2s切换到TabBar
        setTimeout(()=>{
            // 页面的切换
            this.props.navigator.replace({
                component:TabBar,
            });
        },2000);
    }
    render () {
        return (
           <Image source = {{uri:'launchimage'}} style = {styles.launchImageStyle}/>
        );
    }

}
const styles = StyleSheet.create({

    launchImageStyle:{
        flex:1,
    },


});




