import React from "react";
import { View, Text, Button,ToastAndroid, Image, StyleSheet } from "react-native";
import { useCart } from "../CartContext";
const showToastWithGravityAndOffset = () => {
  ToastAndroid.showWithGravityAndOffset(
    "Items added to cart successfully",
    ToastAndroid.SHORT,
    ToastAndroid.CENTER,
    25,
    50
  );
};
const ProductDetailsScreen = ({ route ,navigation }) => {
  const { product } = route.params;
  const { addToCart } = useCart();

  return (
    <View style={styles.container}>
      <Image source={product.imageUrl} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sed egestas egestas
        fringilla phasellus faucibus scelerisque. Nisi est sit amet facilisis.
        Pretium nibh ipsum consequat nisl vel pretium lectus. Semper feugiat
        nibh sed pulvinar proin gravida.
      </Text>
      <Button
        title="Add to Cart"
        onPress={() => {
          addToCart(product);
          navigation.navigate('Cart');
          showToastWithGravityAndOffset();
        }}
      />
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
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    marginBottom: 10,
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
  },
});

export default ProductDetailsScreen;
