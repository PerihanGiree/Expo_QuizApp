import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useLayoutEffect } from "react";

const Level = ({ route, navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const { category, categoryName } = route.params;
  const [difficult, setDifficult] = useState("");
  const level = [
    {
      key: "easy",
      name: "Easy",
    },
    {
      key: "medium",
      name: "Medium",
    },
    {
      key: "hard",
      name: "Hard",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#FFD8B6" }}>
      <View
        style={{
          marginTop: 150,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {level.map((item) => {
          return (
            <TouchableOpacity
              key={item.key}
              style={{
                backgroundColor: "#FF8D00",
                width: 130,
                height: 70,
                justifyContent: "center",
                alignItems: "center",
                // backgroundColor: "gray",
                //   opacity: 0.5,
                margin: 10,
                borderRadius: 100,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,

                elevation: 9,
              }}
              onPress={() => setDifficult(item.key)}
            >
              <Text>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={{
            width: "90%",
            height: 40,
            backgroundColor: "orange",
            margin: 10,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
          onPress={() => {
            navigation.navigate("Home", {
              category: category,
              categoryName: categoryName,
              difficult: difficult,
            });
          }}
        >
          <Text>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Level;
