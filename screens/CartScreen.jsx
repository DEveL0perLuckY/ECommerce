import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ToastAndroid } from "react-native";
import { useCart } from "../CartContext";

const CartScreen = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, clearCart } = useCart();

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    ToastAndroid.show("Checkout successful!", ToastAndroid.SHORT);
    clearCart();
  };

  return (
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyCartText}>Your cart is empty</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Text style={styles.itemName}>{item.name}</Text>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
                    <Text style={styles.quantityButton}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantity}>{item.quantity}</Text>
                  <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
                    <Text style={styles.quantityButton}>+</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
            )}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={clearCart}>
              <Text style={styles.buttonText}>Clear Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.checkoutButton]} onPress={handleCheckout}>
              <Text style={styles.buttonText}>Checkout</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.totalPrice}>Total: ${getTotalPrice()}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  emptyCartText: {
    fontSize: 18,
    color: "gray",
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    fontSize: 20,
    paddingHorizontal: 8,
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  clearButton: {
    backgroundColor: "#ff6347",
  },
  checkoutButton: {
    backgroundColor: "#0d6efd",
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default CartScreen;
