import * as React from "react";

import {
  CheckIn,
  FullPostTool,
  LiveStream,
  PhotoUploader,
} from "./src/screens/PostTools/";
import { Platform, SafeAreaView } from "react-native";

import AvatarOptions from "./src/screens/ProfileTab/AvatarOptions";
import { BASE_URL } from "./src/constants";
import Camera from "./src/screens/CameraTool";
import CommentsPopUp from "./src/screens/CommentsPopUp";
import EditPublicInfo from "./src/screens/ProfileTab/EditPublicInfo";
import FindFriends from "./src/screens/ProfileTab/FindFriends";
import FriendOptions from "./src/screens/ProfileTab/FriendOptions";
import FriendRequests from "./src/screens/ProfileTab/FriendRequests";
import FullFriends from "./src/screens/ProfileTab/FullFriends";
import GroupCategories from "./src/screens/GroupTab/GroupCategories";
import GroupCategory from "./src/screens/GroupTab/GroupCategory";
import GroupProfile from "./src/screens/GroupTab/Group";
import GroupSearch from "./src/screens/Search/GroupSearch";
import Marketplace from "./src/screens/ShortCutTab/Marketplace";
import MarketplaceArea from "./src/screens/ShortCutTab/MarketplaceArea";
import MarketplaceCategory from "./src/screens/ShortCutTab/MarketplaceCategory";
import MarketplaceProductDetail from "./src/screens/ShortCutTab/MarketplaceProductDetail";
import MarketplaceSearch from "./src/screens/Search/MarketplaceSearch";
import { NavigationContainer } from "@react-navigation/native";
import NotificationOptions from "./src/screens/NotificationTab/NotificationOptions";
import Page from "./src/screens/Pages";
import PagePostDetail from "./src/screens/Pages/PagePostDetail";
import PhotoChooser from "./src/screens/PhotoChooser";
import PostDetail from "./src/screens/PostDetail";
import PostOptions from "./src/screens/PostOptions";
import ProfilePostOptions from "./src/screens/ProfileTab/ProfilePostOptions";
import ProfileSetting from "./src/screens/ProfileTab/ProfileSetting";
import ProfileX from "./src/screens/ProfileTab/ProfileX";
import { Provider } from "react-redux";
import Result from "./src/screens/Search/Result";
import { RootTabNavigator } from "./src/screens/RootTabNavigator";
import Search from "./src/screens/Search/";
import SeenVideos from "./src/screens/WatchTab/SeenVideos";
import SharePost from "./src/screens/SharePost";
import { StatusBar } from "expo-status-bar";
import StoryDetailScreen from "./src/screens/StoryDetail";
import { TransitionPresets } from "@react-navigation/stack";
import WatchDetail from "./src/screens/WatchTab/WatchDetail";
import WatchDetailList from "./src/screens/WatchTab/WatchDetailList";
import WatchOptions from "./src/screens/WatchTab/WatchOptions";
import WatchSearch from "./src/screens/Search/WatchSearch";
import axios from "axios";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { navigationRef } from "./src/rootNavigation";
import store from "./src/store";

const RootStack = createNativeStackNavigator();

axios.defaults.baseURL = BASE_URL;

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
      <SafeAreaView>
        <NavigationContainer ref={navigationRef}>
          <RootStack.Navigator screenOptions={navigationOptions}>
            <RootStack.Screen component={RootTabNavigator} name="MainTab" />
            <RootStack.Screen
              name="StoryDetail"
              component={StoryDetailScreen}
            />
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
      </SafeAreaView>
      {/* </GestureHandlerRootView> */}
    </Provider>
  );
}
export default App;
