import React, {useState, useEffect} from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import { hashUrl } from "./url";

const hashChoices = {
    0: "A",
    1: "B",
    2: "C",
    3: "D"
}

let time = null;

function Quiz(props){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [choiceArray, setChoiceArray] = useState([]);
    const [optionSelected, setOptionSelected] = useState(null);
    const [timeLeft, setTimeLeft] = useState(60);

    useEffect(() =>{
        getData();
    },[]);

    const getData = async () => {
        try{
            const d = await axios.get(hashUrl[props.location.difficulty][0][props.match.params.id]);
            console.log(d.data);
            setData(d.data.results);
            const subArray = d.data.results.map((row) => (
                [row.correct_answer, ...row.incorrect_answers].sort( ()=>Math.random()-0.5 )
            ))
            setChoiceArray(subArray);
            setLoading(false);
        }catch(error){
            setLoading(false);
        }
    }

    const handleNextQuestion = () => {
        if(currentQuestion === 19){
            props.history.push({
                pathname: "/end",
                finalScore: {score}
            })
            return;
        }
        setCurrentQuestion(currentQuestion + 1);
        setOptionSelected(null);
        setTimeLeft(60);
    }
    

    const handleScore = (ans) =>{
        localStorage.setItem("score", score);
        if(optionSelected) return;
        if(ans === data[currentQuestion].correct_answer){
            setScore(score + 10)
            localStorage.setItem("score", score + 10);
        }
        setOptionSelected(ans);
    }

    const getClassname = (row) => {
        if(!optionSelected) return ""
        if(row === data[currentQuestion].correct_answer){
            return "green"
        }
        if(row === optionSelected) return "red"
        return "notHoverable"
    }

    const handleQuit = () => {
        props.history.push("/");
        localStorage.removeItem("score");
    }

    function Timer() {
        useEffect(() => {
            time = setTimeout(calculateTimeLeft, 1000);
            return () => {
                clearTimeout(time);
            }
        },[timeLeft])
        const calculateTimeLeft = () =>{
            if(timeLeft === 0){
                setTimeLeft(60);
                handleNextQuestion();
            }
            else{
                setTimeLeft(timeLeft - 1);
            }

        }

        return(
            <div className="timer">
                {timeLeft ? (
                    <div>{timeLeft}</div>
                ) : (
                    <div>Times up!</div>
                )}
            </div>
        )
    
    }

    if(loading){
        return(
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
            </div>
        )
    }

    return(
        <div className="container">
            <div className="quiz-container">
                <div className="row1">
                    <button className="quit-btn" onClick={handleQuit} >
                        Quit
                    </button>
                    <div className="score-card">
                        <div className="score-text">
                            Your Score
                        </div>
                        <div className="score">
                            {score}
                        </div>
                    </div>
                </div>
                <div className="row2">
                    <Timer />
                </div>
                <div className="question-container">
                    <div className="question">
                        <div className="qno">
                            Q{currentQuestion + 1}.
                        </div>
                        <div className="qtext">
                            {data?.[currentQuestion]?.question}
                        </div>
                    </div>
                    <div className="choices-container fadeInUp">
                        {choiceArray[currentQuestion]?.map((row, index) =>(
                            <div className="choice-row">
                                <div className="choices">
                                    <div className="choice-no">{hashChoices[index]}</div>
                                    <button className={
                                        `choice-btn ${getClassname(row)}`
                                        } 
                                        onClick={() => handleScore(row)}>
                                        {row}
                                    </button>
                                </div>
                            </div> 
                        ))} 
                    </div>
                    <div className="next">
                        <button className="next-btn" onClick={handleNextQuestion}>Next</button>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
}
export default Quiz;
