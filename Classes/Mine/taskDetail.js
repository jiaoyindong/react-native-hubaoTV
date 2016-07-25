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
    ListView
} from 'react-native';
import NavigationBar from 'react-native-navigationbar';
const ScreenRatio = Dimensions.get('window').width/375;
const ScreenWidth = Dimensions.get('window').width;
var dataSource = [
    {"title1":'登陆即送',"title2":'很高兴认识你'},
    {"title1":'设置头像',"title2":'让大家看看你'},
    {"title1":'观看三位主播',"title2":'快去围观吧'},
    {"title1":'关注5位主播',"title2":'喜欢他/她就粉一下'},
    {"title1":'绑定手机号',"title2":'绑定手机号就有300g小草'},
    {"title1":'完成全部任务',"title2":'额外获得200g小草'},
];
export default class TaskDetail extends Component {
    constructor(props) {
        super(props)
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !==r2});
        this.state = {
             dataSource:ds.cloneWithRows(dataSource)

        }
    }
    render () {

        return (
            <View style = {{backgroundColor:'white',flex:1}}>
                <NavigationBar
                    backHidden={false}
                    barTintColor='white'
                    barStyle={styles.navbar}
                    title='任务'
                    // actionName='About'
                    backFunc={() => {
                        this.props.navigator.pop()
                    }}/>
                <ListView
                    dataSource = {this.state.dataSource}
                    renderRow = {this.renderRows.bind(this)}
                    style = {styles.listView}
                 />
            </View>
        );
    }
    renderRows(data) {

        return (
            <View style = {styles.cellViewStyle}>
                <Image style = {styles.leftImgStyle} source = {require('../../Images/Mine/mine_xiaocao.png')}></Image>
                <View style = {styles.centerViewStyle}>
                    <Text style = {styles.taskNameStyle}>{data.title1}</Text>
                    <Text style = {styles.taskDescStyle}>{data.title2}</Text>
                </View>
                <TouchableOpacity>
                    <View style = {styles.sureBtnStyle}>
                        <Text >确定</Text>
                    </View>
                </TouchableOpacity>

            </View>

        );
    }
}
const styles = StyleSheet.create({
    cellViewStyle: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
        marginBottom:5,
        paddingBottom:10,
        borderBottomWidth:2,
        borderBottomColor:'rgba(217,217,217,1)'

    },
    leftImgStyle: {
        height:25,
        width:25,
        marginLeft:25,
        // backgroundColor:'orange'
    },
    centerViewStyle: {
        // backgroundColor:'red',
        marginLeft:10,
        width:150,
        // flex:0.3,
        marginRight:70,
    },
    taskNameStyle: {
        fontSize:15,
        color:'black',
    },
    taskDescStyle: {
        fontSize:13,
        color:'gray',
    },
    sureBtnStyle: {
        marginLeft:10,
        height:25,
        width:40,
        backgroundColor:'orange',
        borderRadius:3,
        justifyContent:'center',
        alignItems:'center',
        marginRight:20,


    },
});




