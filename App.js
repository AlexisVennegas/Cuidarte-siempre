import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigator from "./src/navigation/AppNavigator";
export default function App() {
  // return (
  //   <View style={styles.container}>
  //     <Text>hola como estamos</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
return (
<GestureHandlerRootView style={{ flex: 1 }}>
    <AppNavigator />
</GestureHandlerRootView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
