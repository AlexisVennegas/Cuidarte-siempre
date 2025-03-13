import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import ReservationsScreen from "../screens/ReservationsScreen";
import HelpScreen from "../screens/HelpScreen";
import AccountScreen from "../screens/AccountScreen";
import AlertsScreen from "../screens/AlertsScreen";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HOME"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Image
                source={require("../../assets/home.png")}
                style={{ width: 24, height: 24 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="MIS RESERVAS"
          component={ReservationsScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={require("../../assets/calendar.png")}
                style={{ width: 24, height: 24 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="AYUDA"
          component={HelpScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={require("../../assets/help.png")}
                style={{ width: 24, height: 24 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ALERTAS"
          component={AccountScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={require("../../assets/alert.png")}
                style={{ width: 24, height: 24 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="MI CUENTA"
          component={AlertsScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={require("../../assets/account.png")}
                style={{ width: 24, height: 24 }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
