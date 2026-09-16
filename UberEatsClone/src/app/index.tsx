import { ScrollView, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Index() {
  return (
    <ScrollView>
      <View style={styles.header}>
        <View style={styles.locationGroup}>
          <Ionicons name="location-outline" size={20} color="black" />
          <Text>Calgary, AB</Text>
          <Ionicons name="chevron-down-outline" size={20} color="black" />
        </View>

        <Ionicons name="notifications-outline" size={20} color="black" />
      </View>
      <View style={styles.serviceButton}>
        <Text style={styles.serviceText}>All</Text>
        <Text style={styles.serviceText}>Rides</Text>
        <Text style={styles.serviceText}>Grocery</Text>
        <Text style={styles.serviceText}>Convenience</Text>
      </View>
      <ScrollView horizontal={true} pagingEnabled={true}>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryText}>Breakfast</Text>
          <Text style={styles.categoryText}>Coffee</Text>
          <Text style={styles.categoryText}>Chicken</Text>
          <Text style={styles.categoryText}>Pizza</Text>
          <Text style={styles.categoryText}>Great Value</Text>
          <Text style={styles.categoryText}>Sushi</Text>
          <Text style={styles.categoryText}>Grocery</Text>
          <Text style={styles.categoryText}>Thai</Text>
          <Text style={styles.categoryText}>Sweets</Text>
        </View>
      </ScrollView>
      <View style={styles.navigation}>
        <Text>Home</Text>
        <Text>Map</Text>
        <Text>Search</Text>
        <Text>Cart</Text>
        <Text>Profile</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    backgroundColor: "lightblue",
    width: "100%",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },

  notificationButton: {
    backgroundColor: "lightcoral",
    padding: 10,
  },
  locationGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  serviceButton: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  serviceText: {
    padding: 10,
  },

  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },

  categoryText: {
    padding: 10,
  },

  navigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

//  comment
//   <ScrollView>
//     <View style={styles.container}>
// <button> Alert Button </button>
// date
