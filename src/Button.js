import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Touchable } from 'react-native';

export default function Button({bgColor,btnLabel,textColor, Press}){
    return (
        <View>
           <TouchableOpacity
           onPress={Press}
            style={{
            backgroundColor: bgColor,
           borderRadius:100,
           alignItems:'center',
           width:300,
           paddingVertical:5,
           marginVertical: 10
           }}>
             <Text style={{color: textColor,fontSize: 25,
             fontWeight:"bold"}}>{btnLabel}</Text>
           </TouchableOpacity>
        </View>
    )
}
