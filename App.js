import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewProject from './src/pages/NewProject';
import Project from './src/pages/Project';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName ='Login'>

        <Stack.Screen
        name='Login'
        component={Login}
        options={{
          title:""
        }}
        />

      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title:"",
          headerStyle:{
            backgroundColor:'#19DF07'
          }
        }}
        />

      <Stack.Screen
        name='NewProject'
        component={NewProject}
        options={{
          title:"",
          headerStyle:{
            backgroundColor:'#19DF07'
          }
        }}
        />

      <Stack.Screen
        name='Project'
        component={Project}
        options={{
          title:"",
          headerStyle:{
            backgroundColor:'#19DF07'
          }
        }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

