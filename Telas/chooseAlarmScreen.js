import React, { Component } from "react";
import { 
  StyleSheet,
  View, 
  Text, 
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";

export default class chooseAlarmScreen extends Component{

    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.informationText}>
                    Insira o intervalo do alarme. 
                    Exemplo: 02:00
                </Text>
                <TextInput 
                  style = {styles.textInput} 
                  onChangeText={(text) => {
                    this.setState({ hora: text });
                  }}
                  value = {this.state.hora}/>
                <TouchableOpacity style = {styles.buttonSubmit}>
                    <Text style = {styles.textButtonStyle}>
                        Pronto
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
    informationText:{
        fontSize:15
    },
    textInput:{
        marginTop: 20,
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
        marginTop: 300,
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