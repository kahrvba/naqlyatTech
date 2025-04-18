import { TouchableOpacity, Text } from "react-native";

import { ButtonProps } from "@/types/type";

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "secondary":
      return "bg-gray-500";
    case "danger":
      return "bg-red-500";
    case "success":
      return "bg-green-500";
    case "outline":
      return "bg-transparent";
    default:
      return "bg-[#EE5316]";
  }
};

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary":
      return "text-white";
    case "secondary":
      return "text-gray-100";
    case "danger":
      return "text-red-100";
    case "success":
      return "text-green-100";
    default:
      return "text-[#EE5316]";
  }
};

const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`rounded-[8px] p-3 flex flex-row justify-center items-center ${getBgVariantStyle(bgVariant)} ${className || ''}`}
      {...props}
    >
      {IconLeft && <IconLeft />}
      {title && (
        <Text className={`text-lg font-bold ${getTextVariantStyle(textVariant)}`}>
          {title}
        </Text>
      )}
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;
