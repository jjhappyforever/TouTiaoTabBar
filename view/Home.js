
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  InteractionManager,
  StatusBar,
  Platform,
} from 'react-native';


import ScrollableTabView,{ ScrollableTabBar } from 'react-native-scrollable-tab-view';

/**
音乐
**/
export default class Home extends Component{

  componentDidMount(){
    InteractionManager.runAfterInteractions(()=>{
      //
      console.log('InteractionManager....MyMessage');
    });
  }

  render(){
    const{navigator}=this.props;
      console.log('InteractionManager....render');
    return(
      <View style={styles.container}>
      <StatusBar
       backgroundColor='#1a191f'
       barStyle='light-content'
       animated={true}
       hidden={false}
      />
      {Platform.OS=='ios'?<View style={{height:15,backgroundColor:'#ce3d3a'}}/>:null}
      <ScrollableTabView
      initialPage={0}
      scrollWithoutAnimation={true}
      renderTabBar={()=><ScrollableTabBar
                    underlineColor='#ce3d3a'
                    activeTextColor='#fff'
                    inactiveTextColor='rgba(255, 255, 255, 0.7)'
                    underlineHeight={0}
                    textStyle={{ fontSize: 15 }}
                    tabStyle={{ paddingBottom: 0 }}
                    backgroundColor='#ce3d3a'
                    tabStyle={{paddingLeft:12,paddingRight:12}}
                   />}
      >
     <View tabLabel='推荐' style={styles.itemLayout}><Text >推荐板块</Text></View>
     <View tabLabel='头条号'  style={styles.itemLayout}><Text>头条号板块</Text></View>
     <View tabLabel='热点' style={styles.itemLayout}><Text >热点板块</Text></View>
     <View tabLabel='视频'  style={styles.itemLayout}><Text >视频板块</Text></View>
     <View tabLabel='上海'  style={styles.itemLayout}><Text >上海板块</Text></View>
     <View tabLabel='社会'  style={styles.itemLayout}><Text >社会板块</Text></View>
     <View tabLabel='图片'  style={styles.itemLayout}><Text >图片板块</Text></View>
     <View tabLabel='娱乐'  style={styles.itemLayout}><Text >娱乐板块</Text></View>
     <View tabLabel='科技'  style={styles.itemLayout}><Text >科技板块</Text></View>
     <View tabLabel='汽车'  style={styles.itemLayout}><Text >汽车板块</Text></View>
     </ScrollableTabView>
     </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  itemLayout:{flex:1,alignItems:'center',justifyContent:'center'}
});
