import {ScrollView, View, Image, SafeAreaView, StatusBar, Platform, Text, TouchableOpacity} from "react-native";
import {icons, images} from "@/constants";
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import Swiper from "react-native-swiper";
import {router} from "expo-router";
const HomePlace = () => {
    return (
        <SafeAreaView className="bg-white flex-1">
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
            <ScrollView className="flex-1">
                <View className="flex flex-col">
                    <View className={Platform.OS === "android" ? "flex flex-row items-center justify-between px-4 py-2" : "flex flex-row items-center justify-between px-4"}>
                        <Image
                            source={images.logo}
                            resizeMode="contain"
                            className="w-24 h-24"
                        />
                        <CustomButton title="Join Us" textVariant="primary" className="h-[50px] rounded" onPress={() => router.push("/(root)/join-as")} />
                    </View>
                    <View className="px-4">
                        <InputField
                            label=""
                            placeholder="Search for a truck..."
                            icon={icons.search}
                            rightIcon={icons.imageInSearch}
                        />
                    </View>
                    <View className="px-4 mt-4">
                        <Swiper
                            style={{ height: 240 }} // height = box height + dots space
                            dot={
                                <View className="w-[7px] h-[6px] mx-1 bg-[#E2E8F0] rounded-full" />
                            }
                            activeDot={
                                <View className="w-[32px] h-[4px] mx-1 bg-[#35516D] rounded-full" />
                            }
                        >
                            {/* Slide 1 */}
                            <View className="flex items-center justify-center">
                                <View className="border border-gray-300 rounded-lg overflow-hidden w-full h-[200px]">
                                    <Image
                                        source={images.offer1}
                                        className="w-full h-full"
                                        resizeMode="cover"
                                    />
                                </View>
                            </View>

                            {/* Slide 2 */}
                            <View className="flex items-center justify-center">
                                <View className="border border-gray-300 rounded-lg overflow-hidden w-full h-[200px]">
                                    <Image
                                        source={images.offer2}
                                        className="w-full h-full"
                                        resizeMode="cover"
                                    />
                                </View>
                            </View>

                            {/* Slide 3 */}
                            <View className="flex items-center justify-center">
                                <View className="border border-gray-300 rounded-lg overflow-hidden w-full h-[200px]">
                                    <Image
                                        source={images.offer3}
                                        className="w-full h-full"
                                        resizeMode="cover"
                                    />
                                </View>
                            </View>
                        </Swiper>
                    </View>
                    <Text className="font-JakartaBold text-3xl p-4">Getting Start</Text>
                    <TouchableOpacity>
                        <View className="px-4 mt-4">
                            <View className="bg-[#337CF0] rounded-2xl flex-row items-center justify-between p-4">
                                {/* Left Text Section */}
                                <View className="flex-1 pr-4">
                                    <View className="flex-row items-center">
                                        <Text className="text-white text-lg font-bold">Order your Truck</Text>
                                        <Text className="text-white text-2xl font-bold mx-4">{'>'}</Text>
                                    </View>
                                    <Text className="text-white text-xs mt-2 leading-4">
                                    Description Description Description Description{"\n"}
                                    Description Description Description
                                    </Text>
                                </View>
                                {/* Right Image Section */}
                                <Image
                                    source={images.smallTruck} // Replace with your actual image key
                                    className="w-[110px] h-[90px]"
                                    resizeMode="contain"
                                />
                            </View>
                        </View>

                    </TouchableOpacity>
                    <Text className="font-JakartaBold text-3xl p-4">Our Services</Text>
                    <TouchableOpacity>
                        <View className="px-4 mt-4">
                            <View className="bg-[#EE531645] rounded-2xl flex-row justify-between items-center p-4 shadow-md">
                                {/* Left Icon + Text Section */}
                                <View className="flex-1 pr-4 flex-col items-start">
                                    <View className="flex flex-row">
                                        <Image source={icons.smallCar} className="w-7 h-7 mr-2 bg-[#EE5316] rounded" />
                                        <Text className="text-black font-bold text-lg">Offers</Text>
                                    </View>
                                    <View className="flex-1 mt-3">
                                        <Text className="text-black text-xs mt-1">
                                            Description Description
                                            Description Description Description
                                        </Text>
                                    </View>
                                </View>
                                <Image
                                    source={images.Vocher} // replace with your actual image name
                                    className="w-[150px] h-[80px]"
                                    resizeMode="contain"
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View className="px-4 mt-4">
                            <View className="bg-[#EE531645] rounded-2xl flex-row justify-between items-center p-4 shadow-md">
                                {/* Left Icon + Text Section */}
                                <View className="flex-1 pr-4 flex-col items-start">
                                    <View className="flex flex-row">
                                        <Image source={icons.smallCar} className="w-7 h-7 mr-2 bg-[#EE5316] rounded" />
                                        <Text className="text-black font-bold text-lg">Long Rent</Text>
                                    </View>
                                    <View className="flex-1 mt-3">
                                        <Text className="text-black text-xs mt-1">
                                            Description Description
                                            Description Description Description
                                        </Text>
                                    </View>
                                </View>
                                <Image
                                    source={images.longrentboxcar} // replace with your actual image name
                                    className="w-[150px] h-[80px]"
                                    resizeMode="contain"
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <Text className="font-JakartaBold text-3xl p-4">Our Orders</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomePlace;