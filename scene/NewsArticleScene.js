import React, { Component } from 'react';
import { View, Text, WebView } from 'react-native';

export default class NewsArticleScene extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { item } = this.props.navigation.state.params;
        return (<View style={{ flex: 1 }}>
            <WebView
                style={{ flex: 1 }}
                source={{ uri: item.url }}
            />
        </View>);
    }

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            header: null
        }

    }
}