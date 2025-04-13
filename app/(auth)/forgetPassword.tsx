import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Image, Text, View, TouchableOpacity } from "react-native";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { icons } from "@/constants";
import { LinearGradient } from "expo-linear-gradient";
import InputField from "@/components/InputField";
import CountryDropdown from "@/components/counteryDropdown";
const forgetPassword = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });
    const [checked, setChecked] = useState(false);
    return (
        <SafeAreaView className="flex-1">
            <View className="absolute w-full h-full">
                <Image
                    source={require("../../assets/images/onboarding3.png")}
                    resizeMode="cover"
                />
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
            </View>
            <View className="absolute top-[8%] left-[5%] flex flex-row">
                <CustomButton
                    title=""
                    onPress={() => router.replace("/(auth)/welcome")}
                    bgVariant="outline"
                    IconLeft={() => (
                        <Image
                            source={icons.backArrow}
                            className="w-6 h-6"
                            tintColor="white"
                        />
                    )}
                />
                <CustomButton
                    title="back"
                    onPress={() => router.replace("/(auth)/sign-in")}
                    bgVariant="outline"
                    textVariant="primary"
                />
            </View>

            <View className="absolute flex flex-col bottom-0 w-full bg-white h-[95%] rounded-t-[40px]">
                <Text className="absolute font-bold top-[4%] left-[7%] text-3xl">
                    <Text className="bg-[#EE5316]">For</Text>got password?
                </Text>
                <Text className="absolute top-[12%] left-[7%] text-secondary-600">Enter your phone number to send the code</Text>
                <View className="flex flex-row top-[20%] justify-center items-center">
                    <View className="mt-[10%]">
                        <CountryDropdown />
                    </View>
                    <View className="w-[60%] h-[50px] justify-center">
                        <InputField label="" placeholder="Phone number" className="h-full"/>
                    </View>
                </View>
                <View className="justify-center items-center top-[30%]">
                    <CustomButton
                        title="Send Code"
                        className="w-[90%] rounded"
                        textVariant="primary"
                    />
                </View>

            </View>
        </SafeAreaView>
    );
};

export default forgetPassword;
