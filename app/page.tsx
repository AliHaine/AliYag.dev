import styles from "./page.module.css";
import Card from "@/app/components/card";
import MainButtons from "@/app/components/mainbuttons";

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
                <div className={styles.statValue}>547</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statTitle}>Github stars</div>
                <div className={styles.statValue}>17</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statTitle}>Servers running</div>
                <div className={styles.statValue}>67</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statTitle}>Blog posts</div>
                <div className={styles.statValue}>7</div>
              </div>
            </div>
          </div>

          <div id={styles.topRightContent} className={styles.revealText}>
            <p id={styles.topDescription}>Lorem ipsum dolor sit amet. Eos dicta numquam non fugiat voluptatibus et
              quibusdam minus est explicabo assumenda. In
              animi quod ab mollitia corporis est officia quaerat ut pariatur
              <br/>
              <br/>
              explicabo vel itaque itaque aut sunt voluptatem non quae officia.
              Et provident pariatur At veniam nihil sed ullam quia ut galisum aperiam et possimus impedit ut iure
              inventore ad rerum .</p>
          </div>
        </div>
      </div>

      <MainButtons/>

      <div id={styles.bot}>
        <div id={styles.cards}>
          <Card />
          <Card />
        </div>
      </div>
      <a id={styles.seeAllButton} href="#">See all</a>
    </main>
  );
}
