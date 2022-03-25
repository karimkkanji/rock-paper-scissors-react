import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
const play = () => {
  const [choice, setChoice] = useState("");
  const [finished, setFinished] = useState(false);
  const [winStatus, setWinStatus] = useState(false);
  useEffect(() => {
    let choice = ["rock", "paper", "scissors", "lizard", "spock"];
    setTimeout(() => {
      let chosenNumber = Math.floor(Math.random() * (4 - 0));
      setChoice(choice[chosenNumber]);
    }, 1000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setFinished(true);
    }, 500);
  }, [choice]);
  const router = useRouter();
  const { game } = router.query;
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
                margin: "5vw",
                "border-radius": "10px",
                "border-style": "solid",
                "border-color": "rgb(97,106,130)",
              }}
            >
              <div className="col" style={{ margin: "10px" }}>
                <Link href="/">
                  <img src="/images/logo-bonus.svg" />
                </Link>
              </div>
              <div className="col">
                <div className={styles.score_board}>
                  <p className={styles.score_board_header}>SCORE</p>
                  <p className={styles.score_board_score}>12</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.game_container}>
            <div>
              <div className="row">
                <div className={!finished ? "col-6" : "col-4"}>
                  <PlayItem name={game} title="YOU PICKED" />
                </div>
                {finished ? (
                  <div className="col-4 text-center mx-auto">
                    <h1 style={{ marginTop: 200, color: "#fff" }}>
                      {winStatus ? "YOU WIN" : "YOU LOSE"}
                    </h1>
                    <button className="btn btn-light">PlAY AGAIN</button>
                  </div>
                ) : (
                  <></>
                )}
                {choice === "" ? (
                  <div className="col-4">
                    <h4 className={styles.title_custom}>
                      <strong>THE HOUSE PICKED</strong>
                    </h4>
                    <div className={styles.circle_outer}>
                      <div className={styles.image_inner_large_wireframe} />
                    </div>
                  </div>
                ) : (
                  <div className={!finished ? "col-6" : "col-4"}>
                    <PlayItem name={choice} title="THE HOUSE PICKED" />
                  </div>
                )}
              </div>
            </div>
          </div>
          <button
            className="btn btn-outline-light"
            type="button"
            style={{
              height: "40px",
              width: "85px",
              "border-radius": "4px",
              border: "#8a8aa5 solid 1px",
              position: "fixed",
              bottom: "30px",
              right: "30px",
            }}
          >
            RULES
          </button>
        </div>
      </main>
    </div>
  );
};
export default play;
const PlayItem = (props) => {
  return (
    <div>
      <h4 className={styles.title_custom}>
        <strong>{props.title}</strong>
      </h4>
      <div className={styles[props.name + "_large"]}>
        <div
          className={styles.image_inner_large}
          style={{
            boxShadow: "inset 0px 10px 1px rgb(188,186,208)",
          }}
        >
          <img
            className={styles.image_top_large}
            src={`/images/icon-${props.name}.svg`}
            height="100px"
          />
        </div>
      </div>
    </div>
  );
};
