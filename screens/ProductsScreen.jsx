import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const products = [
  { id: 1, name: 'PS5', price: '$1000', imageUrl: require('../assets/img1.jpg') },
  { id: 2, name: 'Camera', price: '$200', imageUrl: require('../assets/img2.jpg') },
  { id: 3, name: 'Shoes', price: '$30', imageUrl: require('../assets/img3.jpg') },
  { id: 4, name: 'Refrigerator', price: '$300', imageUrl: require('../assets/img4.jpg') },
  { id: 5, name: 'Home Appliances', price: '$300', imageUrl: require('../assets/img5.jpg') },
];

const ProductsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.productItem} onPress={() => navigation.navigate('ProductDetails', { product: item })}>
            <Image source={item.imageUrl} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            <TouchableOpacity style={styles.detailsButton} onPress={() => navigation.navigate('ProductDetails', { product: item })}>
              <Text style={styles.detailsButtonText}>View Details</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  productItem: {
    marginBottom: 20,
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productPrice: {
    fontSize: 16,
    color: 'gray',
  },
  detailsButton: {
    backgroundColor: '#0d6efd',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  detailsButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ProductsScreen;
