import styles from "./page.module.css";
import Card from "@/app/components/card";
import {getSortedCards} from "@/app/utils/ItemLoader";
import {getGithubContributions, getGitHubStars, getServerRunning, getWorkPosts} from "@/app/utils/StatsApi";

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
            <p id={styles.topDescription}>
              Passionate about computer science for several years, I’m always curious to understand how things work and eager to build projects. This passion drives me to continuously learn and improve my skills.
              <br/><br/>
              Currently, I am focused on deepening my knowledge of mathematics, artificial intelligence, and algorithms, aiming to develop innovative solutions.
            </p>
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
