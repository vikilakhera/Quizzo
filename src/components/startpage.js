import React,{useState} from "react";
import { Link, withRouter } from "react-router-dom";
import "./quiz.css";
import logo from "./img/logo3.jpg";

function StartPage() {
    const [difficulty, setDifficulty] = useState("easyUrl");

    const handleDiffculty = (e) => {
        setDifficulty(e.target.value);
    }
  return (
    <div className="container fadeInUp">
      <div className="header">
        <img className="logo" src={logo} alt="Quizzo logo" />
        <div className="welcome">Welcome to Quizzo!</div>
      </div>
      <div className="headingx">
        <div>Choose a Topic</div>
        <div className="difficulty">
          <label>Difficulty</label>
          <select onChange={handleDiffculty} className="select-box" name="difficulty" id="difficulty">
            <option value="easyUrl">Easy</option>
            <option value="mediumUrl">Medium</option>
            <option value="hardUrl">Hard</option>
          </select>
        </div>
      </div>
      <div className="topic-container">
        <div className="row">
          <div className="card-body">
            <Link
              className="clickable"
              to={{ pathname: "/quiz/sports", difficulty }}
            >
              <div
                style={{ border: "3px solid #4d0c05" }}
                className="img-outline"
              >
                <img
                  className="img"
                  src="https://nd-bg.org/assets/photos/ask-history-who-invented-basketball-istock_000006523151large-2.jpg"
                />
              </div>
              <div className="heading">Sports</div>
            </Link>
          </div>
          <div className="card-body">
            <Link
              className="clickable"
              to={{ pathname: "/quiz/history", difficulty }}
            >
              <div
                style={{ border: "3px solid #e0bf1c" }}
                className="img-outline"
              >
                <img
                  className="img"
                  src="https://richardmansel.files.wordpress.com/2014/01/ancientrome1.jpg"
                />
              </div>
              <div className="heading">History</div>
            </Link>
          </div>
          <div className="card-body">
            <Link
              className="clickable"
              to={{
                pathname: "/quiz/science_nature",
                difficulty,
              }}
            >
              <div
                style={{ border: "3px solid #10d010" }}
                className="img-outline"
              >
                <img
                  className="img"
                  src="https://biologydictionary.net/wp-content/uploads/2021/01/Natural-science.jpg"
                />
              </div>
              <div className="heading">Science & Nature</div>
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="card-body">
            <Link
              className="clickable"
              to={{ pathname: "/quiz/gk", difficulty }}
            >
              <div
                style={{ border: "3px solid #e16b32" }}
                className="img-outline"
              >
                <img
                  className="img"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe_m1sKnrp1yQb9HEmPdaSka4eMgZxlsostw&usqp=CAU"
                />
              </div>
              <div className="heading">General Knowledge</div>
            </Link>
          </div>
          <div className="card-body">
            <Link
              className="clickable"
              to={{ pathname: "/quiz/wildlife", difficulty }}
            >
              <div
                style={{ border: "3px solid #724a18" }}
                className="img-outline"
              >
                <img
                  className="img"
                  src="https://webneel.com/daily/sites/default/files/images/daily/05-2018/wildlife-photography-bear-by-arankadelina.jpg"
                />
              </div>
              <div className="heading">Wildlife</div>
            </Link>
          </div>
          <div className="card-body">
            <Link
              className="clickable"
              to={{ pathname: "/quiz/music", difficulty }}
            >
              <div
                style={{ border: "3px solid #7417c8" }}
                className="img-outline"
              >
                <img
                  className="img"
                  src="https://img.etimg.com/thumb/msid-81525531,width-650,imgsize-622277,,resizemode-4,quality-100/music_thinkstockphotos.jpg"
                />
              </div>
              <div className="heading">Music</div>
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="card-body">
            <Link
              className="clickable"
              to={{ pathname: "/quiz/anime", difficulty }}
            >
              <div
                style={{ border: "3px solid #565859" }}
                className="img-outline"
              >
                <img
                  className="img"
                  src="https://i1.sndcdn.com/artworks-000468914448-q47zsh-t500x500.jpg"
                />
              </div>
              <div className="heading">Anime</div>
            </Link>
          </div>
          <div className="card-body">
            <Link
              className="clickable"
              to={{ pathname: "/quiz/books", difficulty }}
            >
              <div
                style={{ border: "3px solid #d09c1a" }}
                className="img-outline"
              >
                <img
                  className="img"
                  src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop"
                />
              </div>
              <div className="heading">Books</div>
            </Link>
          </div>
          <div className="card-body">
            <Link
              className="clickable"
              to={{ pathname: "/quiz/politics", difficulty }}
            >
              <div
                style={{ border: "3px solid #279df1" }}
                className="img-outline"
              >
                <img
                  className="img"
                  src="https://bpac.in/wp-content/uploads/2020/07/BPAC_Main.png"
                />
              </div>
              <div className="heading">Politics</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(StartPage);
