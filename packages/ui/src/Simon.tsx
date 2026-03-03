import { Text, StyleSheet, Platform } from "react-native";

export function Simon() {
  return <Text style={styles.text}>Welcome to Galaxies.dev!</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: Platform.OS === 'kepler' ? '#ffcd1a' : '#ff0000',
  },
});
