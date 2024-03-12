import { View, Text } from "react-native";
import styles from "./style/DefaultComp.style";
const DefaultComp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hey World from my component</Text>
    </View>
  );
};

export default DefaultComp;
