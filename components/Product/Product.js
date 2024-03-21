import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import ButtonShop from "../ButtonShop";
import Icon from "react-native-vector-icons/Ionicons";
import IconShop from "react-native-vector-icons/AntDesign";

export function Product() {
  const route = useRoute();
  const navigation = useNavigation();
  const { user, description, urlImg, price } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={30} />
      </TouchableOpacity>
      <Text style={styles.title}>{user}</Text>
      <Text style={styles.description}>{description}</Text>
      <Image
        source={{
          uri: urlImg,
        }}
        style={styles.image}
      />
      <Text style={styles.priceStyles}>Price: S/.{price}</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => console.log("Agregado al carrito " + user)}
      >
        <Text style={styles.buttonText}>Agregar al carrito</Text>
        <IconShop name="shoppingcart" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    textTransform: "uppercase",
  },
  user: {
    fontSize: 11,
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    textAlign: "left",
    marginBottom: 20,
    fontWeight: "500",
    color: "#333333",
  },
  image: {
    width: "100%",
    height: 300,
    paddingBottom: 10,
    borderRadius: 10,
  },
  buttonStyle: {
    marginTop: 10,
    fontSize: 30,
    width: "100%",
    backgroundColor: "#d90429",
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
  priceStyles: {
    fontSize: 17,
    paddingTop: 12,
    paddingBottom: 9,
    textAlign: "right",
  },
});
