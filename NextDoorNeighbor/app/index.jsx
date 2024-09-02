import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { Redirect, router } from 'expo-router';
import { images } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
export default function App() {
    return (
        <SafeAreaView style={{ backgroundColor: '#2596be', height: '100%' }}>
            <ScrollView>
                <View className="w-full justify-center items-center min-h-[85vh] px-4">
                    <Image 
                        source={images.NDNLogo}
                        className="w-[380px] h-[300px]"
                        resizeMode="contain"
                    />
                    <View className = "relative mt-5">
                        <Text className="text-3xl text-white font-bold text-center">
                             Building Bonds, Sharing Rewards
                        </Text>    
                    </View>
                <CustomButton
                title="Continue with Email"
                handlePress={() => router.push('sign-in')}
                containerStyles="w-full mt-7"

                />
                </View>
            </ScrollView>

            <StatusBar backgroundColor='#2596be'
            style='light' />
        </SafeAreaView>
    );
}

