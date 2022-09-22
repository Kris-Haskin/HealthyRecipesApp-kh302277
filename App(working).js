import React, {useState} from 'react';
//import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import bruschetta from './assets/bruschetta.png';
//import * as React from 'react';
//import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import * as SplashScreen from 'expo-splash-screen';

//SplashScreen.preventAutoHideAsync();
//setTimeout(SplashScreen.hideAsync, 1000);

function HomeScreen({ navigation}) {
  const [servingNumber, setServingNumber] = useState (1);
  const onPress = () => {
    /* 1. Navigate to the Details route with params 
    but it should navigat to the recipe page with params*/
    navigation.navigate('Details', {
      itemId: servingNumber,
      otherParam: 'anything you want here',
    });
  }
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>Bruschetta Recipe</Text>
      <Image source={bruschetta}  style = {styles.picture} />
      <TextInput 
      style = {styles.TxtInput}
      placeholder = "Enter the Number of Servings"
      onChangeText={ value => setServingNumber(value)}
      //defaultValue={servingNumber}
      />

    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
    <Text style={styles.buttonText}>View Recipe</Text>
    </TouchableOpacity>
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId, otherParam } = route.params;
  return (
    <View style = {styles.details}>
<Text style = {styles.title}>Bruschetta</Text>
<Text style = {styles.subtitle}>Ingredients</Text>
      <Text style = {styles.directions}>{JSON.stringify(itemId * 2)} plum tomatoes</Text>
      <Text style = {styles.directions}>{JSON.stringify(itemId * 6)} basil leaves</Text>
      <Text style = {styles.directions}>{JSON.stringify(itemId * 4)} garlic cloves, chopped</Text>
      <Text style = {styles.directions}>{JSON.stringify(itemId * 4)} TB olive oil</Text>
<Text style = {styles.subtitle}>Directions</Text>
<Text style = {styles.directions}>Combine the ingredients add salt to taste. Top French bread slices with mixture.</Text>

      {/* <Text>otherParam: {JSON.stringify(otherParam)}</Text> */}
      
    </View>
  );
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
              }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Healthy Recipes"}}/>
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: ""}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  directions:{
    fontSize: 25,
    fontWeight: "bold",
    marginLeft:55,
  },

picture: {
  witdh: 305, 
  Height: 159,
},

title: {
  color: "black", 
  fontSize: 40, 
  marginBottom: 5,
  textAlign: 'center',
  fontWeight: "bold",

},

subtitle: {
fontSize: 35,
fontWeight: "bold",
marginLeft: 20,
marginTop: 20,
},

button: {
  backgroundColor: "gray",
  padding: 10,
  marginBottom:20,

},

buttonText: {
  fontSize:20, 
  color: "white",
},

TxtInput: { 
  height: 40,
  width: 200,
  marginBottom:20,
  marginTop: 20,
  textAlign: 'center',
},
txtOutput: {
  fontSize: 20,
}

});

