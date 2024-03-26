import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Our E-commerce App!</Text>
      </View>
      <TouchableOpacity
        style={styles.allProductsContainer}
        onPress={() => navigation.navigate("Products")}
      >
        <Image
          source={require("../assets/img2.jpg")} // Change the path and image name as per your requirement
          style={styles.allProductsImage}
        />
        <Text style={styles.allProductsText}>View All Products</Text>
      </TouchableOpacity>

      {/* Category 1 */}
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Products", { category: "Category 1" })
          }
        >
          <Image
            source={require("../assets/img5.jpg")} // Change the path and image name as per your requirement
            style={styles.categoryImage}
          />
          <Text style={styles.categoryTitle}>Furniture</Text>
        </TouchableOpacity>
        <Text style={styles.categoryDescription}>
          Furniture can be sold assembled, partially assembled, or flat-pack.{" "}
        </Text>
      </View>

      {/* Category 2 */}
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Products", { category: "Category 2" })
          }
        >
          <Image
            source={require("../assets/img1.jpg")} // Change the path and image name as per your requirement
            style={styles.categoryImage}
          />
          <Text style={styles.categoryTitle}>Toys and games</Text>
        </TouchableOpacity>
        <Text style={styles.categoryDescription}>
          This category generates a lot of money quickly, but it is also highly
          dynamic, so you need to keep an eye on trends to continue making
          profits.{" "}
        </Text>
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Products", { category: "Category 2" })
          }
        >
          <Image
            source={require("../assets/img4.jpg")} // Change the path and image name as per your requirement
            style={styles.categoryImage}
          />
          <Text style={styles.categoryTitle}>Consumer electronics</Text>
        </TouchableOpacity>
        <Text style={styles.categoryDescription}>
          This is a popular category, and in 2020 electronics generated $117
          billion in revenue, which was 22% of the entire ecommerce market.
        </Text>
      </View>

      {/* Add more category sections as needed */}

      {/* All Products */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  categoryContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  categoryImage: {
    width: 200,
    height: 150,
    resizeMode: "cover",
    borderRadius: 10,
  },
  categoryTitle: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10,
  },
  categoryDescription: {
    textAlign: "center",
    marginTop: 5,
  },
  allProductsContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  allProductsImage: {
    width: 300,
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
  allProductsText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
});

export default HomeScreen;
