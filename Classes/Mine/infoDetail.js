/**
 * Created by admin on 16/7/21.
 */
/**
 * Created by admin on 16/7/21.
 */
/**
 * 首页--我的   create by jiaoyindong
 * */

import React ,{Component}from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    Navigator,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import NavigationBar from 'react-native-navigationbar';
const ScreenRatio = Dimensions.get('window').width/375;
const ScreenWidth = Dimensions.get('window').width;
var imageAry = [
    require('../../Images/Mine/mine_xiaocao.png'),
    require('../../Images/Mine/mine_xiaocao.png'),
    require('../../Images/Mine/mine_xiaocao.png'),
];
export default class InfoDetail extends Component {
    render () {
        return (
            <View style = {{backgroundColor:'white',flex:1}}>
                <NavigationBar
                    backHidden={false}
                    barTintColor='white'
                    barStyle={styles.navbar}
                    title='个人信息'
                    // actionName='About'
                    backFunc={() => {
                        this.props.navigator.pop()
                    }}/>
                {this.renderView(imageAry[0],'昵称:','hello')}
                {this.renderView(imageAry[1],'性别:','男')}
                {this.renderView(imageAry[2],'生日:','03/30')}

            </View>
        );
    }
    renderView (image,name,desc) {
        return (
            <View style = {styles.viewStyle}>
                <Image source = {image} style = {styles.imageStyle}/>
                <Text style = {styles.nameStyle}>{name}</Text>
                <View style = {styles.descViewStyle}>
                    <Text>{desc}</Text>
                </View>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    viewStyle: {
        height:40,
        width:ScreenWidth,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'rgba(230,230,230,1)',
        marginBottom:0.5,
    },
    imageStyle: {
        width:25,
        height:25,
        marginLeft:15,
    },
    nameStyle: {
        marginLeft:10,
    },
    descViewStyle:{
        position:'absolute',
        height:40,
        right:10,
        width:80,
        justifyContent:'center',
        alignItems:'flex-end',
    },
});




