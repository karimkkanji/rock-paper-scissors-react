import Head from "next/head";
import Link from "next/link";
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
                <PlayItem name="scissors" />
              </div>
              <div className="row">
                <PlayItem name="spock" />
                <PlayItem name="paper" />
              </div>
              <div className="row">
                <PlayItem name="lizard" />
                <PlayItem name="rock" />
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

const PlayItem = (props) => {
  return (
    <Link href={"/play/" + props.name}>
      <div className="col">
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
    </Link>
  );
};
