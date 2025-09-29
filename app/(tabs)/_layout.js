import { Tabs } from "expo-router";
// import { House, Search, Save, UserRoundPen } from "lucide-react-native";
import { Image, ImageBackground, Text, View } from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

// const icons = {
//   Home: House,
//   Search: Search,
//   Saved: Save,
//   Profile: UserRoundPen,
// };

const TabIcon = ({ focused, icon, title }) => {
  // const IconComponent = icons[title];

  // if(focused){
  //   return (
  //     <ImageBackground
  //       source={images.highlight}
  //       className="flex flex-row w-full flex-1 min-w-[110px] min-h-[50px] justify-center items-center rounded-full overflow-hidden"
  //     >
  //       <IconComponent color="black" size={24} />
  //       <Text className="text-secondary ml-2 text-base font-semibold">
  //         {title}
  //       </Text>
  //     </ImageBackground>
  //   );
  // }
  // return (
  //   <View className="size-full justify-center mt-2 rounded-full">
  //       <IconComponent color="white" size={24} />
  //   </View>
  // )

    if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icon} tintColor="#151312" className="size-5" />
        <Text className="text-secondary text-base font-semibold ml-2">
          {title}
        </Text>
      </ImageBackground>
    );
  }

  return (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <Image source={icon} tintColor="#A8B5DB" className="size-5" />
    </View>
  );
};

const _Layout = () => {
  return (

    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0F0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0F0D23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "index",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Search" />
          ),
        }}
      />

      <Tabs.Screen
        name="save"
        options={{
          title: "Save",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.save} title="Save" />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="Profile" />
          ),
        }}
      />
    </Tabs>

    // <Tabs
    //   screenOptions={{
    //     tabBarShowLabel: false,
    //     tabBarItemStyle: {
    //       width: "100%",
    //       height: "100%",
    //       justifyContent: "center",
    //       alignItems: "center",
    //     },
    //     tabBarStyle: {
    //       backgroundColor: '#0f0D23',
    //       borderRadius: 50,
    //       marginHorizontal: 20,
    //       marginBottom: 35,
    //       height: 45,
    //       position: 'absolute',
    //       overflow: "hidden",
    //       borderWidth: 1,
    //       borderColor: '0f0d23'
    //     },
    //   }}
    // >
    //   <Tabs.Screen
    //     name="index"
    //     options={{
    //       headerShown: false,
    //       title: "Home",
    //       tabBarIcon: ({ focused }) => (
    //         <TabIcon focused={focused} title="Home" />
    //       ),
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="search"
    //     options={{
    //       headerShown: false,
    //       title: "Search",
    //       tabBarIcon: ({ focused }) => (
    //         <TabIcon focused={focused} title="Search" />
    //       ),
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="saved"
    //     options={{
    //       headerShown: false,
    //       title: "Saved",
    //       tabBarIcon: ({ focused }) => (
    //         <TabIcon focused={focused} title="Saved" />
    //       ),
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="profile"
    //     options={{
    //       headerShown: false,
    //       title: "Profile",
    //       tabBarIcon: ({ focused }) => (
    //         <TabIcon focused={focused} title="Profile" />
    //       ),
    //     }}
    //   />
    // </Tabs>
  );
};

export default _Layout;
