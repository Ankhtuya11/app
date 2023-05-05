import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";

// Screens
import HomeScreen from "./src/screens/HomeScreen";
import TestScreen from "./src/screens/TestScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

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
              mIcon = focused ? " " : "head-question-outline";
            } else if (rn === ProName) {
              fIcon = focused ? "settings" : "settings-outline";
            }

            // You can return any component that you like here!
            return (
              (<Ionicons name={iconName} size={size} color={color} />),
              (
                <MaterialCommunityIcons
                  name={mIcon}
                  size={size}
                  color={color}
                />
              ),
              (<Feather name={fIcon} size={size} color={color} />)
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
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={TestName} component={TestScreen} />
        <Tab.Screen name={ProName} component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
