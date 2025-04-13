import { Stack } from 'expo-router';
const Layout = () => {
  return(
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="join-as" options={{ headerShown: false }} />
      <Stack.Screen name="register-as" options={{ headerShown: false }} />
      <Stack.Screen name="HomeAfterRegistration" options={{ headerShown: false }} />
    </Stack>
  ) 
};

export default Layout;
