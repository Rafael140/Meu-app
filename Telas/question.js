import React, { Component } from "react";
import { 
  StyleSheet,
  View, 
  Text, 
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";

export default class questionScreen extends Component {

    render(){
      return(
          <View style = {styles.container}>
              <Text style = {styles.questionText}>
                  Para proseguirmos, insira o seu peso, para saber a quantidade de água que precisa ingerir.
              </Text>
              <TextInput 
                style = {styles.textInput}
                placeholder = "Exemplo: 54,5"
                placeholderTextColor={"black"}
                onChangeText={(value) => setTextInputPeso(value)}
                />
              <TouchableOpacity 
                style = {styles.buttonSubmit} 
                onPress = {() => this.props.navigation.navigate('chooseAlarmScreen')}>
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
        flex:1,
        backgroundColor:"#10A8C9"
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
        marginTop: 150,
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