import * as React from "react";

import { BASE_URL, STATUSBAR_HEIGHT } from "./src/constants";
import {
  CheckIn,
  FullPostTool,
  LiveStream,
  PhotoUploader,
} from "./src/screens/PostTools/";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";

import AvatarOptions from "./src/screens/ProfileTab/AvatarOptions";
import Camera from "./src/screens/CameraTool";
import Comments from "./src/screens/Comments";
import CommentsPopUp from "./src/screens/CommentsPopUp";
import EditPublicInfo from "./src/screens/ProfileTab/EditPublicInfo";
import FindFriends from "./src/screens/ProfileTab/FindFriends";
import FriendOptions from "./src/screens/ProfileTab/FriendOptions";
import FriendRequests from "./src/screens/ProfileTab/FriendRequests";
import FullFriends from "./src/screens/ProfileTab/FullFriends";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import GroupCategories from "./src/screens/GroupTab/GroupCategories";
import GroupCategory from "./src/screens/GroupTab/GroupCategory";
import GroupProfile from "./src/screens/GroupTab/Group";
import GroupScreen from "./src/screens/GroupTab";
import GroupSearch from "./src/screens/Search/GroupSearch";
import Home from "./src/screens/Home";
import Icon from "react-native-vector-icons/FontAwesome5";
import Marketplace from "./src/screens/ShortCutTab/Marketplace";
import MarketplaceArea from "./src/screens/ShortCutTab/MarketplaceArea";
import MarketplaceCategory from "./src/screens/ShortCutTab/MarketplaceCategory";
import MarketplaceProductDetail from "./src/screens/ShortCutTab/MarketplaceProductDetail";
import MarketplaceSearch from "./src/screens/Search/MarketplaceSearch";
import NotificationOptions from "./src/screens/NotificationTab/NotificationOptions";
import NotificationScreen from "./src/screens/NotificationTab";
import Page from "./src/screens/Pages";
import PagePostDetail from "./src/screens/Pages/PagePostDetail";
import PhotoChooser from "./src/screens/PhotoChooser";
import { Platform } from "react-native";
import PostDetail from "./src/screens/PostDetail";
import PostOptions from "./src/screens/PostOptions";
import ProfilePostOptions from "./src/screens/ProfileTab/ProfilePostOptions";
import ProfileScreen from "./src/screens/ProfileTab";
import ProfileSetting from "./src/screens/ProfileTab/ProfileSetting";
import ProfileX from "./src/screens/ProfileTab/ProfileX";
import { Provider } from "react-redux";
import Result from "./src/screens/Search/Result";
import Search from "./src/screens/Search/";
import SeenVideos from "./src/screens/WatchTab/SeenVideos";
import SharePost from "./src/screens/SharePost";
import ShortCutScreen from "./src/screens/ShortCutTab";
import StoryDetailScreen from "./src/screens/StoryDetail";
import WatchDetail from "./src/screens/WatchTab/WatchDetail";
import WatchDetailList from "./src/screens/WatchTab/WatchDetailList";
import WatchOptions from "./src/screens/WatchTab/WatchOptions";
import WatchScreen from "./src/screens/WatchTab";
import WatchSearch from "./src/screens/Search/WatchSearch";
import axios from "axios";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { navigationRef } from "./src/rootNavigation";
import store from "./src/store";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();

axios.defaults.baseURL = BASE_URL;

const HomeTab = () => {
  // CameraRoll.getPhotos({
  // 	first: 20,
  // 	assetType: 'Photos',
  // }).then(result => {
  // 	console.log(result)
  // })
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalSlideFromBottomIOS,
        gestureResponseDistance: { vertical: 800 },
      }}
    >
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen
        options={{ cardStyle: { backgroundColor: "transparent" } }}
        name="Comments"
        component={Comments}
      />
    </Stack.Navigator>
  );
};

