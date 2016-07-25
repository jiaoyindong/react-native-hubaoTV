/**
 *  首页--我---topView create by jiaoyindong 0706
 * */

import React , {Component,PropTypes} from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export default class MenuButton extends Component {

    static propTypes = {
        viewStyle : View.propTypes.style,
        buttonText : PropTypes.string,
        buttonFont : PropTypes.number,
        tag : PropTypes.string,
        
    }
    constructor (props) {
        super(props)
        this.menuButtonClicked = this.menuButtonClicked.bind(this)
    }
    menuButtonClicked () {
        if (this.props.menuButtonClicked) {
            this.props.menuButtonClicked(this.props.tag);
        }
    }


    render () {
        return (
            <TouchableOpacity  onPress = {this.menuButtonClicked}>
                <View /*headerView*/style = {this.props.viewStyle}>
                    <Text style = {[styles.text,{fontSize:this.props.buttonFont}]} >{this.props.buttonText}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}




















