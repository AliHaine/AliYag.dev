import styles from "./page.module.css";
import Card from "@/app/components/card";
import {getSortedCards} from "@/app/libs/ItemLoader";
import {getGithubContributions, getGitHubStars, getServerRunning, getWorkPosts} from "@/app/libs/StatsApi";

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
                <div className={styles.statValue}>{getGithubContributions()}</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statTitle}>Github stars</div>
                <div className={styles.statValue}>{getGitHubStars()}</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statTitle}>Servers running</div>
                <div className={styles.statValue}>{getServerRunning()}</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statTitle}>Total projects</div>
                <div className={styles.statValue}>{getWorkPosts()}</div>
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

      <div id={styles.myWork}>Projects</div>

      <div id={styles.cards}>
        {getSortedCards().map((card) => (
            <Card key={card.id} card={card} />
        ))}
      </div>
    </main>
  );
}
