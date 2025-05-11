import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image,} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import {icons} from "@/constants";

interface MenuItemProps {
    title: string;
    onPress: () => void;
}

interface SidebarMenuProps {
    onClose?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            className="flex-row items-center justify-between py-4 px-5 border-b border-gray-50"
            onPress={onPress}
        >
            <Text className="text-base text-black font-JakartaBold">{title}</Text>
            <Feather name="chevron-right" size={30} color="#000000" className="mr-10" />
        </TouchableOpacity>
    );
};

const ProfileSection: React.FC = () => {
    return (
        <View className="py-6 px-5 flex flex-row items-start">
            <View className="w-10 h-10 bg-gray-100 justify-center items-center mb-2 mx-3">
            </View>
            <View>
                <Text className="text-base font-JakartaMedium text-gray-900 mt-1">
                    Mohammed Ahmed
                </Text>
                <Text className="text-gray-300">moahmmed@gmail.com</Text>
            </View>
        </View>
    );
};

const SidebarMenu: React.FC<SidebarMenuProps> = ({ onClose }) => {
    const handleMenuItemPress = (screen: string) => {
        try {
            router.push(`//(root)/join-as`);
        } catch (error) {
            console.error(`Navigation error: ${error}`);
        } finally {
            if (onClose) onClose();
        }
    };

    const handleLogout = () => {
        try {
            router.replace('/(auth)/sign-in');
        } catch (error) {
            console.error(`Logout error: ${error}`);
        } finally {
            if (onClose) onClose();
        }
    };

    return (
        <SafeAreaView style={{
            flex: 1,
            transform: [{ rotate: '4deg' }] // Counter-rotate to neutralize parent rotation
        }}>
            <View style={{
                flex: 1,
                // Apply opposite rotation to content
            }}>
                <ScrollView 
                    className="flex-1" 
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                >
                    <View className="px-6">
                        <ProfileSection />
                        <View className="mt-2.5">
                            <MenuItem
                                title="My Backage"
                                onPress={() => handleMenuItemPress('MyBackage')}
                            />
                            <MenuItem
                                title="Offers"
                                onPress={() => handleMenuItemPress('Offers')}
                            />
                            <MenuItem
                                title="Settings"
                                onPress={() => handleMenuItemPress('Settings')}
                            />
                            <MenuItem
                                title="Help and Support"
                                onPress={() => handleMenuItemPress('HelpSupport')}
                            />
                            <MenuItem
                                title="Privacy & Policy"
                                onPress={() => handleMenuItemPress('PrivacyPolicy')}
                            />
                        </View>
                    </View>
                </ScrollView>

                <TouchableOpacity
                    className="mx-5 mb-8 py-3 items-center justify-center"
                    onPress={handleLogout}
                >
                    <Text className="text-base font-JakartaMedium text-red-500">Log Out</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default SidebarMenu;
