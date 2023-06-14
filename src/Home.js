import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import Background from './assets/Background';
import Button from './Button';
import { brown, darkGreen } from './Constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainHome from './components/MainHome';
import Details from './components/Details';
import Login from './Login';
import SignUp from './SignUp';

const Home = (props) => {
    
    return (
        <Background>
           <View style={{marginHorizontal: 40,marginVertical:80}}>
             <Text style={{color:'white',fontSize:70}}>Welcome</Text>
            <Text style={{color:'white',fontSize:28,marginBottom:250}}>Enjoy the Best Fast Food in Town!</Text>
           <Button bgColor='white' textColor={brown} btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
           <Button bgColor='white' textColor={brown} btnLabel="SignUp" Press={() => props.navigation.navigate("SignUp")} />
           </View>
        </Background>
        
    );
};



const styles = StyleSheet.create({})

export default Home;
