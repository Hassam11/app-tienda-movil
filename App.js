import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { HomePage } from "./pages/HomePage";
import { SettingsPage } from "./pages/SettingsPage";
import { Product } from "./components/Product/Product";
import { CartShop } from "./pages/CartShop";
import UserConfigPage from "./pages/UserConfigPage";
import { CartProvider } from "./context/CartContext";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Inicio" component={HomePage} />
          <Drawer.Screen name="Configuración" component={SettingsPage} />
          <Drawer.Screen name="Compras" component={CartShop} />
          <Stack.Screen name="Product" component={Product} />
          <Drawer.Screen name="Login" component={UserConfigPage} />
        </Drawer.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
