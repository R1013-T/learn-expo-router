import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function ErrorBoundary(props) {
  const insets = useSafeAreaInsets();


  return (
    <View style={{ flex: 1, backgroundColor: "red", paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right, }}>
      <Text>{props.error.message}</Text>
      <Text onPress={props.retry}>Try Again?</Text>
    </View>
  );
}

export default function Page() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const params = useLocalSearchParams();

  useEffect(() => {
    router.setParams({ name: 'About' });
  }, [])

  return (
    <View
    >
      <Stack.Screen
        options={{
          title: params.name,
        }}
      />
      <Text>about page</Text>
      <Text
        onPress={() => {
          router.setParams({ name: 'Updated' });
        }}>
        Update the title
      </Text>
      <Link href="/">Home</Link>
    </View>
  )
}