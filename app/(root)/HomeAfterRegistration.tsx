import {
    ScrollView, 
    View, 
    Image, 
    SafeAreaView, 
    StatusBar, 
    Platform, 
    Text, 
    TouchableOpacity, 
    Modal,
    Animated,
    Dimensions
} from "react-native";
import React, {useEffect, useState, useRef} from "react";
import SidebarMenu from "@/components/SidebarMenu";
import {icons, images} from "@/constants";
import InputField from "@/components/InputField";
import Swiper from "react-native-swiper";
import {router} from "expo-router";
import OrderScreen from "./OrderScreen";
const SCREEN_WIDTH = Dimensions.get('window').width;

const HomeAfterRegistration = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const slideAnim = useRef(new Animated.Value(SCREEN_WIDTH)).current;
    const toggleSidebar = () => {
        if (!isSidebarVisible) {
            setIsSidebarVisible(true);
        } else {
            animateOut();
        }
    };

    const animateOut = () => {
        Animated.timing(slideAnim, {
            toValue: SCREEN_WIDTH,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            setIsSidebarVisible(false);
        });
    };

    useEffect(() => {
        if (isSidebarVisible) {
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    }, [isSidebarVisible]);

    return (
        <SafeAreaView className="bg-white flex-1">
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
            <ScrollView className="flex-1">
                <View className="flex flex-col">
                    <View className={Platform.OS === "android" ? "flex flex-row items-center justify-between px-4 py-2" : "flex flex-row items-center justify-between px-4"}>
                        <View className="flex flex-row p-1">
                            <Image
                                source={images.placeholder}
                                resizeMode="contain"
                                className="w-10 h-10"
                            />
                            <View className="flex flex-col p-1">
                            <Text className="text-secondary-700">Welcome Back!</Text>
                            <Text className="font-JakartaBold">Mohammed Ahmed</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={toggleSidebar}>
                            <Image source={images.sidebar}/>
                        </TouchableOpacity>
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
                    <TouchableOpacity onPress={() => {
                        router.replace("/OrderScreen");
                    }}>
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
                </View>
            </ScrollView>
            <Modal
                transparent={true}
                visible={isSidebarVisible}
                onRequestClose={toggleSidebar}
                animationType="none"
            >
                <View className="flex-1">
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={toggleSidebar}
                        className="absolute inset-0 bg-black/50"
                    />
                    <Animated.View
                        style={[{
                            position: 'absolute',
                            width: 340, // Increased width to account for rotation
                            height: '100%',
                            top: 0,
                            right: -50, // Shift slightly to the right to cover the gap
                            transform: [
                                { translateX: slideAnim },
                                { rotate: '-4deg' }
                            ],
                            backgroundColor: 'white',
                            borderTopRightRadius: 0,
                            borderTopLeftRadius: 80,
                            borderStartStartRadius: 100,
                            borderBottomLeftRadius: 80,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 4,
                            elevation: 5,
                        }]}
                    >
                        <SidebarMenu onClose={toggleSidebar} />
                    </Animated.View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

export default HomeAfterRegistration;
