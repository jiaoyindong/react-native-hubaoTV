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
    ActionSheetIOS,
    // CameraRoll,
} from 'react-native';
const ScreenRatio = Dimensions.get('window').width/375;
const ScreenWidth = Dimensions.get('window').width;
import NavigationBar from 'react-native-navigationbar';
import TaskDetail from './taskDetail'
import AnchorDetail from './anchorDetail'
import InfoDetail from './infoDetail'
import HistoryDetail from './historyDetail'
import CameraRollGallery from './CameraRoll'
var BUTTONS = [
    '拍照',
    '相册',
    'Cancel',
];
var CANCEL_INDEX = 2;

let fetchParams = {
    first:10,
    assetType:'Photos'
}

export default class Mine extends Component {
    componentWillUnmount() {
        Orientation.lockToPortrait();
    }
    render () {
        return (
            <View style={[styles.flex,{backgroundColor:'white'}]}>
                <NavigationBar
                    backHidden={true}// 返回按钮是否显示
                    title='我'// 标题
                    barTintColor="white"// 导航栏颜色
                    titleTextColor="black"// 标题颜色
                />
                <View style = {[{width:ScreenWidth,height:280*ScreenRatio,alignItems:'center',backgroundColor:'white'}]}>
                    <Image style = {styles.backImage} source = {require('../../Images/Mine/mine_top_back.png')}>
                        <TouchableOpacity onPress = {this.selectedAction.bind(this)}>
                            <View style = {[{marginLeft:(280-115)/2*ScreenRatio,marginTop:(280-115)/2*ScreenRatio,width:115*ScreenRatio,height:115*ScreenRatio,justifyContent:'center',alignItems:'center',backgroundColor:'red',borderRadius:(115/2)*ScreenRatio}]}>
                                <Image style = {{resizeMode:Image.resizeMode.contain}} source = {require('../../Images/VideoPlayer/live_dan.png')}/>
                            </View>
                        </TouchableOpacity>
                    </Image>

                    <TouchableOpacity style = {[styles.taskBtnStyle ,styles.publicStyle]} onPress = {this.toNextPage.bind(this,'task')}>
                        <View>
                            <Text style = {styles.topBtnTextStyle}>任务</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style = {[styles.anchorBtnStyle ,styles.publicStyle]} onPress = {this.toNextPage.bind(this,'anchor')}>
                        <View>
                            <Text style = {styles.topBtnTextStyle}>主播</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style = {[styles.infoBtnStyle ,styles.publicStyle]} onPress = {this.toNextPage.bind(this,'info')}>
                        <View>
                            <Text style = {styles.topBtnTextStyle}>资料</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style = {[styles.historyBtnStyle ,styles.publicStyle]} onPress = {this.toNextPage.bind(this,'history')}>
                        <View>
                            <Text style = {styles.topBtnTextStyle}>脚印</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View/*收益ImageView*/ style = {styles.incomeContainViewStyle}>
                    <View style = {styles.incomeXiaoCaoViewStyle}>
                        <Image style = {styles.incomeImgStyle} source = {require('../../Images/Mine/mine_xiaocao.png')}/>
                    </View>

                    <View style = {styles.incomeRouViewStyle}>
                        <Image style = {styles.incomeImgStyle} source = {require('../../Images/Mine/mine_rourou.png')}/>
                    </View>
                </View>
                <View /*收益NumView*/style = {[{height:40*ScreenRatio,backgroundColor:'white',flexDirection:'row',justifyContent:'center'}]}>
                    <Text style = {styles.incomeNumTextStyle}>0g</Text>
                    <Text style = {styles.incomeNumTextStyle}>20g</Text>
                </View>
            </View>
        );
    }
    // 头像替换的操作方式
    selectedAction () {
        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: BUTTONS,
                cancelButtonIndex : CANCEL_INDEX,
                title:'选择照片方式',
                tintColor:'orange'// option字体的颜色
            },
            (buttonIndex)=>{
                if(buttonIndex == 1){
                    // alert('相册');
                    this.props.navigator.push({
                        component:CameraRollGallery
                    })
                }else  {
                    alert('相机');
                }
            }
        )
    }


    toNextPage(pageName) {
        if(pageName == 'task'){
            this.props.navigator.push({
                component:TaskDetail
            })
        }else if (pageName == 'info'){
            this.props.navigator.push({
                component:InfoDetail
            })
        }else if (pageName == 'anchor'){
            this.props.navigator.push({
                component:AnchorDetail
            })
        }else {
            this.props.navigator.push({
                component:HistoryDetail
            })
        }
    }


}
const styles = StyleSheet.create({
    flex: {
        flex:1,
    },
    backImage:{
        height:280*ScreenRatio,
        width:280*ScreenRatio,
        // resizeMode: Image.resizeMode.stretch,
        overflow:"hidden"
    },
    publicStyle: {
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'orange',
    },
    taskBtnStyle: {
        marginLeft:70*ScreenRatio,
        top:20*ScreenRatio,
        width:50*ScreenRatio,
        height:50*ScreenRatio,
        borderRadius:25*ScreenRatio,
    },
    anchorBtnStyle: {
        marginLeft:30*ScreenRatio,
        top:160*ScreenRatio,
        width:60*ScreenRatio,
        height:60*ScreenRatio,
        borderRadius:30*ScreenRatio,
    },
    infoBtnStyle: {
        marginLeft:290*ScreenRatio,
        top:60*ScreenRatio,
        width:50*ScreenRatio,
        height:50*ScreenRatio,
        borderRadius:25*ScreenRatio,
    },
    historyBtnStyle: {
        marginLeft:270*ScreenRatio,
        top:180*ScreenRatio,
        width:60*ScreenRatio,
        height:60*ScreenRatio,
        borderRadius:30*ScreenRatio,

    },
    topBtnTextStyle: {
        fontSize:15,
        color:'white'
    },
    incomeContainViewStyle: {
        height:40*ScreenRatio,
        backgroundColor:'blue',
        flexDirection:'row',
        marginTop:40*ScreenRatio
    },
    incomeXiaoCaoViewStyle: {
        flex:1,
        backgroundColor:'white',
        borderRightWidth:1,
        alignItems:'center',
        justifyContent:'center'
    },
    incomeRouViewStyle: {
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },

    incomeImgStyle: {
        height:30*ScreenRatio,
        width:30*ScreenRatio
    },
    incomeNumTextStyle: {
        flex:1,
        marginTop:20,
        textAlign:'center',
        fontSize:16,
        backgroundColor:'white',
        color:'gray'
    }



});




