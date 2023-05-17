import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import {
  AntDesign,
  MaterialCommunityIcons,
  Octicons,
  Foundation,
} from "@expo/vector-icons";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
const { width } = Dimensions.get("window");
const Register = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password);
  };
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
            source={require("../../assets/auth/register.png")}
            style={{ width: 80, height: 80, padding: 2 }}
          />
        </View>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <View
          style={{
            width: width - 50,
            height: 500,
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
          <View style={styles.textinputContainer}>
            <AntDesign
              name="mail"
              size={24}
              color="black"
              style={styles.icon}
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder={"Email"}
              style={styles.textinput}
            />
          </View>
          <View style={styles.textinputContainer}>
            <MaterialCommunityIcons
              name="key-outline"
              size={24}
              color="black"
              style={styles.icon}
            />
            <TextInput
              value={password}
              onChange={(text) => setPassword(text)}
              placeholder={"Password"}
              style={styles.textinput}
              secureTextEntry
            />
          </View>
          {/* {textinput(
            "Full Name",
            <Octicons
              name="person"
              size={24}
              color="black"
              style={styles.icon}
            />
          )}
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
            "Phone Number",
            <Foundation
              name="telephone"
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
          */}
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={{ color: "white" }}>Register</Text>
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
    margin: 50,
    backgroundColor: "#ff5d8f",
    width: 120,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});

export default Register;
