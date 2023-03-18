import React, { Component } from "react";
import HomeScreen from "./Telas/homeScreen"
import questionScreen from "./Telas/question";
import chooseAlarmScreen from "./Telas/chooseAlarmScreen";
import endScreen from "./Telas/endScreen";
import alarmScreen from "./Telas/alarmScreen"
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
    chooseAlarmScreen: chooseAlarmScreen,
    endScreen: endScreen
    //alarmScreen: alarmScreen
})

const AppContainer = createAppContainer(switchContainer)