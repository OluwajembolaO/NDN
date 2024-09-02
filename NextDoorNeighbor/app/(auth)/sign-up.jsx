import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { router } from 'expo-router'
import CustomButton from '../../components/CustomButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import { Link } from 'expo-router'
import { createUser } from '../../lib/appwrite'
const SignUp = () => {
  const [form, setForm] = useState({
    username:'',
    email: '',
    password: ''

  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async() => { 
    if (!form.username || !form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all fields');
    }

    setIsSubmitting(true);

    try {
      const result = await createUser(form.email, form.password, form.username);
      router.replace('/home')
    } catch (error) {
      Alert.alert('Error', error.message)
    } finally {
      setIsSubmitting(false);
    }
 
  }
  return (
    <SafeAreaView style={{ backgroundColor: '#2596be', height: '100%' }}>
      <ScrollView>
        <View className="w-full justify-center h-[85vh] px-3">
          <Image
            source={images.NDNLogo}
            className="w-[350px] h-[150px] mb-5"
            resizeMode="contain"
          />
          <Text className="text-4xl text-white text-semibold font-psemibold">Sign up to NDN</Text>


          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({
              ...form,
              username: e
            })}
            otherStyles="mt-7"
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({
              ...form,
              email: e
            })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({
              ...form,
              password: e
            })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-white font-pregular">Already have an account? </Text>
            <Link className="text-lg text-white font-pbold underline" href="/sign-in">Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp