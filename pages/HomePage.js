import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  Dimensions,
  Image,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const numColumns = 2;
const width = Dimensions.get("window").width / numColumns;

export function HomePage() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://my-json-server.typicode.com/Hassam11/db-json-server-app/data"
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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

  const filteredData = data.filter((item) =>
    item.user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
          textTransform: "uppercase",
          padding: 4,
        }}
      >
        Rust
      </Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        onChangeText={(text) => setSearchTerm(text)}
        value={searchTerm}
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
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
    aspectRatio: 1,
    borderRadius: 10,
  },
});
