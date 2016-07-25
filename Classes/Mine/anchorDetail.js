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
    Dimensions,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import NavigationBar from 'react-native-navigationbar';
const ScreenRatio = Dimensions.get('window').width/375;
const ScreenWidth = Dimensions.get('window').width;

export default class AnchorDetail extends Component {
    render () {
        return (
            <View style = {{backgroundColor:'rgba(241,242,244,1)',flex:1}}>
                <NavigationBar
                    backHidden={false}
                    barTintColor='white'
                    barStyle={styles.navbar}
                    title='主播'
                    actionName='房号10086'
                    actionTextColor='black'
                    backFunc={() => {
                        this.props.navigator.pop()
                    }}/>
                <ScrollView>
                    {this.renderTopView()}
                    {this.renderMiddleView()}
                    {this.renderBottomView()}
                </ScrollView>
            </View>
        );
    }
    renderTopView () {
        return (
            <Image style={styles.topViewStyle} source = {require('../../Images/HotImages/hot_lunBo1.png')}/>
        );
    }
    renderMiddleView () {
        return (
            <View style={styles.middleViewStyle}>
                {/*房名&简介View*/}
                <View style={styles.DescViewStyle}>
                    <Text style = {styles.nameTextStyle}>房名</Text>
                    <TextInput style = {styles.textInputStyle}/>
                </View>
                <View style={styles.DescViewStyle}>
                    <Text style = {styles.nameTextStyle}>简介</Text>
                    <TextInput style = {styles.textInputStyle}/>
                </View>
                {/*直播、粉丝、获赞View*/}
                <View style = {{flexDirection:'row',flex:1,height:40}}>
                    <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text>直播</Text>
                    </View >
                    <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text>粉丝</Text>
                    </View>
                    <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text>获赞</Text>
                    </View>
                </View>
                {/*直播、粉丝、获赞NumView*/}
                <View style = {{flexDirection:'row',flex:1,height:40}}>
                    <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text>1</Text>
                    </View>
                    <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text>200</Text>
                    </View>
                    <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text>1000</Text>
                    </View>
                </View>
                {/*开始直播按钮*/}
                <View style = {{height:100,backgroundColor:'orange',width:ScreenWidth,alignItems:'center',justifyContent:'center'}}>
                    <View style = {{width:250,height:30,borderRadius:5,alignItems:'center',justifyContent:'center',backgroundColor:'red'}}>
                        <Text>开始直播</Text>
                    </View>

                </View>
            </View>
        );
    }
    renderBottomView () {
        return (
            <View style={styles.bottomViewStyle}>
                {this.renderView('今日收益','90.00$')}
                {this.renderView('当月收益','90.00$')}
                {this.renderView('未领收益','90.00$')}
                <View>
                    <Text>提现</Text>
                </View>
                <View>
                    <Text>如何提现</Text>
                    <Text>提现记录</Text>
                </View>
            </View>
        );
    }
    renderView (name,desc) {
        return (
            <View style = {styles.viewStyle}>
                <Text style = {styles.nameStyle}>{name}</Text>
                <View style = {styles.descViewStyle}>
                    <Text>{desc}</Text>
                </View>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    topViewStyle: {
        width:ScreenWidth,
        height:180*ScreenRatio,
        resizeMode:Image.resizeMode.stretch,
    },
    middleViewStyle: {
        width:ScreenWidth,
        flex:1,
        top:1,
        backgroundColor:'red'
    },

    DescViewStyle: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        height:40,
        backgroundColor:'gray'
    },
    nameTextStyle: {
        flex:1,
        fontSize:18,
        marginLeft:20,
        backgroundColor:'blue'
    },
    textInputStyle: {
        flex:3,
        left:20,
        marginRight:20,
        height:30,
        borderColor:'gray',
        borderWidth:1,
        backgroundColor:'orange'
    },
    bottomViewStyle: {
        flex:1,
        width:ScreenWidth,
        backgroundColor:'white'
    },

    viewStyle: {
        height:40,
        width:ScreenWidth,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'rgba(230,230,230,1)',
        marginBottom:0.5,
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




