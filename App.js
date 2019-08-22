import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createDrawerNavigator, createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';

function Home() {
  return (
    <HomeScreen />
  );
}

const Account = props => {
  return (
    <View>
        <Button onPress={ props.navigation.navigate( 'Account' ) } title='go to Account' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
});

const AppDrawerNavigator = createDrawerNavigator( {
    Home: Home,
    Account: Account
} );

/* const AppStackNavigator = createStackNavigator( {
    Home: App,
    Account: Account
} );

const AppBottomTabNavigator = createBottomTabNavigator( {
    Home: App,
    Account: Account
} ); */

const AppContainer = createAppContainer( AppDrawerNavigator );
export default App = () => {
  return ( <AppContainer /> )
}