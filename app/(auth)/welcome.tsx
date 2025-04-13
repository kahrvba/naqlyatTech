import { router } from "expo-router";
import { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import {icons, images, onboarding} from "@/constants";
import CustomButton from "@/components/CustomButton";
import { LinearGradient } from 'expo-linear-gradient';
const Home = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <View className="flex-1">
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[7px] h-[6px] mx-1 bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#FE6224] rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
          {onboarding.map((item) => (
              <View key={item.id} className="flex-1 relative">
                  <View className="absolute inset-0">
                      <Image
                          source={item.image}
                          className="w-full h-full"
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

                  <SafeAreaView className="flex-1 z-10">
                      {item.id === 1 && (
                          <View className="flex-1 relative">
                              <View className="absolute top-[10%] w-full">
                                  <Image source={images.Line6} className="w-full"/>
                              </View>
                              <View className="absolute top-[50%] left-[3%]">
                                  <Image
                                    source={images.smallTruck}
                                  />
                              </View>
                              <Text className="absolute top-[60%] left-[3%] text-white text-xl  font-bold text-center">
                                  {item.title}
                              </Text>
                              <Text className=" absolute top-[65%] left-[3%] text-sm font-JakartaSemiBold text-white/80">
                                  {item.description}
                              </Text>
                          </View>
                      )}
                      {item.id === 2 && (
                          <View className="flex-1 relative">

                              <View className="absolute top-[28.8%] w-full">
                                  <Image source={images.Line7} className="w-full" />
                              </View>
                              <View className="absolute top-[10%] left-[3%]">
                                  <Image
                                      source={images.smallTruck}
                                  />
                              </View>
                              <Text className="absolute top-[20%] left-[3%] text-white text-3xl font-bold text-center">
                                  {item.title}
                              </Text>
                              <Text className="absolute top-[70%] left-[3%] text-sm font-JakartaSemiBold text-white/80">
                                  {item.description}
                              </Text>
                          </View>
                      )}
                      {item.id === 3 && (
                          <View className="flex-1 relative">
                              <View className="absolute top-[17%] w-full">
                                  <Image source={images.Line8} className="w-full"/>
                              </View>

                              <View className="absolute top-[30%] left-[3%]">
                                  <Image
                                      source={images.smallTruck}
                                  />
                              </View>
                              <Text className="absolute top-[40%] left-[3%] text-white text-3xl font-bold text-center">
                                  {item.title}
                              </Text>
                              <Text className="absolute top-[45%] left-[3%] text-md font-JakartaSemiBold text-warp text-white/80 mt-3">
                                  {item.description}
                              </Text>
                          </View>
                      )}
                  </SafeAreaView>

                  {/* Navigation buttons */}
                  <View className="h-[32px] w-[32px] bg-[#EE5316] absolute right-5 bottom-[5%] justify-center items-center rounded-[8px] z-20">
                      <CustomButton
                          title=""
                          onPress={() => {
                              if (!isLastSlide) {
                                  swiperRef.current?.scrollBy(1);
                              } else {
                                  router.replace("/(auth)/HomePlace");
                              }
                          }}
                          className="!w-[32px] !h-[32px] bg-[#EE5316]"
                          IconRight={() => (
                              <Image
                                  source={icons.arrow}
                                  className="w-6 h-6"
                                  tintColor="white"
                              />
                          )}
                      />
                  </View>
                  <View className="absolute bottom-[4.4%] left-3 z-20">
                      <CustomButton
                          title="skip"
                          className="bg-transparent"
                          textVariant="primary"
                          onPress={() => router.replace("/(auth)/sign-up")}
                      />
                  </View>
              </View>
          ))}
      </Swiper>
    </View>
  );
};

export default Home;
