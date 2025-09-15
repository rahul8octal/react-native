import { Tabs } from "expo-router";
import { House, Search, Save, UserRoundPen } from "lucide-react-native";

const _Layout = () => {
  return (
    <Tabs screenOptions={{ 
      tabBarShowLabel:true,
      tabBarActiveTintColor: "green",
      tabBarItemStyle: {
        width: '100%',
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
      },
      tabBarStyle: {
        borderTopWidth: 0,
        elevation: 0,
        height: 70,
      },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarLabel: "Home",
          tabBarIcon: () => <House color="black" size={24} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          title: "Search",
          tabBarLabel: "Search",
          tabBarIcon: () => <Search color="black" size={24} />,
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
          title: "Saved",
          tabBarLabel: "Saved",
          tabBarIcon: () => <Save color="black" size={24} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarLabel: "Profile",
          tabBarIcon: () => <UserRoundPen color="black" size={24} />,
        }}
      />
    </Tabs>
  );
};

export default _Layout;
