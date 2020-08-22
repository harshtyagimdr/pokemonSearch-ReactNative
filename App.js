import React, { Component } from 'react';
import {  View,Platform } from 'react-native';
import Landing from './src/Landing';
import Search from './src/Search';

export default class App extends Component {
  state={
    currentScreen:"search",
  }
  switchScreen=(screen)=>{
    this.setState({currentScreen:screen})
  }
  renderScreen=()=>{
    if(this.state.currentScreen=== "landing"){
      return(
        <Landing switchScreen={this.switchScreen}/>
      )
    }
    else if(this.state.currentScreen==="search"){
      return(
        <Search/>
      )
    }
  }
  render(){
  return (
    <View style={styles.container}>
      {this.renderScreen()}
    </View>
  );
}
}

const styles ={
  container:{
    flex:1,
    marginTop:Platform.OS==="android"?24:0,
  },
  
}
