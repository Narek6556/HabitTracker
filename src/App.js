import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {SafeAreaView, Text, View} from "react-native";

/**
 * Navigation Stacks
 * */

const Stack = createNativeStackNavigator();

const App = () => {
  const stylesForText = {
    color: 'white',
    fontSize: 23,
    justifyContent: 'center',
    backgroundColor: 'red',
  };
  const stylesForView = {
    alignItems: 'center',
    height: 200,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'blue',
  };
  return (
    <SafeAreaView>
      <View style={stylesForView}>
        <Text style={stylesForText}>Hellooo</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
