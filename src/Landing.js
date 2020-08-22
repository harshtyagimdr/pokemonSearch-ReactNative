import React,{Component} from 'react';
import { Text, View, ImageBackground } from 'react-native';
import {Button} from 'native-base';
var myBackground=require("../assets/icons/landing.jpg")
class Landing extends Component{
    render(){
        return(
            <View style={styles.viewStyle}>
                 <ImageBackground source={myBackground} style={styles.image}>
                <Text style={styles.titleStyle}>Welcome to PokiSearch</Text>
                <Button
                    block={true}
                    style={styles.buttonStyle}
                    onPress={()=>{
                        this.props.switchScreen("search");
                    }}
                >
                    <Text style={styles.buttonText}>
                    Start Searching
                    </Text>
                </Button>
                </ImageBackground>
            </View>
        )
    }
}
const styles ={
       viewStyle:{
      flex:1,
      flexDiretion:'column',
    //   justifyContent:'center',
    //   alignItems:'center'
    },
    titleStyle:{
      fontSize:20,
      color:'blue',
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      alignItems:'center',
    },
    buttonStyle:{
      margin:10,
    },
    buttonText:{
      color:'white'
    }
    
  }
export default Landing;