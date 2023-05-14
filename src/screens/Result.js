import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Result = ({ route, navigation }) => {
  const { score } = route.params;
  return (
    <View>
      <Text>Result</Text>
      <Text>{score}</Text>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({});
