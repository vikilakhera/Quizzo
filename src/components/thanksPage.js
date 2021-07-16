import React from "react";

function ThanksPage(props){
    console.log(props);
    const goToHome = () => {
        props.history.push("/");
        localStorage.removeItem("score");
    }

    return(
        <div className="container">
            <div className="quiz-container">
                <button className="home" onClick={goToHome}>
                    Home
                </button>
                <div className="content">
                    <div className="msg">
                        Thanks For Playing
                    </div>
                    <div className="final-score-text">
                        Your Final Score 
                    </div>
                    <div className="final-score">
                        <strong className="strong">{`${localStorage.getItem("score")}/ `}</strong> 200
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThanksPage;