import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      {/* <Stack.Screen name="forgetPassword" options={{ headerShown: false }} />
      <Stack.Screen name="otpSent" options={{ headerShown: false }} />
      <Stack.Screen name="createNewPassword" options={{ headerShown: false }} />
      <Stack.Screen name="fingerPrint" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" /> */}
    </Stack>
  );
};

export default Layout;
