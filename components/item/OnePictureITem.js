import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import {pxToDp} from '../../lib';
import {Layout} from '../../constants';

export default class extends Component {
    state = {}

    render() {
        const {item} = this.props;
        return (
            <TouchableHighlight
                underlayColor={"#f3f3f3"}
                style={{backgroundColor: "#ffffff"}}
                onPress={() => {

                }}
            >
                <View style={styles.item_view}>
                    <View style={styles.left}>
                        <Text numberOfLines={3} style={styles.title}>{item.title}</Text>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginTop: 5
                        }}>
                            <View><Text style={{fontSize: 11, color: "#a1a0a1"}}>{item.source_name}</Text></View>
                            <TouchableOpacity
                                style={{
                                    height: 13,
                                    width: 18,
                                    borderRadius: 5,
                                    backgroundColor: '#f9f9f9',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                onPress={() => {
                                }}
                            >
                                <Ionicons name={'ios-close'} size={12} color={"#c8c8c8"}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Image style={styles.image} resizeMode={'cover'}
                           source={{url: item.thumbnails[0].url}}/>
                </View>
            </TouchableHighlight>
        );
    }
}
const imageW = (Layout.window.width - 32) / 3;
const styles = StyleSheet.create({
    item_view: {
        paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15,
        flexDirection: 'row'

    },
    left: {
        flex: 1,
        flexShrink: 1,
        marginRight: 10
    },
    title: {
        fontSize: 16.5, lineHeight: 22, color: "#3b3b3b",
        minHeight: 66
    },
    image: {
        width: imageW,
        height: imageW / 1.35,
        borderRadius: 0,
        backgroundColor: "#f7f7f7"
    }
});