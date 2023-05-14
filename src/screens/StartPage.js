import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
//import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import React, { useLayoutEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
const StartPage = ({ navigation }) => {
  const categoryList = [
    {
      id: 9,
      name: "General Knowlage",
      image: require("../assets/images/generalknowlage.png"),
    },
    {
      id: 10,
      name: "Books",
      image: require("../assets/images/books.png"),
    },
    {
      id: 11,
      name: "Film",
      image: require("../assets/images/film.png"),
    },
    {
      id: 12,
      name: "Music",
      image: require("../assets/images/music.png"),
    },
    {
      id: 13,
      name: "Musicals & Theatres",
      image: require("../assets/images/musicaltheatres.png"),
    },
    {
      id: 14,
      name: "Television",

      image: require("../assets/images/television.png"),
    },
    {
      id: 15,
      name: "Video Games",
      image: require("../assets/images/videogames.png"),
    },
    {
      id: 16,
      name: "Board Games",
      image: require("../assets/images/boardgames.png"),
    },
    {
      id: 17,
      name: "Science & Nature",
      image: require("../assets/images/sciencenature.png"),
    },
    {
      id: 18,
      name: "Science & Computer",
      image: require("../assets/images/computer.png"),
    },
    {
      id: 19,
      name: "Science & Mathematic",
      image: require("../assets/images/mathematic.png"),
    },
    {
      id: 20,
      name: "Mythology",
      image: require("../assets/images/Mythology.png"),
    },
    {
      id: 21,
      name: "Sports",
      image: require("../assets/images/sports.png"),
    },
    {
      id: 22,
      name: "Geography",
      image: require("../assets/images/geography.png"),
    },
    {
      id: 23,
      name: "History",
      image: require("../assets/images/history.png"),
    },
    {
      id: 24,
      name: "Politics",
      image: require("../assets/images/politics.png"),
    },
    {
      id: 25,
      name: "Art",
      image: require("../assets/images/art.png"),
    },
    {
      id: 26,
      name: "Celebrities",
      image: require("../assets/images/celebrities.png"),
    },
    {
      id: 27,
      name: "Animals",
      image: require("../assets/images/animals.png"),
    },
    {
      id: 28,
      name: "Vehicles",
      image: require("../assets/images/vehicles.png"),
    },
    {
      id: 29,
      name: "Comics",
      image: require("../assets/images/comics.png"),
    },
    {
      id: 30,
      name: "Gadgets",
      image: require("../assets/images/gadgets.png"),
    },
    {
      id: 31,
      name: "Japanese Anime & Manga",
      image: require("../assets/images/japanese.png"),
    },
    {
      id: 32,
      name: "Cartoon & Animations",
      image: require("../assets/images/animasyon.png"),
    },
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  //const [value, setValue] = useState("value");
  //const { getItem, setItem } = useAsyncStorage("@storage_key");

  // const writeItemToStorage = async (category) => {
  //await setItem(category);
  // setValue(category);
  // };
  return (
    <SafeAreaView style={styles.container}>
      <Text>StartPage</Text>
      <ScrollView
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          margin: 30,
        }}
        showsVerticalScrollIndicator={false}
      >
        {categoryList.map((item) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={{
                width: 260,
                height: 130,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "gray",
                //   opacity: 0.5,
                margin: 10,
                borderRadius: 10,
              }}
              onPress={() =>
                navigation.navigate("Level", {
                  category: item.id,
                  categoryName: item.name,
                })
              }
            >
              <ImageBackground
                source={item.image}
                resizeMode="contain"
                style={{
                  width: 260,
                  height: 130,
                  margin: 10,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    margin: 5,
                    marginRight: 10,
                  }}
                >
                  <Text style={{ fontWeight: "bold", color: "orange" }}>
                    {item.name}
                  </Text>

                  <Entypo name="arrow-bold-right" size={24} color="#f8f8f8" />
                </View>
              </ImageBackground>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default StartPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFD8B6",
  },
});
