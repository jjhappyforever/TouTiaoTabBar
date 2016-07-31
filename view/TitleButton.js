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

export default class TitleButton extends Component{

  static propTypes={
    style:View.propTypes.style,
  }

   render(){
     return(
       <View style={[styles.titleBar,this.props.style]}>
        <TouchableOpacity style={{flex:1}} onPress={()=>alert('add')}>
        <Image resizeMode='contain' style={styles.search} source={require('../images/add_channel_titlbar.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1}} onPress={()=>alert('search')}>
        <Image style={[styles.search,{width:30,height:30,}]} source={require('../images/white_search_titlebar.png')}/>
        </TouchableOpacity>
       </View>
     );
   }

}

const styles=StyleSheet.create({
  titleBar:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ce3d3a',
    paddingRight:15,
    width:80,
  },
  search:{
    width:20,
    height:20,
    marginLeft:10,
    paddingLeft:10,
    paddingRight:10,
  },
});
