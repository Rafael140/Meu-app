import React, { Component } from "react";
import { 
  StyleSheet,
  View, 
  Text, 
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";

export default class questionScreen extends Component{

    verify = () =>{
        var peso = this.state
        var prosseguir = {value}
        if(peso === ''){
            Alert.alert("Coloque um peso")
            prosseguir.value = 0
        }else {
            prosseguir.value = 1
        }
    }

    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.questionText}>
                    Para proseguirmos, insira o seu peso, para saber a quantidade de água que precisa ingerir.
                </Text>
                <TextInput 
                  style = {styles.textInput} 
                  onChangeText={(text) => {
                    this.setState({ peso: text });
                  }}
                  value = {this.state}/>
                <TouchableOpacity style = {styles.buttonSubmit}>
                    <Text style = {styles.textButtonStyle}>
                        Prosseguir
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    questionText:{
        marginTop: 35,
        fontSize:40,
        textAlign:"center"
    },
    textInput:{
        marginTop: 150,
        width: '80%',
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 4,
        outline: 'none',
    },
    buttonSubmit:{
        width: 100,
        height: 50,
        marginTop: 200,
        padding: 10,
        alignSelf: "center",
        backgroundColor:"lightblue"
    },
    textButtonStyle:{
        textAlign: "center",
        fontSize: 15,
        fontWeight:"bold",
    }
})