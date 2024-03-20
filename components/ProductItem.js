import React from "react";
import { Text, Image, View, Button } from "react-native";
import { useRoute } from "@react-navigation/native";

const ProductDetailScreen = () => {
  const route = useRoute();
  const { productId, title, description, imageUrl, price } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image source={{ uri: imageUrl }} style={{ width: 100, height: 100 }} />
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Button title={price} onPress={() => {}} />
    </View>
  );
};

export default ProductDetailScreen;
