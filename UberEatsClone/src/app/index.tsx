import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <>
      <View style={styles.container}></View>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.locationGroup}>
            <Ionicons name="location-outline" size={20} color="black" />
            <Text>Calgary, AB</Text>
            <Ionicons name="chevron-down-outline" size={20} color="black" />
          </View>
          <Ionicons name="notifications-outline" size={20} color="black" />
        </View>
        <ScrollView horizontal={true} pagingEnabled={true}>
          <View style={styles.serviceItem}>
            <Text style={styles.serviceText}>All</Text>
            <Ionicons name="bag" size={28} color="black" />
          </View>

          <View style={styles.serviceItem}>
            <Text style={styles.serviceText}>Rides</Text>
            <Ionicons name="car" size={28} color="black" />
          </View>

          <View style={styles.serviceItem}>
            <Text style={styles.serviceText}>Grocery</Text>
            <Ionicons name="cart" size={28} color="black" />
          </View>

          <View style={styles.serviceItem}>
            <Text style={styles.serviceText}>Convenience</Text>
            <Ionicons name="storefront" size={28} color="black" />
          </View>
        </ScrollView>

        <ScrollView horizontal={true} pagingEnabled={true}>
          <View style={styles.categoryContainer}>
            <View style={styles.categoryItem}>
              <Ionicons name="cafe-outline" size={28} color="black" />
              <Text style={styles.categoryText}>Breakfast</Text>
            </View>

            <View style={styles.categoryItem}>
              <Ionicons name="cafe" size={28} color="black" />
              <Text style={styles.categoryText}>Coffee</Text>
            </View>

            <View style={styles.categoryItem}>
              <Ionicons name="restaurant-outline" size={28} color="black" />
              <Text style={styles.categoryText}>Chicken</Text>
            </View>

            <View style={styles.categoryItem}>
              <Ionicons name="pizza-outline" size={28} color="black" />
              <Text style={styles.categoryText}>Pizza</Text>
            </View>

            <View style={styles.categoryItem}>
              <Ionicons name="pricetag-outline" size={28} color="black" />
              <Text style={styles.categoryText}>Great Value</Text>
            </View>

            <View style={styles.categoryItem}>
              <Ionicons name="fish-outline" size={28} color="black" />
              <Text style={styles.categoryText}>Sushi</Text>
            </View>

            <View style={styles.categoryItem}>
              <Ionicons name="basket-outline" size={28} color="black" />
              <Text style={styles.categoryText}>Grocery</Text>
            </View>

            <View style={styles.categoryItem}>
              <Ionicons name="restaurant-outline" size={28} color="black" />
              <Text style={styles.categoryText}>Thai</Text>
            </View>

            <View style={styles.categoryItem}>
              <Ionicons name="ice-cream-outline" size={28} color="black" />
              <Text style={styles.categoryText}>Sweets</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.filters}>
          <Text>Pickup</Text>
          <Text>Offers</Text>
          <Text>Delivery fee</Text>
          <Text>Under 30</Text>
          <Ionicons name="chevron-down-outline" size={20} color="black" />
        </View>
        <View style={styles.description}>
          <Text style={styles.description}>
            Delivery Fees & Service Fees are charged for delivery orders in
            addition to item prices Learn more
          </Text>
        </View>
        <View style={styles.featured}>
          <Text style={styles.sectionText}>Featured on Uber Eats</Text>
        </View>
        <View style={styles.arrowright}>
          <Ionicons name="chevron-forward-outline" size={20} color="black" />
        </View>
        <View>
          <ScrollView horizontal={true} pagingEnabled={true}>
            <Image
              source={require("../../assets/images/starbucks.png")}
              style={{
                width: 190,
                height: 190,
                marginLeft: 10,
              }}
            />
            <Image
              source={require("../../assets/images/chaihut.png")}
              style={{ width: 180, height: 190, marginLeft: 10 }}
            />
            <Image
              source={require("../../assets/images/dq.png")}
              style={{
                width: 220,
                height: 180,
                marginLeft: 10,
              }}
            />
            <Image
              source={require("../../assets/images/subway.png")}
              style={{
                width: 180,
                height: 170,
                marginLeft: 10,
                marginRight: 10,
              }}
            />
            <Image
              source={require("../../assets/images/mcDon.png")}
              style={{ width: 180, height: 170, marginLeft: 10 }}
            />
          </ScrollView>
        </View>
        <View>
          <Text style={styles.sectionText}>Places you might like</Text>
        </View>
        <View style={styles.arrowright}>
          <Ionicons name="chevron-forward-outline" size={20} color="black" />
        </View>
        <View>
          <ScrollView horizontal={true} pagingEnabled={true}>
            <Image
              source={require("../../assets/images/walmart.png")}
              style={{ width: 220, height: 190, marginLeft: 10 }}
            />
            <Image
              source={require("../../assets/images/pizza.png")}
              style={{ width: 220, height: 190, marginLeft: 10 }}
            />
            <Image
              source={require("../../assets/images/superStore.png")}
              style={{
                width: 200,
                height: 180,
                marginLeft: 10,
                marginRight: 10,
              }}
            />
          </ScrollView>
          <Text></Text>
        </View>

        <View style={styles.alertButton}>
          <Pressable
            style={styles.alertButton}
            onPress={() =>
              Alert.alert("Alert", "Alert has been added to the system.")
            }
          >
            <Text style={styles.alertButtonText}>Press Me</Text>
          </Pressable>
        </View>
      </ScrollView>

      <View style={styles.bottomNavigation}>
        <View style={styles.iconButton}>
          <Ionicons name="home-outline" size={24} color="black" />
        </View>

        <View style={styles.iconButton}>
          <Ionicons name="map-outline" size={24} color="black" />
        </View>

        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={22} color="black" />
        </View>

        <View style={styles.iconButton}>
          <Ionicons name="cart-outline" size={24} color="black" />
        </View>

        <View style={styles.iconButton}>
          <Ionicons name="person-outline" size={24} color="black" />
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  scrollContent: {
    paddingBottom: 20,
  },

  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: "#ffffff",
  },

  notificationButton: {
    padding: 8,
    borderRadius: 20,
  },

  locationGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  serviceButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 28,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },

  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 28,
    paddingHorizontal: 20,
    marginTop: 10,
  },

  categoryText: {
    paddingVertical: 10,
    fontSize: 16,
  },

  filters: {
    flexDirection: "row",
    alignItems: "center",
    gap: 28,
    paddingHorizontal: 20,
    marginTop: 10,
  },

  description: {
    paddingHorizontal: 20,
    marginTop: 8,
  },

  featured: {
    paddingHorizontal: 20,
    paddingVertical: 14,
  },

  sectionText: {
    fontSize: 24,
    fontWeight: "700",
    paddingLeft: 11,
  },

  alertButton: {
    backgroundColor: "#db3939",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },

  iconButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },

  searchBox: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },

  arrowright: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bottomNavigation: {
    height: 75,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#dddddd",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  alertButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "none",
  },

serviceItem: {
  flexDirection: "row",
  alignItems: "center",
  gap: 10,
  paddingLeft: 10,
},



serviceText: {
  fontSize: 18,
},

categoryItem: {
  alignItems: "center",
  justifyContent: "center",
  marginRight: 20,
  gap: 6,
},





});
