import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from './assets/Background';
import {brown} from './Constants';
import Button from './Button';
import Field from './Field';

const SignUp = (props) => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 400}}>
        <Text
          style={{
            color: 'white',
            fontSize: 60,
            fontWeight: 'bold',
            marginTop:40,
          }}
        >
          Register
        </Text>
        <Text style={{color:"white",fontSize:17,fontWeight:"bold",marginBottom: 30}}>Create a new account</Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 400,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: 'center',
          }}
        >
          <Field
            placeholder="First Name"
          />
          <Field 
            placeholder="Last Name" 
          />

          <Field 
           placeholder="Email/Username"
            keyboardType={'email-address'} />

          <Field
            placeholder="Contact Number" 
            keyboardType={'number-pad'} />

          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />

          <View
            style={{
              display: 'flex',
              flexDirection:'row',
              width: '93%',
              paddingRight: 10
            }}
          >
            <Text style={{color: 'grey', fontWeight: 'bold', fontSize: 12}}>
              By signing in, you agree to our 
              <Text style={{color:brown,fontWeight:'bold',fontSize:13}}> Terms & Conditions</Text>
            </Text>
          </View>


          <View
  style={{
    display: 'flex',
    flexDirection: 'row',
    width: '93%',
    justifyContent:"center",
    paddingRight: 10,
    marginBottom:30
  }}
>
  <Text style={{color: 'grey', fontWeight: 'bold', fontSize: 12}}>
    and{" "}
    <Text style={{color: brown, fontWeight: 'bold', fontSize: 13}}>
      Privacy Policy
    </Text>
  </Text>
</View>



          <Button
            textColor="white"
            bgColor={brown}
            btnLabel="SignUp"
            Press={() => {alert ('Account Created')
            props.navigation.navigate('Login')
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
              Already have an account? </Text>
            <TouchableOpacity
              onPress={() =>
               props.navigation.navigate ('Login')}
            >
              <Text style={{color: brown, fontWeight: 'bold', fontSize: 13}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default SignUp;

