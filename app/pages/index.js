import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
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
                <img src="/images/logo-bonus.svg" />
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
            <div className={styles.center_holder}>
              <div className="row">
                <div className="col">
                  <div className={styles.scissors}>
                    <div className={styles.image_inner}>
                      <img
                        className={styles.image_top}
                        src="/images/icon-scissors.svg"
                        height="45px"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className={styles.sprock}>
                    <div className={styles.image_inner}>
                      <img
                        className={styles.image_top}
                        src="/images/icon-spock.svg"
                        height="45px"
                      />
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className={styles.paper}>
                    <div className={styles.image_inner}>
                      <img
                        className={styles.image_top}
                        src="/images/icon-paper.svg"
                        height="45px"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className={styles.lizard}>
                    <div className={styles.image_inner}>
                      <img
                        className={styles.image_top}
                        src="/images/icon-lizard.svg"
                        height="45px"
                      />
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className={styles.rock}>
                    <div className={styles.image_inner}>
                      <img
                        className={styles.image_top}
                        src="/images/icon-rock.svg"
                        height="45px"
                      />
                    </div>
                  </div>
                </div>
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
}
