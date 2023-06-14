import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import SignUp from './src/SignUp';
import Login from './src/Login';
import MainHome from './src/components/MainHome';
import Details from './src/components/Details';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// const client = new ApolloClient({
//   uri: 'https://countries.trevorblades.com/graphql',
//   cache: new InMemoryCache()
// });

const App=() => {
  const Stack = createNativeStackNavigator ();
  return (
    //  <ApolloProvider client={client}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainHome" component={MainHome} />
        <Stack.Screen name="Details" component={Details} /> 
      </Stack.Navigator>
    </NavigationContainer>
    // </ApolloProvider>
  );
};

export default App; 