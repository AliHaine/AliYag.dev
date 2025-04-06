import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div id={styles.top}>
        <div id={styles.topContent}>
          <div id={styles.topLeftContent}>
            <h1 id={styles.mainTitle}>Ali YAGMUR</h1>
            <h3 id={styles.subTitle}>Developer and AI engineer</h3>

            <div id={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statTitle}>Github contributions</div>
                <div>547</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statTitle}>Github stars</div>
                <div>17</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statTitle}>Servers running</div>
                <div>67</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statTitle}>Blog posts</div>
                <div>7</div>
              </div>
            </div>

          </div>

          <div id={styles.topRightContent}>
            <p id={styles.topDescription}>Lorem ipsum dolor sit amet. Eos dicta numquam non fugiat voluptatibus et
              quibusdam minus est explicabo assumenda. In
              animi quod ab mollitia corporis est officia quaerat ut pariatur
              <br/>
              <br/>
              explicabo vel itaque itaque aut sunt voluptatem non quae officia.
              Et provident pariatur At veniam nihil sed ullam quia ut galisum aperiam et possimus impedit ut iure
              inventore ad rerum
              <br/>
              <br/>
              laudantium. Est omnis quisquam sed accusamus galisum ex sapiente repellendus ut sint dolorum id similique
              dolores est impedit harum et tempora fuga.</p>
          </div>
        </div>
      </div>
      <div id={styles.bot}>

      </div>
    </main>
  );
}
