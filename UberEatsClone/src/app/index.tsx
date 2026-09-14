import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Hello, World!</Text>
      <header className="header">
        <Text>Location icon</Text>
        <Text>“Calgary, AB”</Text>
        <Text>Down arrow</Text>
        <Text>Notification bell</Text>
      </header>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});