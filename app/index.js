import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function Page() {
  return (
    <View>
      <Text>Home page</Text>
      <Link href="/about">About</Link>
      <Link href={{
        pathname: "/user/[id]",
        params: { id: 'bacon' }
      }} asChild>
        <Pressable>
          <Text>User</Text>
        </Pressable>
      </Link>
    </View>
  )
}
