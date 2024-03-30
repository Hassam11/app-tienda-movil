import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { CartContext } from "../context/CartContext";

export const ShoppingCart = () => {
  const { cartItems, removeItemFromCart, clearCart } = useContext(CartContext);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemInfo}>
        <Image source={{ uri: item.urlImg }} style={styles.image} />
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>
            Precio: {formatPrice(item.price * item.quantity)}
          </Text>
        </View>
      </View>
      <View style={styles.itemActions}>
        <Text style={styles.itemQuantity}>Cantidad: {item.quantity}</Text>
        <TouchableOpacity
          style={styles.itemButton}
          onPress={() => removeItemFromCart(item)}
        >
          <Text style={{ textTransform: "uppercase", color: "white" }}>
            Quitar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const formatPrice = (price) => {
    return price.toLocaleString("es-PE", {
      style: "currency",
      currency: "PEN",
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrito de Compras</Text>
      {cartItems.length === 0 ? (
        <Text>No hay productos en el carrito</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
      <TouchableOpacity onPress={clearCart} style={styles.clearButton}>
        <Text
          style={{ color: "white", textTransform: "uppercase", fontSize: 20 }}
        >
          {" "}
          Vaciar Carrito
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemInfo: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    // alignItems: "center",
  },
  itemTextContainer: {
    marginLeft: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: "#888",
  },
  itemActions: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemQuantity: {
    marginRight: 10,
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: 14,
  },
  itemButton: {
    marginTop: 6,
    width: "40%",
    backgroundColor: "#DDAC26",
    paddingVertical: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  clearButton: {
    marginTop: 10,
    width: "100%",
    backgroundColor: "#121212",
    paddingVertical: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonShop: {
    marginTop: 10,
    width: "100%",
    backgroundColor: "#d90429",
    paddingVertical: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default ShoppingCart;
