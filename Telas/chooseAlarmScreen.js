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
                </Text>
                <TextInput 
                  style = {styles.textInput} 
                  placeholder = "Exemplo: 02:00"
                  placeholderTextColor={"black"}
                  onChangeText={(text) => {
                    this.setState({ hora: text });
                  }}
                  value = {this.state}/>
                  <Text>
                    
                  </Text>
                <TouchableOpacity 
                  style = {styles.buttonSubmit} 
                  onPress = {() => this.props.navigation.navigate('endScreen')}>
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
        flex:1,
        backgroundColor:"#10A8C9"
    },
    informationText:{
        marginTop: 50,
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
        marginTop:7
    }
})