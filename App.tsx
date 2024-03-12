import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import DefaultComp from "./components/default-comp/DefaultComp.style";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Hello world</Text>
    //   <StatusBar style="auto" />
    // </View>
    <DefaultComp />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
