import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const apiUrl =
  "https://my-json-server.typicode.com/Hassam11/db-json-server-app/users";

export default function UserConfigPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const userData = data.find(
        (user) => user.user === username && user.contraseña === password
      );

      if (userData) {
        setUser(userData);
      } else {
        Alert.alert("Error", "Usuario o contraseña incorrectos");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      Alert.alert(
        "Error",
        "Ocurrió un error al iniciar sesión. Por favor, inténtalo de nuevo más tarde."
      );
    }
  };

  const handleLogout = () => {
    setUser(null);
    setUsername("");
    setPassword("");
  };

  return (
    <View style={styles.container}>
      {user ? (
        <View style={styles.userDataContainer}>
          <Image source={{ uri: user.imgAvatar }} style={styles.avatar} />
          <Text style={styles.username}>Nombre de usuario: {user.user}</Text>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.logoutText}>Salir</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ width: "100%" }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Inicio de sesión
          </Text>
          <TextInput
            placeholder="Nombre de usuario"
            onChangeText={(text) => setUsername(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Contraseña"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            style={styles.input}
          />
          <TouchableOpacity onPress={handleLogin} style={styles.buttonLogin}>
            <Text style={styles.textLogin}>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  userDataContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  username: {
    fontSize: 18,
  },
  logoutText: {
    fontSize: 16,
    color: "blue",
    marginTop: 10,
  },
  buttonLogin: {
    width: "100%",
    backgroundColor: "#003049",
    padding: 10,
    borderRadius: 10,
  },
  textLogin: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
    textAlign: "center",
  },
});
