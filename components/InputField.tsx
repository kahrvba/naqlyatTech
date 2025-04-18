import React, { useState } from "react";
import {
    TextInput,
    View,
    Text,
    Image,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
} from "react-native";

import { InputFieldProps } from "@/types/type";

const InputField = ({
                        label,
                        icon,
                        secureTextEntry = false,
                        rightIcon,
                        labelStyle,
                        containerStyle,
                        inputStyle,
                        iconStyle,
                        className,
                        ...props
                    }: InputFieldProps) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className="my-2">
                    <Text className={`text-md font-JakartaSemiBold mb-2 ml-4 ${labelStyle}`}>
                        {label}
                    </Text>
                    <View
                        className={`flex flex-row justify-start items-center relative bg-white rounded-xl border ${
                            isFocused ? "border-[#EE5316]" : "border-neutral-400"
                        } ${containerStyle}`}
                    >
                        {icon && (
                            <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />
                        )}
                        <TextInput
                            className={`rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left`}
                            secureTextEntry={secureTextEntry}
                            placeholderTextColor="#9CA3AF"
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            {...props}
                        />
                        {rightIcon && (
                            <Image
                                source={rightIcon}
                                className={`w-6 h-6 mr-4 ${iconStyle}`}
                            />
                        )}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default InputField;
