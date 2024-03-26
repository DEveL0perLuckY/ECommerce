import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import ProductsScreen from "./screens/ProductsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import { CartProvider } from "./CartContext";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "orange" },
              headerTitleStyle: {
                color: "white",
                fontWeight: "bold",
              },
            }}
          >
            <Stack.Screen
              name="Main"
              component={MainTabs}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Products"
              component={ProductsScreen}
              options={{
                title: "Products",
              }}
            />

            <Stack.Screen
              name="ProductDetails"
              component={ProductDetailsScreen} //this should work now
              options={{
                title: "Product Details",
              }}
            />
          </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
}
