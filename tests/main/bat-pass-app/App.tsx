import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Home from "./src/screens/Home";
import styles from "./src/screens/Style"

export default function App() {
  return (
    <View>
      <Home />
      <Text>Coringão</Text>
      <StatusBar style="auto" />
    </View>
  );
}