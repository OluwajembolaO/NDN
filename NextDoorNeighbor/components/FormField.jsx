import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { icons} from '../constants' 
const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {

    const [showPassword, setShowPassword] = useState(false)

  return (
    <View className = 'space-y-2 ${otherStyles}'>
      <Text className="text-base text-white font-pmedium mt-5 ">
        {title}
    </Text>
    <View style = {{backgroundColor: 'white'}}className=" border-2 border-black-500 w-full h-16 px-4 rounded-2xl focus:border-secondary items-center flex-row">
      <TextInput
        className="flex-1 text-black font-psemibold text-base"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#BEBEBE"
        onChangeText={handleChangeText}
        secureTextEntry={title === 'Password' && !showPassword}
        />

        {title === 'Password' && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Image source={!showPassword ? icons.eye : icons.eyehide} className="w-6 h-6"
                resizeMode='contain'/>

            </TouchableOpacity>
        )}
    </View>
    </View>
  )
}

export default FormField