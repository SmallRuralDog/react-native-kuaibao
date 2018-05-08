import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import { Layout } from '../../constants';
import { Image } from "react-native-expo-image-cache";

export default class ThreepictureItem extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { item } = this.props;
        const { navigate } = this.props.navigation;
        const preview = require("../../assets/images/default_young_logo.jpg");
        return (<TouchableHighlight
            underlayColor={"#f3f3f3"}
            activeOpacity={1}
            style={{ backgroundColor: "#ffffff" }}
            onPress={() => {
                navigate('NewsArticle', { item: item })
            }}
        >
            <View style={{ paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15 }}>
                <Text numberOfLines={3} style={{ fontSize: 16.8, lineHeight: 24, color: "#333333" }}>{item.title}</Text>
                <View style={{ flex: 1, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Image style={styles.image} resizeMode={'cover'}
                           uri={item.thumbnails[0].url} defaultSource={preview} />
                    <Image style={styles.image} resizeMode={'cover'}
                           uri={item.thumbnails[1].url} defaultSource={preview} />
                    <Image style={styles.image} resizeMode='cover'
                           uri={item.thumbnails[2].url} defaultSource={preview} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 10
                }}>
                    <View><Text style={{ fontSize: 11, color: "#a1a0a1" }}>{item.source_name}</Text></View>
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
                        <Ionicons name={'ios-close'} size={12} color={"#c8c8c8"} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableHighlight>)
    }

}

const imageW = (Layout.window.width - 32) / 3;

const styles = StyleSheet.create({
    image: {
        width: imageW,
        height: imageW / 1.35,
        borderRadius: 0,
        backgroundColor: "#f7f7f7",
    }
});