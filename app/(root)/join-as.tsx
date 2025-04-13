import {Image, SafeAreaView, View, StatusBar, Platform, Text} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { images } from "@/constants";
import React from "react";
import CustomButton from "@/components/CustomButton";
import {router} from "expo-router";

const JoinAS = () => {
    return (
        <View className="flex-1 relative">
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
            <Image source={images.JoinAsBg} className="absolute w-full h-full" resizeMode="cover"/>
            <LinearGradient
                colors={['rgba(54, 54, 54, 0.7)', 'rgba(0, 0, 0, 0.9)']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                }}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
            />
            <SafeAreaView className="flex-1 justify-center items-center">
                <View className="absolute top-[40%] left-[10%]">
                    <Text className="font-bold text-5xl text-center">
                        <Text className="bg-[#EE5316] text-white px-2">Join</Text>{' '}
                        <Text className="text-white">as</Text>
                    </Text>
                </View>
                <View className="absolute top-[50%] left-[10%]">
                <Text className="text-white">
                    Description Description Description Description {"\n"}
                    Description Description Description {"\n"}
                    Description DescriptionDescription {"\n"}
                    Description Description Description {"\n"}
                    Description Description Description
                </Text>
                </View>
                <View className="absolute top-[70%] w-[80%]">
                    <CustomButton
                        title="Service Provider"
                        textVariant="primary"
                        onPress={() => router.push("/register-as")}
                    />
                </View>
                <View className="absolute top-[80%] w-[80%]">
                    <CustomButton
                        title="Customer"
                        textVariant="primary"
                    />
                </View>

            </SafeAreaView>
        </View>
    );
};

export default JoinAS;
