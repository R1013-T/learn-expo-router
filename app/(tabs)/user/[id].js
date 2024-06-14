import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Page() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Text>User Page: {id}</Text>
      <Link href="/">Home</Link>
      <Link href="/user/modal">Present modal</Link>
    </View>
  )
}