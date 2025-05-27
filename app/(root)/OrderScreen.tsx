import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

const OrderScreen = () => {
  const [activeTab, setActiveTab] = useState<"Truck" | "Ship">("Truck");

  const trucks = [
    {
      label: "Pickup",
      price: "$20+",
      image: require("@/assets/images/pickup.png"),
    },
    {
      label: "Small Truck",
      price: "$30+",
      image: require("@/assets/images/small-truck.png"),
    },
    {
      label: "Medium Truck",
      price: "$50+",
      image: require("@/assets/images/medium-truck.png"),
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-black">
      {/* Map area - you can replace this with MapView later */}
      <View className="h-64 bg-gray-800 justify-center items-center">
        <Text className="text-white text-xl font-bold">Famagusta</Text>
      </View>

      {/* Main content area */}
      <View className="bg-[#313035] rounded-t-[40px] p-5 pt-6 -mt-10 flex-1">
        {/* Tabs */}
        <View className="flex-row justify-center mb-6 space-x-4">
          <TouchableOpacity
            onPress={() => setActiveTab("Truck")}
            className={`px-4 py-2 rounded-full ${
              activeTab === "Truck" ? "bg-[#EE5316]" : "bg-[#404040]"
            }`}
          >
            <Text className="text-white font-bold">Truck Detail</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab("Ship")}
            className={`px-4 py-2 rounded-full ${
              activeTab === "Ship" ? "bg-[#EE5316]" : "bg-[#404040]"
            }`}
          >
            <Text className="text-white font-bold">Ship Detail</Text>
          </TouchableOpacity>
        </View>

        {/* Address form */}
        <View className="bg-white rounded-xl p-4 mb-6">
          <Text className="text-black font-semibold mb-2">From</Text>
          <TextInput
            placeholder="Street name, 4353436"
            className="bg-white border border-gray-300 rounded-md px-3 py-2 mb-3 text-black"
            placeholderTextColor="#666"
          />
          <Text className="text-black font-semibold mb-2">To</Text>
          <TextInput
            placeholder="Street name, 4353436"
            className="bg-white border border-gray-300 rounded-md px-3 py-2 text-black"
            placeholderTextColor="#666"
          />
        </View>

        {/* Dropdown placeholders */}
        <Text className="text-white mb-1">Size of Truck</Text>
        <View className="bg-gray-800 rounded-md p-3 mb-4">
          <Text className="text-gray-400">Select size</Text>
        </View>

        <Text className="text-white mb-1">Type of Rent</Text>
        <View className="bg-gray-800 rounded-md p-3 mb-4">
          <Text className="text-gray-400">Select rent type</Text>
        </View>

        {/* Truck type cards */}
        <Text className="text-white text-lg font-bold mb-2">Type of truck</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
          {trucks.map((truck, index) => (
            <View
              key={index}
              className="w-36 bg-gray-800 rounded-xl p-4 mr-3 items-center"
            >
              <Image
                source={truck.image}
                className="w-full h-20 mb-2"
                resizeMode="contain"
              />
              <Text className="text-white font-bold text-center">{truck.label}</Text>
              <Text className="text-orange-400">{truck.price}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Book now */}
        <TouchableOpacity className="bg-orange-500 py-4 rounded-full items-center">
          <Text className="text-white font-bold text-lg">Book now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OrderScreen;
