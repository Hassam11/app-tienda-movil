import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { HomePage } from "./pages/HomePage";
import { SettingsPage } from "./pages/SettingsPage";
import { ProductPage } from "./pages/ProductPage";
import { Product } from "./components/Product/Product";
import { CartShop } from "./pages/CartShop";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="HomePage" component={HomePage} />
        <Drawer.Screen name="SettingsPage" component={SettingsPage} />
        <Drawer.Screen name="ProductPage" component={ProductPage} />
        <Drawer.Screen name="CartShop" component={CartShop} />

        {/* <Drawer.Screen name="ProductDetail" component={ProductStack} /> */}
        <Stack.Screen name="Product" component={Product} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
