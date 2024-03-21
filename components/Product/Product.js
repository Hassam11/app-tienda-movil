import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import IconShop from "react-native-vector-icons/AntDesign";
import IconMore from "react-native-vector-icons/Feather";

export function Product() {
  const route = useRoute();
  const navigation = useNavigation();
  const { user, description, urlImg, price, tags, stock } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log("Agregado al carrito " + user + " con cantidad " + quantity);
    setModalVisible(true);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      console.log("La cantidad no puede ser menor que 0");
    }
  };

  const increaseQuantity = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    } else {
      console.log("La cantidad no puede superar el stock");
    }
  };

  const CloseModal = () => {
    setModalVisible(false);
    setQuantity(1);
  };

  const formatPrice = (price) => {
    return price.toLocaleString("es-PE", {
      style: "currency",
      currency: "PEN",
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ paddingBottom: 8 }}
      >
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
      <View style={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{tag.tagName}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.stockStyle}>En Stock: {stock}</Text>
      <Text style={styles.priceStyles}>Price: {formatPrice(price)}</Text>
      <TouchableOpacity style={styles.buttonStyle} onPress={handleAddToCart}>
        <Text style={styles.buttonText}>Agregar al carrito</Text>
        <IconShop name="shoppingcart" size={30} color="white" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.ContentModelInfoBreve}>
              <Text style={styles.ContentModelTextBreve}>{user}</Text>
              <Text style={styles.ContentModelTextDesc}>
                Precio: {formatPrice(price * quantity)}
              </Text>

              <Text style={styles.modalText}>Cantidad: {quantity}</Text>
            </View>
            <View style={styles.quantityStyle}>
              <TouchableOpacity
                onPress={() => decreaseQuantity()}
                disabled={quantity === 0}
              >
                <IconMore
                  name="minus"
                  size={30}
                  style={[
                    styles.button,
                    quantity === 0 && styles.disabledButton,
                  ]}
                />
              </TouchableOpacity>
              <Text style={styles.modalText}>Cantidad: {quantity}</Text>
              <TouchableOpacity
                onPress={() => increaseQuantity()}
                disabled={quantity >= stock}
              >
                <IconMore
                  name="plus"
                  size={30}
                  style={[
                    styles.button,
                    quantity >= stock && styles.disabledButton,
                  ]}
                />
              </TouchableOpacity>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={CloseModal}
            >
              <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  description: {
    fontSize: 15,
    marginBottom: 20,
    fontWeight: "500",
    color: "#333333",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
  buttonStyle: {
    marginTop: 10,
    width: "100%",
    backgroundColor: "#d90429",
    paddingVertical: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    marginRight: 10,
  },
  priceStyles: {
    fontSize: 17,
    paddingTop: 12,
    paddingBottom: 9,
    textAlign: "right",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  tag: {
    backgroundColor: "#fca311",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 5,
    marginBottom: 5,
  },
  tagText: {
    color: "#ffffff",
  },
  stockStyle: {
    fontSize: 16,
    color: "gray",
  },
  // Estilos para el modal
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fefcfb",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },

  buttonClose: {
    backgroundColor: "#386fa4",
    borderRadius: 10,
    margin: "auto",
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  quantityStyle: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  disabledButton: {
    color: "#dce1de",
  },
  ContentModelInfoBreve: {
    textAlign: "left",
  },
  ContentModelTextBreve: {
    fontSize: 20,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  ContentModelTextDesc: {
    fontSize: 17,
    fontWeight: "500",
  },
});
