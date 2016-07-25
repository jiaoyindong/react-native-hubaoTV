'use strict';
import React, {
    Component
} from 'react';

import {
    Alert,
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    Dimensions,
    ActionSheetIOS,
} from 'react-native';
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
import Video from 'react-native-video';
import TabNavigator from 'react-native-tab-navigator';

import Orientation from 'react-native-orientation';
const  USER_MODLES = {
    1:{name:'焦胤栋',age:23},
    2:{name:'常艳楠',age:24},
};
var BUTTONS = [
    '暴力因素',
    '色情因素',
    '作弊交易',
    '看着不爽',
    'Cancel',
];
var CANCEL_INDEX = 4;
var alertMessage = '要切换弹幕和字幕?';
export default class HengVideoPlayer extends Component {

//http://0.s3.envato.com/h264-video-previews/80fad324-9db4-11e3-bf3d-0050569255a8/490527.mp4
    // 构造函数
    componentDidMount () {

        Orientation.lockToLandscapeLeft();
    }
    componentWillUnmount() {
        Orientation.lockToPortrait();
    }
    constructor(props) {
        super(props);
        this.onLoad = this.onLoad.bind(this);
        this.onProgress = this.onProgress.bind(this);
    }
    state = {
        rate: 1,
        volume: 1,
        muted: false,
        resizeMode: 'contain',
        duration: 0.0,
        currentTime: 0.0,// 当前时间
        controls: false,
        paused: true,// 初始是暂停状态
        skin: 'custom',// 默认播放资源是自定义的
        rotation:0,
        danOrZiButton:true,
        normalOrSel:true,
    };
    // onProgress(回调函数)load 总时长,回调值data
    onLoad(data) {
        console.log('data:'+data,'data.duration:'+data.duration);
        this.setState({duration: data.duration});
    }
    // onProgress(回调函数)赋值当前播放的时间,回调值data
    onProgress(data) {
        console.log('data:'+data,'data.currentTime:'+data.currentTime);
        this.setState({currentTime: data.currentTime,rotation:data.currenTime*20});
    }
    render() {
        // this.state.controls 如果为真,执行this.renderNativeSkin ,为假,则执行renderCustomSkin
        return  this.renderCustomSkin();
    }
    renderCustomSkin() {
        // 完成的部分
        const flexCompleted = this.getCurrentTimePercentage() * 100;
        // 剩下的部分
        const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;

        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.fullScreen} onPress={() => {this.setState({paused : !this.state.paused})}}>
                    <Video
                        source={{uri: "http://0.s3.envato.com/h264-video-previews/80fad324-9db4-11e3-bf3d-0050569255a8/490527.mp4"}}
                        style={styles.fullScreen}
                        rate={this.state.rate}
                        paused={this.state.paused}
                        volume={this.state.volume}
                        muted={this.state.muted}
                        resizeMode={this.state.resizeMode}
                        onLoad={this.onLoad}
                        onProgress={this.onProgress}
                        onEnd={() => { Alert.alert('Done!') }}
                        repeat={true}
                        rotation = {this.state.rotation}
                    />
                </TouchableOpacity>
                {/* 上遮罩View */}
                <View style = {styles.topViewStyle}>

                    <View style = {styles.topBackViewStyle}>
                        {this.renderBackbuttonControl()}
                    </View>
                    <View style = {styles.topRightViewStyle}>
                        {this.renderTopRightControl(0)}
                        {this.renderTopRightControl(1)}
                        {this.renderTopRightControl(2)}
                        {this.renderTopRightControl(3)}
                    </View>
                </View>
                <View style={styles.controls}>
                    {/*
                     <View style={styles.generalControls}>
                     <View style={styles.skinControl}>
                     {this.renderSkinControl('custom')}
                     {this.renderSkinControl('native')}
                     {this.renderSkinControl('embed')}
                     </View>
                     </View>
                     */}

                    <View style={styles.generalControls}>
                        <View style={styles.rateControl}>
                            {this.renderRateControl(0.5)}
                            {this.renderRateControl(1.0)}
                            {this.renderRateControl(2.0)}
                        </View>
                        {/*
                         <View style={styles.volumeControl}>
                         {this.renderVolumeControl(0.5)}
                         {this.renderVolumeControl(1)}
                         {this.renderVolumeControl(1.5)}
                         </View>
                         */}

                        <View style={styles.resizeModeControl}>
                            {this.renderResizeModeControl('cover')}
                            {this.renderResizeModeControl('contain')}
                            {this.renderResizeModeControl('stretch')}
                        </View>
                    </View>

