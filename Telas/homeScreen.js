import React , {Component} from "react";
import {
    TouchableOpacity,
    Image,
    Text,
    StyleSheet,
    View
} from "react-native";
import questionScreen from "./question";

export default class HomeScreen extends Component {

    render(){
        return(
            <View style = {styles.container}>
              <Image style={styles.imageIcon} source={require("../assets/drink.png")} />
              <Text style = {styles.titleText}>
                Aplicativo de tomar Água
              </Text>
              <TouchableOpacity 
                style={styles.button}
                onPress = {() => this.props.navigation.navigate('questionScreen')}>
                <Text style={styles.buttonText}>
                  Entrar no App
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
    imageIcon:{
        width: 150 ,
        height: 150 ,
        marginLeft: 120 ,
        marginTop: 80,
    },
    titleText:{
        fontSize:30,
        textAlign:"center",
        marginTop:100
    }, 
    button:{
        width: 100,
        height: 50,
        marginTop: 200,
        padding: 10,
        alignSelf: "center",
        backgroundColor:"lightblue"
    },
    buttonText:{
        textAlign: "center",
        fontSize: 15,
        fontWeight:"bold",
    }
})

/* 

    if(login = first){
        onPress = {() => this.props.navigation.navigate('questionScreen')}
    }else if(login != first){
        onPress = {() => this.props.navigation.navigate('chooseAlarmScreen')}
    }

    firstLogin
    ?onPress = {() => this.props.navigation.navigate('questionScreen')}
    :onPress = {() => this.props.navigation.navigate('chooseAlarmScreen')}

*/