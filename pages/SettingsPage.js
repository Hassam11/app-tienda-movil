import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export function SettingsPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración</Text>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.optionText}>Perfil de usuario</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => navigation.navigate("Compras")}
      >
        <Text style={styles.optionText}>Historial de compras</Text>
      </TouchableOpacity>
    </View>
  );
}

const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsPage} />
      {/* Aquí puedes agregar otras pantallas de configuración si es necesario */}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  optionContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    width: "100%",
    alignItems: "center",
  },
  optionText: {
    fontSize: 18,
  },
});

export default SettingsStack;
