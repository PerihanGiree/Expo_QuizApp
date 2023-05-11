import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import Slider from "@react-native-community/slider";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState, useLayoutEffect } from "react";
//suffle array ???
const shuffleArray = (array) => {
  for (let i = array.lenght - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const Home = ({ route, navigation }) => {
  // const [value, setValue] = useState("value");
  //const { getItem, setItem } = useAsyncStorage("@storage_key");

  //const readItemFromStorage = async () => {
  //const item = await getItem();
  //setValue(item);
  //};
  const { category, categoryName, difficult, checked } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [sayi, setSayi] = useState(1);
  const [count, setCount] = useState(0);
  const getQuiz = async () => {
    const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficult}&type=${checked}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]));
    setCount(10);
  };
  useEffect(() => {
    getQuiz();
  }, []);

  useEffect(() => {
    const counter = count > 0 && setInterval(() => {
      setCount((prev) => prev - 1);
  },1000);

  return () => clearInterval(counter);
  },[count])

  const handleNextPress = () => {
    setQues(ques + 1);
    setOptions(generateOptionsAndShuffle(questions[ques + 1]));
    setSayi(sayi + 1);
  };

  const handleSkipPress = () => {
    setQues(ques - 1);
    setOptions(generateOptionsAndShuffle(questions[ques - 1]));
    setSayi(sayi - 1);
  };

  const generateOptionsAndShuffle = (_question) => {
    const options = [..._question.incorrect_answers];
    options.push(_question.correct_answer);
    shuffleArray(options);
    return options;
  };

  const handleSelectedOption = (_option) => {
    if (_option === questions[ques].correct_answer) {
      setScore(score + 10);
    }
    if (ques !== 9) {
      setQues(ques + 1);
      setOptions(generateOptionsAndShuffle(questions[ques + 1]));
    }
  };

  const handleShowResult = () => {
    navigation.navigate("Result", {
      score: score,
    });
  };
  const timeOut = () => {
    setTimeout(() => {
      setCount(count - 1);
    }, 1000);
    if (count === 0) {
      setQues(ques + 1);
      setOptions(generateOptionsAndShuffle(questions[ques + 1]));
      setSayi(sayi + 1);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fa8231",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#ff5252",
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <Text style={{ color: "white" }}>{count}</Text>
        </TouchableOpacity>
      </View>
      {/*    <Text> {JSON.stringify(categoryName)}</Text>
      <Text>{difficult}</Text>
      <Text>{checked}</Text>*/}
      {questions && (
        <View
          style={{
            backgroundColor: "#ecf0f1",
            alignItems: "center",
            width: "90%",
            height: "60%",
            marginTop: 50,
            margin: 15,
            borderRadius: 5,
            padding: 10,

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
              width: "94%",
              backgroundColor: "#FEF2F4",
              borderRadius: 5,
              padding: 10,
              marginTop: 20,
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
            <Text
              style={{
                color: "black",
                letterSpacing: 1,
                fontSize: 18,
              }}
            >
              {sayi}.{decodeURIComponent(questions[ques].question)}
            </Text>
          </View>
          <View style={styles.options}>
            <View
              style={{
                flexDirection: "row",
                width: "80%",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  backgroundColor: "gray",
                  marginTop: 40,
                  marginLeft: 5,
                  borderRadius: 10,
                  width: 150,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 50,
                }}
              >
                <TouchableOpacity
                  style={{ margin: 10 }}
                  onPress={() => handleSelectedOption(options[0])}
                >
                  <Text style={styles.option}>
                    a) {decodeURIComponent(options[0])}
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: "gray",
                  marginTop: 40,
                  marginLeft: 5,
                  borderRadius: 10,
                  width: 150,
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => handleSelectedOption(options[1])}
              >
                <Text style={styles.option}>
                  b) {decodeURIComponent(options[1])}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "80%",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  backgroundColor: "gray",
                  marginTop: 40,
                  marginLeft: 5,
                  borderRadius: 10,
                  width: 150,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 50,
                }}
              >
                <TouchableOpacity
                  style={styles.optionButton}
                  onPress={() => handleSelectedOption(options[2])}
                >
                  <Text style={styles.option}>
                    c) {decodeURIComponent(options[2])}
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: "gray",
                  marginTop: 40,
                  marginLeft: 5,
                  borderRadius: 10,
                  width: 150,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 50,
                }}
              >
                <TouchableOpacity
                  style={styles.optionButton}
                  onPress={() => handleSelectedOption(options[3])}
                >
                  <Text style={styles.option}>
                    d) {decodeURIComponent(options[3])}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
            }}
          >
            <View style={{ flex: 1, marginTop: 50, marginLeft: 15 }}>
              <TouchableOpacity style={styles.button} onPress={handleSkipPress}>
                <AntDesign name="arrowleft" size={30} color="black" />
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 50, marginRight: 15 }}>
              {ques !== 9 && (
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleNextPress}
                >
                  <AntDesign name="arrowright" size={30} color="black" />
                </TouchableOpacity>
              )}
            </View>
            {ques === 9 && (
              <TouchableOpacity
                style={styles.button}
                onPress={handleShowResult}
              >
                <Text style={styles.buttonText}>Show Result</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
