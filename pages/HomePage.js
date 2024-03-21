import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const numColumns = 2;
const width = Dimensions.get("window").width / numColumns;

export function HomePage() {
  const navigation = useNavigation();

  const data = [
    {
      key: "1",
      user: "Polo",
      description:
        "Description Description Description Description v Description Description Description Description Description Description ",
      urlImg:
        "https://basisperu.com/cdn/shop/products/polohombreazulino.jpg?v=1705507196&width=1445",
      price: 20.7,
      tags: [
        {
          tagName: "Ropa",
        },
      ],
      stock: 20,
    },
    {
      key: "2",
      user: "Laptop",
      description:
        "Description Description Description Description v Description Description Description Description Description Description ",
      urlImg:
        "https://cdnx.jumpseller.com/motics/image/41983488/resize/1800/1800?1699718324",
      price: 2300.0,
      tags: [
        {
          tagName: "Tecnologia",
        },
        {
          tagName: "Internet",
        },
        {
          tagName: "Gamer",
        },
      ],
      stock: 11,
    },
    {
      key: "3",
      user: "Bicicleta",
      description:
        "Description Description Description Description v Description Description Description Description Description Description ",
      urlImg:
        "https://gbi.pe/wp-content/uploads/2022/04/BICICLETA-MONTALNERA-ROJA-SUPERFLY.jpg",
      price: 120.0,
      tags: [
        {
          tagName: "Deportivo",
        },
        {
          tagName: "Saludable",
        },
      ],
      stock: 10,
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        navigation.navigate("Product", item);
      }}
    >
      <Image source={{ uri: item.urlImg }} style={styles.image} />
      <Text style={{ fontSize: 18 }}>{item.user}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text
        style={{ fontSize: 30, fontWeight: "bold", textTransform: "uppercase" }}
      >
        Tienda Rust
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        numColumns={numColumns}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  itemContainer: {
    width: width - 20,
    margin: 5,
    alignItems: "center",
    borderRadius: 10,
    paddingTop: 18,
  },
  image: {
    width: "100%",
    aspectRatio: 1, // Mantener relación de aspecto cuadrada
    borderRadius: 10,
  },
});
