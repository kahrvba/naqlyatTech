import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" />
      <Stack.Screen name="sign-up" />
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="forgetPassword" />
      <Stack.Screen name="otpSent" />
      <Stack.Screen name="HomePlace" />
    </Stack>
  );
}