import { Text, StyleSheet } from "react-native";

interface GreetingProps {
  name: string;
}

export function Greeting({ name }: GreetingProps) {
  return <Text style={styles.text}>Special GREETING, {name}!</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});
