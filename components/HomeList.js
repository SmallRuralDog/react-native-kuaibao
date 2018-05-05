import React, {PureComponent} from 'react';
import {View, Text, ScrollView, StyleSheet, Platform, PixelRatio} from 'react-native';

import UltimateListView from '../components/listview/ultimateListView';
import {http} from '../lib'
import {Layout} from '../constants'
import ThreepictureItem from './item/ThreepictureItem';
import OnePictureItem from './item/OnePictureITem';
import TextItem from './item/TextItem';

export default class HomeList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            max_behot_time: 0
        }
    }

    onFetch = (page = 1, startFetch, abortFetch) => {
        let timestamp = new Date().getTime();
        let max_behot_time = '';
        if (page > 1) {
            max_behot_time = '&max_behot_time=' + max_behot_time
        }
        http.get('https://m.toutiao.com/list/?tag=news_society&ac=api&count=200&format=json_raw&as=' + Math.random().toString(36).substr(2) + '&cp=' + Math.random().toString(36).substr(2), {}).then(res => {
            let listArr = [];
            console.log(res.data);
            res.data.map(item => {
                listArr.push(item)
            });
            startFetch(listArr, res.return_count)
        }).catch(err => {
            abortFetch()
        })
    };

    renderItem = (item, index, separator) => {
        if (item.image_list.length === 3) {
            return (<ThreepictureItem item={item}/>);
        }
        else if (item.image_url) {
            return (<OnePictureItem item={item}/>);
        } else {
            return (<TextItem item={item}/>);
        }


    };

    renderSeparatorView = () => {
        return (<View style={{height: Layout.onePx, backgroundColor: "#ffffff"}}>
            <View style={{
                borderBottomWidth: Layout.onePx,
                borderBottomColor: "#f0f0f0",
                marginLeft: 15,
                marginRight: 15
            }}/>
        </View>)
    };

    render() {
        return (<UltimateListView
            style={{
                backgroundColor: "#f7f7f7"
            }}
            ref={ref => this.listView = ref}
            onFetch={this.onFetch}
            keyExtractor={(item, index) => index.toString()}
            refreshableMode={Platform.OS == "ios" ? "basic" : "basic"} // basic or advanced
            item={this.renderItem}
            arrowImageStyle={{width: 20, height: 20, resizeMode: 'contain'}}
            dateStyle={{color: 'lightgray'}}
            refreshViewStyle={Platform.OS === 'ios' ? {height: 35, top: -35} : {height: 35}}
            refreshViewHeight={35}
            separator={this.renderSeparatorView}//分割线
            //paginationFetchingView={this.renderPaginationFetchingView}//初始化加载View
            //paginationWaitingView={this.renderPaginationFetchingView}//加载更多View
            //emptyView={this.renderEmptyView}
            //header={this.rendHeaderView}
            refreshableTitlePull="下拉刷新"
            refreshableTitleRelease="松手刷新"
            refreshableTitleRefreshing="正在推荐"
            waitingSpinnerText="正在加载"
            spinnerColor="#999999"
        />)
    }

}

const styles = StyleSheet.create({});