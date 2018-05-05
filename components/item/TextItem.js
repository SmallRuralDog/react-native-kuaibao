import React, {PureComponent} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native';
import {Ionicons, MaterialIcons} from '@expo/vector-icons'


export default class TextItem extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {item} = this.props;
        return (<TouchableHighlight
            underlayColor={"#f3f3f3"}
            style={{backgroundColor: "#ffffff"}}
            onPress={() => {

            }}
        >
            <View style={{paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15}}>
                <Text style={{fontSize: 16.5, lineHeight: 24, color: "#3b3b3b"}}>{item.title}</Text>
                <View style={styles.info_view}>
                    <View style={styles.flex_view}>
                        <View style={[styles.flex_view, {marginRight: 5}]}>
                            <MaterialIcons name={'whatshot'} size={13} color={"#f24a3d"}/>
                            <Text style={[styles.info_text, {color: "#f24a3d"}]}>置顶</Text>
                        </View>
                        <Text style={styles.info_text}>{item.source}</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.del_btn}
                        onPress={() => {
                        }}
                    >
                        <Ionicons name={'ios-close'} size={12} color={"#c8c8c8"}/>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableHighlight>)
    }

}


const styles = StyleSheet.create({
    flex_view: {
        flexDirection: 'row', alignItems: 'center'
    },
    info_view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    info_text: {
        fontSize: 11, color: "#a1a0a1"
    },

    del_btn: {
        height: 13,
        width: 18,
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
        alignItems: 'center',
        justifyContent: 'center'
    }
});