const GroupTab = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Group" component={GroupScreen} />
    </Stack.Navigator>
  );
};
const WatchScreenWithIsFocused = (props) => {
  const isFocused = useIsFocused();
  return <WatchScreen {...props} isFocused={isFocused}></WatchScreen>;
};
const WatchTab = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Watch" component={WatchScreenWithIsFocused} />
    </Stack.Navigator>
  );
};
const ProfileTab = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
const NotificationTab = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Notification" component={NotificationScreen} />
    </Stack.Navigator>
  );
};
const ShortCutTab = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ShortCutIndex" component={ShortCutScreen} />
    </Stack.Navigator>
  );
};
const MainTab = () => {
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
function App() {
  const TransitionPreset =
    Platform.OS === "ios" ? TransitionPresets.ModalSlideFromBottomIOS : {};
  const navigationOptions = {
    headerShown: false,
    ...TransitionPreset,
    gestureResponseDistance: {
      vertical: 800,
    },
  };
  return (
    <Provider store={store}>
      {/* <GestureHandlerRootView> */}
      <NavigationContainer ref={navigationRef}>
        <RootStack.Navigator screenOptions={navigationOptions}>
          <RootStack.Screen component={MainTab} name="MainTab" />
          <RootStack.Screen name="StoryDetail" component={StoryDetailScreen} />
          <RootStack.Screen name="PostDetail" component={PostDetail} />

          <RootStack.Screen
            options={{
              gestureEnabled: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
            name="Marketplace"
            component={Marketplace}
          />
          <RootStack.Screen
            options={{
              gestureEnabled: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
            name="MarketplaceSearch"
            component={MarketplaceSearch}
          />
          <RootStack.Screen
            options={{
              gestureEnabled: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
            name="MarketplaceProductDetail"
            component={MarketplaceProductDetail}
          />
          <RootStack.Screen
            options={{
              gestureEnabled: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
            name="MarketplaceCategory"
            component={MarketplaceCategory}
          />
          <RootStack.Screen
            options={{
              gestureEnabled: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
            name="MarketplaceArea"
            component={MarketplaceArea}
          />

          <RootStack.Screen
            options={{ gestureEnabled: false }}
            name="Page"
            component={Page}
          />
          <RootStack.Screen
            options={{ gestureEnabled: true }}
            name="PagePostDetail"
            component={PagePostDetail}
          />

          <RootStack.Screen
            options={{ gestureEnabled: false }}
            name="PhotoChooser"
            component={PhotoChooser}
          />
          <RootStack.Screen
            options={{ gestureEnabled: false }}
            name="Camera"
            component={Camera}
          />
          <RootStack.Screen
            options={{ gestureEnabled: false }}
            name="Search"
            component={Search}
          />
          <RootStack.Screen
            options={{
              gestureEnabled: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
            name="Result"
            component={Result}
          />

          <RootStack.Screen
            options={{ cardStyle: { backgroundColor: "transparent" } }}
            name="WatchOptions"
            component={WatchOptions}
          />
          <RootStack.Screen
            options={{
              gestureEnabled: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
            name="WatchSearch"
            component={WatchSearch}
          />
          <RootStack.Screen
            options={{
              gestureEnabled: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
            name="SeenVideos"
            component={SeenVideos}
          />
          <RootStack.Screen
            options={{ gestureEnabled: true }}
            name="WatchDetail"
            component={WatchDetail}
          />
          <RootStack.Screen
            options={{
              gestureEnabled: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
            name="WatchDetailList"
            component={WatchDetailList}
          />

          <RootStack.Screen
            options={{ cardStyle: { backgroundColor: "transparent" } }}
            name="ProfilePostOptions"
            component={ProfilePostOptions}
          />
          <RootStack.Screen
            options={{
              gestureEnabled: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
            name="EditPublicInfo"
            component={EditPublicInfo}
          />
          <RootStack.Screen
            options={{
              gestureEnabled: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
            name="FullFriends"
            component={FullFriends}
          />
          <RootStack.Screen
            options={{ cardStyle: { backgroundColor: "transparent" } }}
            name="FriendOptions"
            component={FriendOptions}
          />
          <RootStack.Screen
            options={{
              gestureEnabled: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
            name="FindFriends"
            component={FindFriends}
          />
          <RootStack.Screen
            options={{ gestureEnabled: false }}
            name="FriendRequests"
            component={FriendRequests}
          />
          <RootStack.Screen
            options={{
              gestureEnabled: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
            name="ProfileSetting"
            component={ProfileSetting}
          />
          <RootStack.Screen
            options={{ gestureEnabled: false }}
            name="ProfileX"
            component={ProfileX}
          />
          <RootStack.Screen
            options={{ cardStyle: { backgroundColor: "transparent" } }}
            name="AvatarOptions"
            component={AvatarOptions}
          />

          <RootStack.Screen
            options={{ cardStyle: { backgroundColor: "transparent" } }}
            name="NotificationOptions"
            component={NotificationOptions}
          />

          <RootStack.Screen
            options={{
              gestureEnabled: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
            name="GroupCategory"
            component={GroupCategory}
          />
          <RootStack.Screen
            options={{
              gestureEnabled: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
            name="GroupCategories"
            component={GroupCategories}
          />
          <RootStack.Screen
            options={{ gestureEnabled: false }}
            name="GroupSearch"
            component={GroupSearch}
          />
          <RootStack.Screen
            options={{
              gestureEnabled: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
            name="GroupProfile"
            component={GroupProfile}
          />

          <RootStack.Screen
            options={{ cardStyle: { backgroundColor: "transparent" } }}
            name="CommentsPopUp"
            component={CommentsPopUp}
          />
          <RootStack.Screen
            options={{ cardStyle: { backgroundColor: "transparent" } }}
            name="SharePost"
            component={SharePost}
          />
          <RootStack.Screen
            options={{ cardStyle: { backgroundColor: "transparent" } }}
            name="PostOptions"
            component={PostOptions}
          />
          <RootStack.Screen
            options={{ gestureEnabled: false }}
            name="FullPostTool"
            component={FullPostTool}
          />
          <RootStack.Screen name="CheckIn" component={CheckIn} />
          <RootStack.Screen name="PhotoUploader" component={PhotoUploader} />
          <RootStack.Screen name="LiveStream" component={LiveStream} />
        </RootStack.Navigator>
      </NavigationContainer>
      {/* </GestureHandlerRootView> */}
    </Provider>
  );
}
export default App;
