import React , {Component} from "react";
import {
    TouchableOpacity,
    Image,
    Text,
    Alert,
    StyleSheet,
    View
} from "react-native";
import questionScreen from "./question";

export default class HomeScreen extends Component {

    render(){
        return(
            <View>
              <Image style={styles.imageIcon} source={require("../assets/drink.png")} />
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
    imageIcon:{
        width: 150 ,
        height: 150 ,
        marginLeft: 120 ,
        marginTop: 80,
    },
    button:{
        width: 100,
        height: 50,
        marginTop: 300,
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
