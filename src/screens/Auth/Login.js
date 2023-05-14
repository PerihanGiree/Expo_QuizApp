import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const Login = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  function textinput(placeholder, icon) {
    return (
      <View style={styles.textinputContainer}>
        {icon}
        <TextInput placeholder={placeholder} style={styles.textinput} />
      </View>
    );
  }
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
          backgroundColor: "#FFD8B6",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            width: 120,
            height: 120,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
            marginBottom: 100,
          }}
        >
          <Image
            source={require("../../assets/auth/login.png")}
            style={{ width: 80, height: 80, padding: 2 }}
          />
        </View>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <View
          style={{
            width: width - 50,
            height: 400,
            backgroundColor: "#EEEEEE",
            marginTop: -150,
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
          {textinput(
            "Email",
            <AntDesign
              name="mail"
              size={24}
              color="black"
              style={styles.icon}
            />
          )}

          {textinput(
            "Password",
            <MaterialCommunityIcons
              name="key-outline"
              size={24}
              color="black"
              style={styles.icon}
            />
          )}
          <Text style={{ marginTop: 15, marginLeft: 25 }}>
            Forgot Password?
          </Text>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("StartPage")}
            >
              <Text style={{ color: "white" }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={{ color: "gray" }}>
                Don't have a Account? Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: { padding: 10, position: "absolute", marginLeft: 20 },
  textinput: {
    paddingLeft: 50,
    height: 50,
    backgroundColor: "#cecece",
    width: "100%",
    padding: 10,
    borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    margin: 10,
    opacity: 0.5,
    position: "absolute",
    borderColor: "white",
  },
  textinputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 80,
    width: "90%",
    marginBottom: 10,
    marginLeft: 6,
  },
  button: {
    backgroundColor: "#ff5d8f",
    width: 120,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 20,
  },
});

export default Login;
