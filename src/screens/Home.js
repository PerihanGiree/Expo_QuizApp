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
  const { category, difficult } = route.params;

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
  const [color, setColor] = useState("white");
  const getQuiz = async () => {
    const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficult}&type=multiple`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    console.log(data.results);
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]));
    setCount(10);

    console.log("Soru zorluğu:" + difficult);
    console.log("Soru categorisi:" + category);
  };
  useEffect(() => {
    getQuiz();
  }, []);

  useEffect(() => {
    const counter =
      count > 0 &&
      setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);
    if (count == 0) {
      setQues(ques + 1);
      setOptions(generateOptionsAndShuffle(questions[ques + 1]));
      setSayi(sayi + 1);
      setCount(10);
    }

    return () => {
      clearInterval(counter);
    };
  }, [count]);

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
    setColor(false);

    return options;
  };

  const handleSelectedOption = (_option) => {
    if (_option === questions[ques].correct_answer) {
      if (difficult === "easy") {
        setScore(score + 5);
      } else if (difficult === "medium") {
        setScore(score + 10);
      } else {
        setScore(score + 15);
      }
      setColor(true);
    }
    if (ques !== 9) {
      setQues(ques + 1);
      setOptions(generateOptionsAndShuffle(questions[ques + 1]));
      setSayi(sayi + 1);
    }
  };

  const handleShowResult = () => {
    navigation.navigate("Result", {
      score: score,
    });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFD8B6",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#FF8D00",
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <Text style={{ color: "white" }}>{count}</Text>
        </TouchableOpacity>
      </View>

      {questions && (
        <View
          style={{
            backgroundColor: "#ecf0f1",
            alignItems: "center",
            width: "90%",
            height: "70%",
            marginTop: 50,
            margin: 15,
            borderRadius: 20,
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
          <View style={styles.questionContainer}>
            <Text
              style={{
                color: "#555555",
                letterSpacing: 1,
                fontSize: 18,
              }}
            >
              {sayi}.{decodeURIComponent(questions[ques].question)}
            </Text>
          </View>
          {/**Options */}
          <View style={styles.options}>
            <TouchableOpacity
              style={
                color ? styles.optionContainerTrue : styles.optionContainerFalse
              }
              onPress={() => handleSelectedOption(options[0])}
            >
              <Text style={styles.option}>
                a) {decodeURIComponent(options[0])}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                color ? styles.optionContainerTrue : styles.optionContainerFalse
              }
              onPress={() => handleSelectedOption(options[1])}
            >
              <Text style={{ marginLeft: 10 }}>
                b) {decodeURIComponent(options[1])}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                color ? styles.optionContainerTrue : styles.optionContainerFalse
              }
              onPress={() => handleSelectedOption(options[2])}
            >
              <Text style={styles.option}>
                c) {decodeURIComponent(options[2])}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                color ? styles.optionContainerTrue : styles.optionContainerFalse
              }
              onPress={() => handleSelectedOption(options[3])}
            >
              <Text style={styles.option}>
                d) {decodeURIComponent(options[3])}
              </Text>
            </TouchableOpacity>
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

const styles = StyleSheet.create({
  questionContainer: {
    width: "94%",

    // backgroundColor: "#FFD8B6",
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
  },
  optionContainerFalse: {
    backgroundColor: "white",
    marginTop: 40,
    marginLeft: 5,
    paddingLeft: 10,
    borderRadius: 10,
    width: 320,
    height: 50,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    //alignItems: "center",
  },
  optionContainerTrue: {
    backgroundColor: "blue",
    marginTop: 40,
    marginLeft: 5,
    paddingLeft: 10,
    borderRadius: 10,
    width: 320,
    height: 50,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    //alignItems: "center",
  },
});
