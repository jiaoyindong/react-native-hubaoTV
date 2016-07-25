/**
 * 首页推荐分类Item create by jiaoyindong
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

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const ScreenRatio = Dimensions.get('window').width/375;
export default class Items extends Component {

    static propTypes = {
        ImageItemClicked : PropTypes.func,
        descText : PropTypes.string,
        onlineNum : PropTypes.string,
        tag : PropTypes.string,
        image : PropTypes.number.isRequired,
    }

    constructor(props) {
        super(props)
        this.ImageItemClicked = this.ImageItemClicked.bind(this);
    }
    ImageItemClicked () {
        if(this.props.ImageItemClicked){
            this.props.ImageItemClicked(this.props.tag);
        }
    }
    render() {

        return (
            <TouchableOpacity  onPress = {this.ImageItemClicked}>
                <View style = {styles.itemViewStyle} >
                    <Image style = {styles.itemImageStyle} source = {this.props.image}>
                        <View  style={styles.bottomViewStyle}>
                            <Text numberOfLines = {1} style = {styles.leftTextStyle}>{this.props.descText}</Text>
                            <Text numberOfLines = {1} style = {styles.rightTextStyle}>{this.props.onlineNum}</Text>
                        </View>
                    </Image>
                </View>

            </TouchableOpacity>
        );
    }
}



const styles = StyleSheet.create({
    itemViewStyle: {
        marginTop:5,
        marginBottom:2.5,
        marginLeft:10,
        width:(ScreenWidth-30)/2,
        height:100*ScreenRatio,
    },
    itemImageStyle: {
        width:(ScreenWidth-30)/2,
        height:100*ScreenRatio,
        borderRadius:10,
    },
    bottomViewStyle:{
        flexDirection:'row',
        position:'absolute',
        bottom:0,
        flex:1,
        height:20,
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.7)',
        width:(ScreenWidth-30)/2
    },
    leftTextStyle: {
        marginLeft:5,
        width:100*ScreenRatio,
        color:'white',
        fontSize:12
    },
    rightTextStyle: {
        flex:1,
        marginLeft:0,
        color:'orange',
        fontSize:12,
        textAlign:'right',
        marginRight:5
    },
});

