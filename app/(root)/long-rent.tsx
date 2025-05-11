import {SafeAreaView, ScrollView, Text, TouchableOpacity, View, Image, StatusBar} from "react-native";
import React from "react";
import {icons} from "@/constants";
import InputField from "@/components/InputField";
import InputField2 from "@/components/inputField2";

const LongRent = () => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

            <ScrollView>

                <View className="flex flex-row mt-4 items-center">
                    <TouchableOpacity className="ml-4 bg-[#F6F6FB] w-10 h-10 rounded justify-center items-center">
                        <Image source={icons.blueBackArrow} style={{ width: 20, height: 20 }} resizeMode="contain" />
                    </TouchableOpacity>
                    <Text className="text-2xl font-bold flex-1 text-center mr-10">Long Rent</Text>
                </View>
                <View className="">
                    <InputField2
                        label=""
                        placeholder="Search Driver, Electricic .."
                        icon={icons.search}
                    />
                </View>
                <Text>Top Brands</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LongRent;
