import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Screens
import HomeScreen from "./src/screens/HomeScreen";
import TestScreen from "./src/screens/TestScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
// import { Header } from "react-native/Libraries/NewAppScreen";

//Screen names
const homeName = "Home";
const TestName = "Test";
const ProName = "Profile";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home";
            } else if (rn === TestName) {
              iconName = focused
                ? "head-question-outline"
                : "head-question-outline";
            } else if (rn === ProName) {
              iconName = focused ? "menu" : "menu";
            }

            // You can return any component that you like here!
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: "#ff6700",
          inactiveTintColor: "grey",
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 },
        }}
      >
        <Tab.Screen
          options={{ headerShown: false }}
          name={homeName}
          component={HomeScreen}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name={TestName}
          component={TestScreen}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name={ProName}
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
