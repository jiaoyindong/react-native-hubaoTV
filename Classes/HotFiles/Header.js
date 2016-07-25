/**
 * 首页推荐头Header create by jiaoyindong 
 * */

import React,{Component,PropTypes} from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

const ScreenFrame = Dimensions.get('window');
export default class Header extends Component {
    
    static propTypes = {
        headerImage : PropTypes.string,// 头视图的标示Image
        headerTitle : PropTypes.string.isRequired,// 头视图的标示Text
        headerTitleColor : PropTypes.string,// 头视图的标示TextColor
        headerClicked : PropTypes.func,// 头视图的点击事件
        tag : PropTypes.string,
    }
    constructor(props) {
        super(props)
        this.headerClicked = this.headerClicked.bind(this);
    }
    headerClicked () {
        if(this.props.headerClicked){
            this.props.headerClicked(this.props.tag);
        }
    }
    render() {
       
        return (
                <TouchableOpacity  onPress = {this.headerClicked}>
                    <View /*headerView*/style = {styles.header}>
                        <Image style = {styles.headerImage} source = {require('../../Images/HotImages/headerImage@2x.png')}/>
                        <Text style = {[styles.text,{color:this.props.headerTitleColor}]} >{this.props.headerTitle}</Text>
                        <Text style = {styles.moreText}>MORE ></Text>
                    </View>
                </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height:30,
        backgroundColor:'rgba(233,233,233,1)',
        flexDirection:'row',
        alignItems:'center',
    },
    headerImage: {
        marginLeft:20,
        width:20,
        height:20,
    },
    text: {
        left : 20,
        fontSize : 13,
    },
    moreText: {
        position: 'absolute',
        color:'black',
        fontSize : 15,
        right : 20,
        top:6,
    },
});

