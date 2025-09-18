import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image } from "react-native";

import ApiService from "../../services/Api";


const MoviesScreen = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const loadMovies = async () => {
      try {

         const { data } = await ApiService.get("/discover/movie", {
          include_adult: false,
          include_video: false,
          language: "en-US",
          page: 1,
          sort_by: "popularity.desc",
        });
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    loadMovies();
  }, []);

  const renderItem = ({ item }) => (
    <View className="flex-row mb-4 bg-white rounded-xl overflow-hidden shadow">
      {item.poster_path && (
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
          className="w-[100px] h-[150px]"
        />
      )}
      <View className="flex-1 p-3 justify-center">
        <Text className="text-lg font-bold">{item.title}</Text>
        <Text className="mt-1 text-gray-600">⭐ {item.vote_average}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={movies}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 10 }}
    />
  );
};

export default MoviesScreen;
