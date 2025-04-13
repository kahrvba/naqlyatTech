import {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {ScrollView, Image, Text, View, TouchableOpacity} from "react-native";
import CustomButton from "@/components/CustomButton";
import {Link, router} from "expo-router";
import {icons} from "@/constants";
import {LinearGradient} from "expo-linear-gradient";
import InputField from "@/components/InputField";
const SignUp = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    })
    return (
        <SafeAreaView className="flex-1">
            <View className="absolute w-full h-full">
                <Image
                    source={require("../../assets/images/onboarding3.png")}
                    resizeMode="cover"
                /><LinearGradient
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
                    onPress={() => {router.replace("/(auth)/welcome");}}
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
                    onPress={() => {router.replace("/(auth)/welcome");}}
                    bgVariant="outline"
                    textVariant="primary"
                />
            </View>

            <View className="absolute flex flex-col bottom-0 w-full bg-white h-[95%] rounded-t-[40px]">
                <Text className="font-bold top-[4%] left-[7%] text-3xl">
                    <Text className="bg-[#EE5316]">Sig</Text>n up
                </Text>
                <View className="pt-[10%] pl-[5%] w-[90%]">
                    <InputField
                        label="User name"
                        placeholder="Enter your full name"
                        value={form.name}
                        onChangeText={(value) => setForm({...form, name: value})}
                    />
                </View>
                <View className="pl-[5%] w-[90%]">
                    <InputField
                        label="Phone number"
                        placeholder="Enter your phone number"
                        value={form.phone}
                        onChangeText={(value) => setForm({...form, phone: value})}
                    />
                </View>
                <View className="pl-[5%] w-[90%]">
                    <InputField
                        label="Email"
                        placeholder="Enter your email"
                        value={form.email}
                        onChangeText={(value) => setForm({...form, email: value})}
                    />
                </View>
                <View className="pl-[5%] w-[90%]">
                    <InputField
                        label="Password"
                        placeholder="Enter your password"
                        value={form.password}
                        onChangeText={(value) => setForm({...form, password: value})}
                    />
                </View>
                <View className="justify-center items-center top-[5%]">
                    <CustomButton
                        title="Continue"
                        className="w-[90%] rounded"
                        textVariant="primary"
                    />
                </View>
                <Link href="/sign-in" className="text-lg left-5 text-black mt-[15%]">
                    Already have an account?
                </Link>
                <TouchableOpacity className="top-[1%]" onPress={() => router.replace("/sign-in")}>
                    <View className="flex flex-row top-[1%]">
                        <Text className="left-5 text-[##EE5316] text-1xl">Sign in</Text>
                        <Image
                            source={icons.arrow}
                            className="w-6 h-6 left-10"
                            tintColor="#EE5316"
                        />
                    </View>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
};
export default SignUp;