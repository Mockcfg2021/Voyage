import React, { useEffect, useState } from "react";
import "./Game.css";
import swal from "@sweetalert/with-react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";

const Game = () => {
  // Initialising states with default values
  const [word, setWord] = useState("");
  const [value, setValue] = useState("");
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState("");
  const [counter, setCounter] = useState(1);
  const [ course, setCourse] = useState("");
  const history = useHistory();
  const location = useLocation();

  // Starts generating words as soon as
  // the component is placed in the DOM Tree
  useEffect(() => {
    wordGenerate();
    console.log(localStorage.getItem("userId"),location.state.data)
    setCourse(location.state.data)
  }, []);

  // Defining questions with their
  // corresponding answers
  const QUESTION = [
    "Full form of DSA",
    "Most Used Web Framework",
    "Who Created Facebook",
    "CEO of Tesla and SpaceX",
    "When 5G going to launch in India",
  ];

  const ANSWERS = [
    "Data Structures and algorithms",
    "React",
    "Mark Zuckerberg",
    "Elon Musk",
    "2021",
  ];

  // Generating Random questions and storing
  // their answers in the state variable
  const wordGenerate = () => {
    const randomNumber = Math.floor(Math.random() * ANSWERS.length);
    setWord(ANSWERS[randomNumber]);
    setQuestion(QUESTION[randomNumber]);
  };

  // checking if the typed answer is correct or not

  const check = () => {
    setCounter((prevScore) => prevScore + 1);
    //console.log(counter)
    if (value) {
      if (value.toLowerCase() === word.toLowerCase()) {
        setValue("");
        setErr(null);
        setSuccess("Correct Answer");
        setScore((prevScore) => prevScore + 1);
        wordGenerate();
        wordGenerate();
      } else {
        setSuccess(null);
        setErr("Wrong Answer");
        setValue("");
        wordGenerate();
      }
    } else {
      setSuccess(null);
      setErr("Please enter the value!");
    }
    if (counter > 9) {
      //console.log(counter)
      if (score + 1 > 6) {
        swal({
          title: "",
          text: `Congratulations, you have completed the test! Your score is ${score}`,
          type: "alert message",
          icon: "success",
          buttons: true,
          buttons: {
            retry: {
              text: "Retry",
              value: "retry",
            },
            okay: {
              text: "Okay",
              value: "okay",
            },
          },
        }).then((value) => {
          console.log(value);
          switch (value) {
            case "retry":
              window.location.assign("http://localhost:3000/game");
              setErr(null);
              break;
            case "okay":
              console.log(localStorage.getItem("userId"),location.data)
              axios.post("http://localhost:5000/updatePoints", {
                uid: localStorage.getItem("userId"),
                course: "C++",
                points: score,
              }).then((res)=>console.log(res.data));
              history.push("/resources");
              break;
          }
        });
      } else {
        swal({
          title: "",
          text: "Sorry,you failed the test,please retake the test to add to your credits.",
          type: "alert message",
          icon: "warning",
          buttons: true,
          buttons: {
            retry: {
              text: "Retry",
              value: "retry",
            },
            okay: {
              text: "Okay",
              value: "okay",
            },
          },
        }).then((value) => {
          switch (value) {
            case "retry":
              window.location.assign("http://localhost:3000/game");
              setErr(null);
              break;
            case "okay":
              history.push("/resources");
              break;
          }
        });
      }
    }
  };

  // defining function to skip
  // to another question

  // Writing the JSX Code
  return (
    <div className="Game__main_container">
      <h1 className="Game__heading">Welcome to the Brain Twister game</h1>
      <div className="Game__container">
        <p className="Game__score">SCORE : {score}</p>

        {question ? (
          <p className="Game__question">Question: {question}</p>
        ) : null}

        {err ? <p className="Game__error">{err}</p> : null}

        {success ? <p className="Game__success">{success}</p> : null}

        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter Answer Here!"
          className="Game__input_answer"
        />

        <button onClick={check} className="Game__submit">
          Enter
        </button>
      </div>
    </div>
  );
};

export default Game;
