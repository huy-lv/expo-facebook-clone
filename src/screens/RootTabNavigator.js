import {
  GroupTab,
  HomeTab,
  NotificationTab,
  ProfileTab,
  ShortCutTab,
  WatchTab,
} from "./RootStackNavigator";

import Icon from "react-native-vector-icons/FontAwesome5";
import { STATUSBAR_HEIGHT } from "../constants";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export const RootTabNavigator = () => {
  const navigationOptions = {
    style: {
      paddingTop: STATUSBAR_HEIGHT,
    },
    showIcon: true,
    showLabel: false,
  };
  return (
    <Tab.Navigator screenOptions={navigationOptions}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ tintColor, focused }) => (
            <Icon
              name="home"
              size={20}
              color={focused ? "#318bfb" : "#ddd"}
            ></Icon>
          ),
        }}
        name="HomeTab"
        component={HomeTab}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ tintColor, focused }) => (
            <Icon
              name="users"
              size={20}
              color={focused ? "#318bfb" : "#ddd"}
            ></Icon>
          ),
        }}
        name="Group"
        component={GroupTab}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ tintColor, focused }) => (
            <Icon
              name="video"
              size={20}
              color={focused ? "#318bfb" : "#ddd"}
            ></Icon>
          ),
        }}
        name="Watch"
        component={WatchTab}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ tintColor, focused }) => (
            <Icon
              name="user-circle"
              size={22}
              color={focused ? "#318bfb" : "#ddd"}
            ></Icon>
          ),
        }}
        name="Profile"
        component={ProfileTab}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ tintColor, focused }) => (
            <Icon
              name="bell"
              size={22}
              color={focused ? "#318bfb" : "#ddd"}
            ></Icon>
          ),
        }}
        name="Notification"
        component={NotificationTab}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ tintColor, focused }) => (
            <Icon
              name="bars"
              size={20}
              color={focused ? "#318bfb" : "#ddd"}
            ></Icon>
          ),
        }}
        name="ShortCut"
        component={ShortCutTab}
      />
    </Tab.Navigator>
  );
};
