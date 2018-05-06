import React, { PureComponent } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { pxToDp } from '../../lib';
import { Layout } from '../../constants';


export default class ThreepictureItem extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {item} = this.props;
        return (<TouchableHighlight
            underlayColor={"#f3f3f3"}
            style={{ backgroundColor: "#ffffff" }}
            onPress={() => {

            }}
        >
            <View style={{ paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15 }}>
                <Text numberOfLines={3} style={{ fontSize: 16.5, lineHeight: 24, color: "#3b3b3b" }}>{item.title}</Text>
                <View style={{ flex: 1, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Image style={styles.image} resizeMode={'cover'}
                        source={{ url: item.thumbnails[0].url }} />
                    <Image style={styles.image} resizeMode={'cover'}
                        source={{ url: item.thumbnails[1].url }} />
                    <Image style={styles.image} resizeMode={'cover'}
                        source={{ url: item.thumbnails[2].url }} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                    <View><Text style={{ fontSize: 11, color: "#a1a0a1" }}>{item.source_name}</Text></View>
                    <TouchableOpacity
                        style={{ height: 13, width: 18, borderRadius: 5, backgroundColor: '#f9f9f9', alignItems: 'center', justifyContent: 'center' }}
                        onPress={() => { }}
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
        backgroundColor:"#f7f7f7"
    }
});