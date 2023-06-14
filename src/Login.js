import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Background from './assets/Background';
import {brown} from './Constants';
import Button from './Button';
import Field from './Field';

const Login = props => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 400}}>
        <Text
          style={{
            color: 'white',
            fontSize: 60,
            fontWeight: 'bold',
            marginVertical: 60,
          }}
        >
          Login
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 400,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: 'center',
          }}
        >
          <Text style={{fontSize: 32, color: brown, fontWeight: 'bold'}}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 13,
              fontWeight: 'bold',
              marginBottom: 20,
            }}
          >
            Login to your account
          </Text>
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          <Field placeholder="Password" secureTextEntry={true} />
          <View
            style={{
              alignItems: 'flex-end',
              width: '78%',
              paddingRight: 16,
              marginBottom: 150,
            }}
          >
            <Text style={{color: brown, fontWeight: 'bold', fontSize: 12}}>
              Forgot Password?
            </Text>
          </View>

          <Button
            textColor="white"
            bgColor="brown"
            btnLabel="Login"
            Press={Login => {
              alert ('Successfully Logged In');
              props.navigation.navigate ('MainHome');
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Text style={{fontSize: 13, fontWeight: 'bold'}}>
              Don't have an account?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate ('SignUp')}
            >
              <Text style={{color: brown, fontWeight: 'bold', fontSize: 13}}>
                Sign Up!
              </Text>
            </TouchableOpacity>

          </View>
        </View>

      </View>
    </Background>
  );
};

export default Login;
