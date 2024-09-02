import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'
import CustomButton from '../../components/CustomButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import { Link } from 'expo-router'
const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
     
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {}
  return (
    <SafeAreaView style={{ backgroundColor: '#2596be', height: '100%' }}>
      <ScrollView>
        <View className="w-full justify-center h-[85vh] px-3">
          <Image 
            source={images.NDNLogo}
            className="w-[350px] h-[200px] mb-5"
            resizeMode="contain"
          />
          <Text className = "text-4xl text-white text-semibold font-psemibold">Log in to NDN</Text>

          <FormField
          title="Email"
          value=  {form.email}
          handleChangeText={(e) => setForm({...form,
             email: e})} 
             otherStyles="mt-7"
             keyboardType="email-address"       
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({
              ...form,
              password: e})}
            otherStyles="mt-7"
          />

          <CustomButton 
          title="Sign In"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading = {isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-white font-pregular">Don't have an account? </Text>
            <Link className="text-lg text-white font-pbold underline" href="/sign-up">Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn