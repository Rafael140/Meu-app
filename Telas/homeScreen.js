import React , {Component} from "react";
import {
    TouchableOpacity,
    Image,
    Text,
    StyleSheet,
    View
} from "react-native";

export default class HomeScreen extends Component {

    render(){
        return(
            <View style = {styles.container}>
              <Image style={styles.imageIcon} source={require("../assets/drink.png")} />
              <Text style = {styles.titleText}>
                Aplicativo de tomar Água
              </Text>
              <TouchableOpacity 
                style={styles.firstButton}
                onPress = {() => this.props.navigation.navigate('questionScreen')}>
                <Text style={styles.firstButtonText}>
                  Primeira vez usando o App
                </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.secondButton}
                onPress = {() => this.props.navigation.navigate('chooseAlarmScreen')}>
                <Text style={styles.secondButtonText}>
                  Já uso o App
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
    firstButton:{
        width: 120,
        height: 50,
        marginTop: 200,
        padding: 10,
        marginLeft: 50,
        backgroundColor:"lightblue"
    },
    firstButtonText:{
        textAlign: "center",
        fontSize: 15,
        fontWeight:"bold",
    },
    secondButton:{
        width: 100,
        height: 50,
        marginTop: -50,
        padding: 10,
        marginLeft: 200,
        backgroundColor:"lightblue"
    },
    secondButtonText:{
        textAlign: "center",
        fontSize: 15,
        fontWeight:"bold",
        marginTop: 7
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