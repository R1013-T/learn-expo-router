import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Page() {
  return (
    <View>
      <Text>User Page</Text>
      <Link href="/">Home</Link>
    </View>
  )
}