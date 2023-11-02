import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Screens/Home";

const Drawer = createDrawerNavigator();

export default function Navigator(props) {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Hoje"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen name="Hoje">
          {(props) => <Home title={"Hoje"} {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name="Semana">
          {(props) => <Home title={"Semana"} {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name="Mês">
          {(props) => <Home title={"Mês"} {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
