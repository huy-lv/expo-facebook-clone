import Comments from "./Comments";
import GroupScreen from "./GroupTab";
import Home from "./Home";
import NotificationScreen from "./NotificationTab";
import ProfileScreen from "./ProfileTab";
import ShortCutScreen from "./ShortCutTab";
import { TransitionPresets } from "@react-navigation/stack";
import WatchScreen from "./WatchTab";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useIsFocused } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export const HomeTab = () => {
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

export const GroupTab = () => {
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

export const WatchTab = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Watch" component={WatchScreenWithIsFocused} />
    </Stack.Navigator>
  );
};

export const ProfileTab = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export const NotificationTab = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Notification" component={NotificationScreen} />
    </Stack.Navigator>
  );
};

export const ShortCutTab = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ShortCutIndex" component={ShortCutScreen} />
    </Stack.Navigator>
  );
};
