import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Hello, World!</Text>
      <ScrollView>
        <View style={styles.header}>
          <Text>Location icon</Text>
          <Text>“Calgary, AB”</Text>
          <Text>Down arrow</Text>
          <Text>Notification bell</Text>
        </View>
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
});