                    {/* 进度条 */}
                    <View style={styles.progressStyle}>
                        <View style={[styles.innerProgressCompleted, {flex: flexCompleted}]} /* 根据flex比例来显示进度条 */ />
                        <View style={[styles.innerProgressRemaining, {flex: flexRemaining}]} />
                    </View>
                </View>
                {/* 社交四个按钮 */}
                <View style = {styles.socialHubViewStyle}>
                    {this.renderSocialHubControl('0')}
                    {this.renderSocialHubControl('1')}
                    {this.renderSocialHubControl('2')}
                    {this.renderSocialHubControl('3')}
                </View>
                {/*悬浮在屏幕右中的礼物按钮*/}
                <View style = {{backgroundColor:'transparent',position:'absolute',top:ScreenHeight/2-20,right:4,height:40,width:40,flex:1}}>
                    <TouchableOpacity>
                        <Image source = {require('../../Images/VideoPlayer/xiaocao_normal@2x.png') } style = {{width:40,height:40,resizeMode:Image.resizeMode.contain,}}/>
                    </TouchableOpacity>
                </View>


            </View>
        );
    }
    // 获取当前播放的比例: 当前播放时间 / 总时长
    getCurrentTimePercentage() {
        if (this.state.currentTime > 0) {
            // 经过判断 有没有 parseFloat 都无所谓
            // parseFloat(string) 函数可解析一个字符串,并返回一个浮点数, 如果可以转就转,不能转,则转化为NaN
            return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
        } else {
            return 0;
        }
    }
    showClickedSocialHubId (id) {
        if(id == 0) {
            alert('点击了qq');
        }else if (id == 1) {
            alert('点击了sina');

        }else if (id == 2) {
            alert('点击了weixin');
        }else {
            alert('点击了friend');
        }
    }
    
    // 渲染播放速度:0.5x / 1x / 2x
    renderRateControl(rate) {
        const isSelected = (this.state.rate == rate);

        return (
            <TouchableOpacity onPress={() => { this.setState({rate: rate}) }}>
                {/*style = {style.controlOptionStyle}*/}
                <Text style={[styles.rateStyle,{fontWeight: isSelected ? "bold" : "normal"}]}>
                    快进:{rate}x
                </Text>
            </TouchableOpacity>
        )
    }
    // 渲染视频样式: cover / contaiin / stretch
    renderResizeModeControl(resizeMode) {
        const isSelected = (this.state.resizeMode == resizeMode);

        return (
            <TouchableOpacity onPress={() => { this.setState({resizeMode: resizeMode}) }}>
                <Text style={[styles.controlOptionStyle, {fontWeight: isSelected ? "bold" : "normal"}]}>
                    {resizeMode}
                </Text>
            </TouchableOpacity>
        )
    }
    // 渲染声音样式: 50% / 100% / 150%
    renderVolumeControl(volume) {
        const isSelected = (this.state.volume == volume);
        return (
            <TouchableOpacity onPress={() => { this.setState({volume: volume}) }}>
                <Text style={[styles.controlOptionStyle, {fontWeight: isSelected ? "bold" : "normal"}]}>
                    {volume * 100}%
                </Text>
            </TouchableOpacity>
        )
    }
    renderSocialHubControl (id) {
        var images = [
            require('../../Images/VideoPlayer/qq.png'),
            require('../../Images/VideoPlayer/sina.png'),
            require('../../Images/VideoPlayer/weixin.png'),
            require('../../Images/VideoPlayer/friend.png'),
        ];
        return (
            <TouchableOpacity onPress = {Orientation.lockToLandscapeLeft}>
                <Image style = {styles.socialHubImageStyle} source = {images[id]}/>
            </TouchableOpacity>
        );
    }
    renderBackbuttonControl () {

        return (
            <TouchableOpacity onPress = {this.backAction.bind(this)}>
                <View style = {styles.backbuttonViewlStyle}>
                    <Image style = {styles.backbuttonImagelStyle} source = {require('../../Images/VideoPlayer/live_back.png')}/>
                </View>
            </TouchableOpacity>
        );
    }
    backAction () {
        // this.props.getUser({name:'焦胤栋',age:23});
        this.props.navigator.pop();
    }
    renderTopRightControl (id) {
        if(this.state.danOrZiButton){
            var images = [
                require('../../Images/VideoPlayer/live_jubao.png'),
                require('../../Images/VideoPlayer/live_paihangbang.png'),
                require('../../Images/VideoPlayer/live_dan.png'),
                require('../../Images/VideoPlayer/live_luo.png'),
            ];
        }else {
            var images = [
                require('../../Images/VideoPlayer/live_jubao.png'),
                require('../../Images/VideoPlayer/live_paihangbang.png'),
                require('../../Images/VideoPlayer/live_closeDan.png'),
                require('../../Images/VideoPlayer/live_luo.png'),
            ];}

        return (
            <TouchableOpacity onPress = {this.showClickedTopRightId.bind(this,id)}>
                <View style = {styles.topItemViewStyle}>
                    <Image style = {styles.topItemImageStyle} source = {images[id]}/>
                </View>
            </TouchableOpacity>
        );
    }
    showClickedTopRightId (id) {
        if(id == 0) {//举报按钮的点击
            ActionSheetIOS.showActionSheetWithOptions(
                {
                    options: BUTTONS,
                    cancelButtonIndex : CANCEL_INDEX,
                    title:'举报',
                    message:'选择举报的类型',
                    tintColor:'orange'// option字体的颜色
                },
                (buttonIndex)=>{
                    if(buttonIndex<4){
                        alert(BUTTONS[buttonIndex]+buttonIndex);
                    }
                }
            )
        }else if (id == 1) {// 分享按钮的点击

            ActionSheetIOS.showShareActionSheetWithOptions({
                    url: this.props.url,
                    message: 'message to go with the shared url',
                    subject: 'a subject to go in the email heading',
                    excludedActivityTypes: [
                        'com.apple.UIKit.activity.PostToTwitter'
                    ]
                },
                (error) => alert(error),
                (success, method) => {
                    var text;
                    if (success) {
                        text = `Shared via ${method}`;
                    } else {
                        text = 'You didn\'t share';
                    }
                    alert(text);
                });
        }else if (id == 2) { // 弹幕字母按钮点击
            Alert.alert(
                'Alert Title',
                alertMessage,
                [
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                    {text: 'OK', onPress: () => {
                        if(this.state.danOrZiButton){
                            this.setState({danOrZiButton:false})
                        }else {
                            this.setState({danOrZiButton:true})
                        }

                    }},
                ]
            )
        }else {
            Orientation.lockToPortrait();
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    fullScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    controls: {
        backgroundColor: "transparent",
        borderRadius: 5,
        position: 'absolute',
        bottom: 80,
        left: 4,
        right: 4,
    },
    progressStyle: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 3,
        overflow: 'hidden',
    },
    innerProgressCompleted: {
        height: 5,
        backgroundColor: 'gray',
    },
    innerProgressRemaining: {
        height: 5,
        backgroundColor: 'white',
    },
    generalControls: {
        flex: 1,
        flexDirection: 'row',
        overflow: 'hidden',
        paddingBottom: 10,
    },
    skinControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    rateControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    volumeControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    resizeModeControl: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    controlOptionStyle: {
        alignSelf: 'center',
        fontSize: 11,
        color: "white",
        paddingLeft: 2,
        paddingRight: 2,
        lineHeight: 12,
    },
    nativeVideoControls: {
        top: 184,
        height: 300
    },
    rateStyle:{
        alignSelf: 'center',
        fontSize: 11,
        color: "white",
        paddingLeft: 0,
        paddingRight: 2,
        lineHeight: 12,backgroundColor:'transparent',

    },
    socialHubImageStyle: {
        width:26,
        height:26,
        marginRight:5,
        right:0,
        borderRadius:13
    },
    backbuttonImagelStyle: {
        width:9,
        height:15,
        resizeMode:Image.resizeMode.contain
    },
    backbuttonViewlStyle: {
        width:35,
        height:35,
        marginLeft:5,
        right:0,
        alignItems:'center',
        justifyContent:'center'
    },
    topItemViewStyle: {
        width:35,
        height:35,
        marginLeft:5,
        right:0,
        alignItems:'center',
        justifyContent:'center'
    },
    topItemImageStyle: {
        width:20,
        height:20,
        resizeMode:Image.resizeMode.contain
    },
    topViewStyle: {
        position:'absolute',
        backgroundColor:'black',
        top:20,
        height:40,
        left:0,
        right:0,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    topBackViewStyle: {
        backgroundColor:'transparent',
        height:40,
        flex:0.25
    },
    topRightViewStyle: {
        backgroundColor:'transparent',
        flex:0.75,
        height:40,
        right:0,
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    socialHubViewStyle: {
        backgroundColor:'transparent',
        position:'absolute',
        bottom:10,
        right:4,
        height:40,
        width:ScreenWidth/2,
        flexDirection:'row',
        justifyContent:'flex-end'
    },

});

