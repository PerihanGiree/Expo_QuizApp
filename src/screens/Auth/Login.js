import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { TextInput } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Login = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          alignItems: "center",
          height: "50%",
          marginTop: 0,
          backgroundColor: "#01579B",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            width: 100,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
          }}
        >
          <Image
            source={require("../../assets/auth/login.png")}
            style={{ width: 80, height: 80 }}
          />
        </View>
      </View>
      <View
        style={{
          width: 400,
          height: 300,
          backgroundColor: "#000",
          marginTop: -100,
          marginLeft: 30,
          borderRadius: 20,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,

          elevation: 9,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 80,
            width: "90%",
            marginBottom: 10,
            marginLeft: 6,
          }}
        >
          <AntDesign
            name="mail"
            size={24}
            color="black"
            style={{ padding: 10, position: "absolute", marginLeft: 20 }}
          />
          <TextInput
            activeOutlineColor=""
            placeholder="Username /Email"
            style={{
              textAlign: "center",
              height: 30,
              backgroundColor: "#cecece",
              width: "100%",
              padding: 10,
              borderRadius: 20,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              margin: 10,
              opacity: 0.5,
              position: "absolute",
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 80,
            width: "90%",
            marginBottom: 10,
            margin: 6,
          }}
        >
          <MaterialCommunityIcons
            name="key-outline"
            size={24}
            color="black"
            style={{ padding: 10, position: "absolute", marginLeft: 20 }}
          />
          <TextInput
            placeholder="Password"
            style={{
              textAlign: "center",
              height: 30,
              backgroundColor: "#cecece",
              width: "100%",
              // marginTop: 50,
              padding: 10,
              borderRadius: 20,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              margin: 10,
              opacity: 0.5,
              position: "absolute",
            }}
          />
        </View>
        <Text style={{ marginTop: 15, marginLeft: 25 }}>Forgot Password?</Text>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#01579B",
              width: 120,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              marginTop: 20,
            }}
            onPress={() => navigation.navigate("StartPage")}
          >
            <Text style={{ color: "white" }}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ color: "gray" }}>
              Don't have a Account? Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
