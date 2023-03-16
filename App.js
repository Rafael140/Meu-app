import React, { Component } from "react";
import HomeScreen from "./Telas/homeScreen"
import questionScreen from "./Telas/question";
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
import { View } from "react-native";

export default class App extends Component{
    render(){
        return(
            <View style = {{flex:1}}>
                <AppContainer  />
            </View>
        )
    }
}

var switchContainer = createSwitchNavigator({
    HomeScreen : HomeScreen,
    questionScreen: questionScreen,
    //chooseAlarmScreen: chooseAlarmScreen,
    //alarmScreen: alarmScreen
})

const AppContainer = createAppContainer(switchContainer)