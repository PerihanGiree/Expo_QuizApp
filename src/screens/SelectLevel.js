import React, { useState, useLayoutEffect } from "react";

import { TouchableOpacity, View, Text, Image } from "react-native";
import { RadioButton } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";

export default function App({ route, navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const { category, categoryName } = route.params;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();
  const [items, setItems] = useState([
    { label: "Easy", value: "easy" },
    { label: "Medium", value: "medium" },
    { label: "Hard", value: "hard" },
  ]);

  const [tipvalue, setTipValue] = useState();
  const [tip, setTip] = useState([
    { label: "Multiple Choice", value: "multiple" },
    { label: "True/False", value: "boolean" },
  ]);

  const [checked, setChecked] = useState();
  console.log(value);
  console.log(checked);
  return (
    <View style={{ flex: 1, flexDirection: "column", marginTop: 50 }}>
      <View
        style={{
          backgroundColor: "#f8f8f8",
          width: "96%",
          height: "40%",
          margin: 10,
          padding: 10,
          // alignItems: "center",
          justifyContent: "flex-start",
          paddingHorizontal: 15,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("StartPage")}>
          <Entypo name="arrow-bold-left" size={30} color="black" />
        </TouchableOpacity>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ marginBottom: 5, fontWeight: "bold" }}>
            Choose the difficulty level!!
          </Text>
        </View>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          theme="DARK"
          multiple={false}
          // mode="BADGE"
          /*  badgeDotColors={[
            "#e76f51",
            "#00b4d8",
            "#e9c46a",
            "#e76f51",
            "#8ac926",
            "#00b4d8",
            "#e9c46a",
          ]}*/
        />
      </View>

      <View
        style={{
          backgroundColor: "#f8f8f8",
          width: "96%",
          // height: "40%",
          margin: 10,
          padding: 10,
          // alignItems: "center",
          justifyContent: "flex-start",
          paddingHorizontal: 15,
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ marginBottom: 5, fontWeight: "bold" }}>
            Choose your answer!!
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <RadioButton
            value="multiple"
            label="Carto Base MAp"
            status={checked === "multiple" ? "checked" : "unchecked"}
            onPress={() => {
              setChecked("multiple");
            }}
          />
          <Text>Multiple Choice</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <RadioButton
            value="boolean"
            status={checked === "boolean" ? "checked" : "unchecked"}
            onPress={() => {
              setChecked("boolean");
            }}
          />
          <Text style={{}}>True/False</Text>
        </View>
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
          onPress={() =>
            navigation.navigate("Home", {
              difficult: value,
              category: category,
              categoryName: categoryName,
              checked: checked,
            })
          }
        >
          <Text>Skip</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 15,
        }}
      >
        <Image
          source={require("../assets/images/quiz.png")}
          style={{ width: 150, height: 150 }}
        />
      </View>
    </View>
  );
}
