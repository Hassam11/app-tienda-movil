import React from "react";
import { StyleSheet, View } from "react-native";
import { ShoppingCart } from "../components/ShoppingCart";

export function CartShop() {
  return (
    <View style={styles.container}>
      <ShoppingCart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
