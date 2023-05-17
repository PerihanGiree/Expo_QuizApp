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
  const [number, setNumber] = useState("");
  const level = [
    {
      key: "easy",
      name: "Easy",
      questionNumber: 10,
    },
    {
      key: "medium",
      name: "Medium",
      questionNumber: 20,
    },
    {
      key: "hard",
      name: "Hard",
      questionNumber: 30,
    },
  ];
  const selectLevel = (key, number) => {
    setDifficult(key);
    setNumber(number);
  };
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
                opacity: 0.5,
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
              onPress={() => selectLevel(item.key, item.questionNumber)}
            >
              <Text>{item.name}</Text>
              <Text>{item.questionNumber}</Text>
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
              number: number,
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
