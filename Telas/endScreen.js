import React, { Component } from "react";
import { View,Text,StyleSheet } from "react-native";

export default class endScreen extends Component{

    render(){
        return(
            <View style = {styles.container}>
              <Text style = {styles.endText}>
                É seguro fechar o aplicativo agora
              </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#10A8C9"
    },
    endText:{
        fontSize:28,
        marginTop:300,
        textAlign:"center"
    }
})
