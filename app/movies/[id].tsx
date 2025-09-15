import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const MovieDetails = () => {
     const { id } = useLocalSearchParams();
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-5xl text-blue-500 font-bold">movies: {id}</Text>
    </View>
  );
}

export default MovieDetails;
