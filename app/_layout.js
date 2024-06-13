import { Slot, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import { useState } from 'react';

SplashScreen.preventAutoHideAsync();

export default function HomeLayout() {
  const [isReady, setReady] = useState(false);
  const [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      // SplashScreen.hideAsync();

      setTimeout(() => {
        // When all loading is setup, unmount the splash screen component.
        SplashScreen.hideAsync();
        setReady(true);
      }, 1000);
    }
  }, [fontsLoaded, fontError]);

  // Prevent rendering until the font has loaded or an error was returned
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    // <SafeAreaProvider>
    //   <Slot />
    // </SafeAreaProvider>
    <Stack>
      <Stack.Screen name="(tabs)" options={{
        headerShown: false,
      }} />
    </Stack>
  )
}