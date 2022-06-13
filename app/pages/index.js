import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import { CloseOutline } from "react-ionicons";

export default function Home() {
  let [score, setScore] = useState(0);
  const [choice, setChoice] = useState("");
  const [showRules, setShowRules] = useState(false);
  const [computerChoice, setComputerChoice] = useState("");
  const [finished, setFinished] = useState(false);
  const [winStatus, setWinStatus] = useState("you");
  useEffect(() => {
    if (window.sessionStorage.getItem("score") === null) {
      window.sessionStorage.setItem("score", 0);
    } else {
      setScore(window.sessionStorage.getItem("score"));
    }
  }, []);
  useEffect(() => {
    if (choice !== "") {
      let choice = ["rock", "paper", "scissors", "lizard", "spock"];
      setTimeout(() => {
        let chosenNumber = Math.floor(Math.random() * (4 - 0));
        setComputerChoice(choice[chosenNumber]);
      }, 500);
    }
  }, [choice]);
  useEffect(() => {
    if (computerChoice !== "" && choice !== "") {
      setTimeout(() => {
        determineWinner(choice, computerChoice);
        setFinished(true);
      }, 500);
    }
  }, [computerChoice, choice]);
  const determineWinner = (choice, houseChoice) => {
    let losers = {
      scissors: ["paper", "lizard"],
      paper: ["rock", "spock"],
      rock: ["scissors", "lizard"],
      lizard: ["paper", "spock"],
      spock: ["scissors", "rock"],
    };
    if (choice === houseChoice) {
      setWinStatus("tie");
    } else {
      if (losers[choice].includes(houseChoice)) {
        setWinStatus("you");
        let newScore = parseInt(score) + 1;
        setScore(newScore);
        sessionStorage.setItem("score", newScore);
      } else {
        setWinStatus("house");
        let newScore = parseInt(score) - 1;
        setScore(newScore);
        sessionStorage.setItem("score", newScore);
      }
    }
  };

  return (
    <div>
      <Head>
        <title>Rock | Paper | Scissors | Sprock | Lizard</title>
        <meta
          name="description"
          content="Play Rock paper scissors sprock lizard"
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main className={styles.body}>
        <div>
          <div className="container container-top">
            <div
              className="row"
              style={{
                margin: "5vw 10vw",
                borderRadius: "10px",
                borderStyle: "solid",
                borderColor: "rgb(97,106,130)",
              }}
            >
              <div
                className="col"
                style={{ margin: "10px" }}
                onClick={() => {
                  setChoice("");
                  setFinished(false);
                  setComputerChoice("");
                }}
              >
                <img
                  src="/images/logo-bonus.svg"
                  className={styles.imageLogo}
                />
              </div>
              <div className="col">
                <div className={styles.score_board}>
                  <p className={styles.score_board_header}>SCORE</p>
                  <p className={styles.score_board_score}>{score}</p>
                </div>
              </div>
            </div>
          </div>
          {choice === "" ? (
            <div className={styles.game_container}>
              <div className={styles.center_holder}>
                <div className="row">
                  <PlayItem name="scissors" setChoice={setChoice} />
                </div>
                <div className="row">
                  <PlayItem name="spock" setChoice={setChoice} />
                  <PlayItem name="paper" setChoice={setChoice} />
                </div>
                <div className="row">
                  <PlayItem name="lizard" setChoice={setChoice} />
                  <PlayItem name="rock" setChoice={setChoice} />
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.game_container}>
              <div>
                <div className="row">
                  <div className={!finished ? "col-6" : "col-6 col-lg-4"}>
                    <PlayedItem name={choice} title="YOU PICKED" />
                  </div>
                  {finished ? (
                    <div className="col-4 mx-auto text-center d-none d-lg-block">
                      <h1
                        style={{
                          marginTop: 200,
                          color: "#fff",
                          fontWeight: 700,
                        }}
                      >
                        {winStatus === "you"
                          ? "YOU WIN"
                          : winStatus === "tie"
                          ? "YOU BOTH TIE"
                          : "YOU LOSE"}
                      </h1>

                      <button
                        className="btn btn-light text-center"
                        style={{ width: 140 }}
                        onClick={() => {
                          setChoice("");
                          setFinished(false);
                          setComputerChoice("");
                        }}
                      >
                        PLAY AGAIN
                      </button>
                    </div>
                  ) : (
                    <></>
                  )}
                  {computerChoice === "" ? (
                    <div className="col-6">
                      <h4 className={styles.title_custom}>
                        <strong>THE HOUSE PICKED</strong>
                      </h4>
                      <div className={styles.circle_outer}>
                        <div className={styles.image_inner_large_wireframe} />
                      </div>
                    </div>
                  ) : (
                    <div className={!finished ? "col-6" : "col-6 col-lg-4"}>
                      <PlayedItem
                        name={computerChoice}
                        title="THE HOUSE PICKED"
                      />
                    </div>
                  )}
                  {finished ? (
                    <div className="col-12 mx-auto text-center d-block d-lg-none">
                      <h1
                        style={{
                          marginTop: '2vh',
                          fontSize: 60,
                          color: "#fff",
                          fontWeight: 700,
                        }}
                      >
                        {winStatus === "you"
                          ? "YOU WIN"
                          : winStatus === "tie"
                          ? "YOU BOTH TIE"
                          : "YOU LOSE"}
                      </h1>

                      <button
                        className="btn btn-light text-center"
                        style={{ width: 140 }}
                        onClick={() => {
                          setChoice("");
                          setFinished(false);
                          setComputerChoice("");
                        }}
                      >
                        PLAY AGAIN
                      </button>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          )}
          <button
            className="btn btn-outline-light d-none d-md-block"
            type="button"
            onClick={() => {
              setShowRules(true);
            }}
            style={{
              height: "40px",
              width: "100px",
              borderRadius: "4px",
              border: "#8a8aa5 solid 1px",
              position: "fixed",
              bottom: "30px",
              right: "30px",
            }}
          >
            RULES
          </button>
          <div
            className="d-md-none mx-auto text-center"
            style={{
              position: "fixed",
              bottom: "30px",
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <button
              className="btn btn-outline-light"
              type="button"
              onClick={() => {
                setShowRules(true);
              }}
              style={{
                height: "40px",
                width: "100px",
                borderRadius: "4px",
                border: "#8a8aa5 solid 1px",
              }}
            >
              RULES
            </button>
          </div>
          <div
            className="modal fade show"
            id="rulesModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            style={{ display: showRules ? "block" : "none", borderRadius: 20 }}
          >
            <div
              className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-body mx-auto text-center">
                  <div className="float-end d-none d-sm-block">
                    <CloseOutline
                      onClick={() => {
                        setShowRules(false);
                      }}
                      color={"hsl(217, 16%, 45%)"}
                      title={"Close"}
                      height="30px"
                      width="30px"
                    />
                  </div>
                  <h3
                    className="text-start d-none d-sm-block"
                    style={{ color: "hsl(229, 25%, 31%)", fontWeight: 700 }}
                  >
                    RULES
                  </h3>
                  <h3
                    className="text-center d-block d-sm-none"
                    style={{
                      color: "hsl(229, 25%, 31%)",
                      fontWeight: 700,
                      marginTop: "10vh",
                    }}
                  >
                    RULES
                  </h3>

                  <div className="d-none d-sm-block">
                    <img src="/images/image-rules-bonus.svg" />
                  </div>
                  <div
                    className="d-block d-sm-none"
                    style={{ marginTop: "20vh" }}
                  >
                    <img src="/images/image-rules-bonus.svg" />
                  </div>
                  <div
                    className="text-center d-block d-sm-none"
                    style={{ marginTop: "20vh" }}
                  >
                    <CloseOutline
                      onClick={() => {
                        setShowRules(false);
                      }}
                      color={"hsl(217, 16%, 45%)"}
                      title={"Close"}
                      height="30px"
                      width="30px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showRules ? <div className="modal-backdrop fade show"></div> : <></>}
      </main>
    </div>
  );
}

const PlayItem = (props) => {
  return (
    <div className="col" onClick={() => props.setChoice(props.name)}>
      <div className={styles[props.name]}>
        <div className={styles.image_inner}>
          <img
            className={styles.image_top}
            src={`/images/icon-${props.name}.svg`}
            height="45px"
          />
        </div>
      </div>
    </div>
  );
};

const PlayedItem = (props) => {
  return (
    <div>
      <h4 className={styles.title_custom}>
        <strong>{props.title}</strong>
      </h4>
      <div className="winner">
        <div className={styles[props.name + "_large"]}>
          <div
            className={styles[props.name + "-inner_large"]}
            style={{
              boxShadow: "inset 0px 10px 1px rgb(188,186,208)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
