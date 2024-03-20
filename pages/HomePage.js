import React from "react";
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const numColumns = 2;
const width = Dimensions.get("window").width / numColumns;

export function HomePage() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Product", {
            user: "jane",
            description:
              "Description Description Description Description v Description Description Description Description Description Description ",
            urlImg:
              "https://content.skyscnr.com/m/2dcd7d0e6f086057/original/GettyImages-186142785.jpg?resize=2560px:1707px",
          });
        }}
      >
        <Text>Navigate to Product Detail</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Product", {
            user: "Laptop",
            description:
              "Description Description Description Description v Description Description Description Description Description Description ",
            urlImg:
              "https://cdnx.jumpseller.com/motics/image/41983488/resize/1800/1800?1699718324",
          });
        }}
      >
        <Text>Laptop Gamer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: width - 20,
    aspectRatio: 1, // Mantiene la relación de aspecto cuadrada
    margin: 5,
  },
  flatListContainer: {
    justifyContent: "space-between",
  },
});
