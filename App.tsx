import React from 'react';
import { StatusBar, View } from 'react-native';
import HomeContainer from './app/Screens/Home/HomeContainer';
import RecipeContainer from './app/Screens/RacipesList/RacipeContainer';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './app/Screens/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  console.log("App rendered")
  return (
    <View style={{ flex: 1, backgroundColor: "yellow" }}>
      <StatusBar
        backgroundColor="black"
      />
      {/* <View>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='HomeContainer'>
            <Stack.Screen name="HomeContainer" component={HomeContainer} options={{ title: "Home" }} />
            <Stack.Screen name="RacipeContainer" component={RecipeContainer} options={{ title: "Racipe" }} />
          </Stack.Navigator>
        </NavigationContainer>
        </View> */}

      <HomeContainer></HomeContainer>
    </View>
  );
}

export default App;
