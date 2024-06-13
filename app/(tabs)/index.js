import { Link, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Page() {
  const insets = useSafeAreaInsets();

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <Text>Home page</Text>
      <Link href="/about" style={{
        ...styles.link,
        fontFamily: 'Inter_900Black',
      }}>About</Link>
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

const styles = StyleSheet.create({
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 100,
    padding: 10,
  }
});