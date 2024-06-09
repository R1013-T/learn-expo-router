import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Page() {
  return (
    <View>
      <Text>about page</Text>
      <Link href="/">Home</Link>
    </View>
  )
}