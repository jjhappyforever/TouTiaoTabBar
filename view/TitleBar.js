'use strict'
import React,{Component} from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native'

import Util from './../base/Util';

export default class TitleBar extends Component{

   render(){
     return(
       <View style={styles.titleBar}>
        <TouchableOpacity onPress={()=>alert('add')}>
        <Image resizeMode='contain' style={styles.logo} source={require('./../../images/add_channel_titlebar.png')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>alert('search')}>
        <Image style={styles.search} source={require('./../../images/white_search_titlebar.png')}/>
        </TouchableOpacity>
       </View>
     );
   }

}

const styles=StyleSheet.create({
  titleBar:{
    flex:1,
    height:Platform.OS=='android'?50:66,
    paddingTop:Platform.OS=='android'?0:15,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#1a191f',
  },
  logo:{
    flex:1,
    height:23,
    width:null,
  },
  city:{
    flex:1,
    flexDirection:'row',
    marginRight:20,
    marginLeft:10,
    paddingLeft:10,
    paddingRight:10,
    alignItems:'center',
  },
  search:{
    width:20,
    height:20,
    marginRight:20,
    marginLeft:20,
    paddingLeft:10,
    paddingRight:10,
  },
});
