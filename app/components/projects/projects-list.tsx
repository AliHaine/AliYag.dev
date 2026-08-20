"use client";

import Link from "next/link";
import { useState } from "react";
import type { CardProps } from "@/app/utils/Props";
import styles from "./projects.module.css";

export default function ProjectsList({ projects }: { projects: CardProps[] }) {
  const [visible, setVisible] = useState(3);

  return (
    <>
      <div className={styles.projectsGrp}>
        {projects.slice(0, visible).map((project) => (
          <article key={project.id} className={styles.project}>
            <div className={styles.projectHeader}>
              <span className={styles.projectHeaderName}>{project.name}</span>
              <span>{project.year}</span>
            </div>
            <div className={styles.projectBody}>
              <p>{project.description}</p>
              <div className={styles.techs}>{project.stacks.map((stack) => <span key={stack}>{stack}</span>)}</div>
              <div className={styles.projectButtons}>
                {project.links["Blog post"] && <Link className={styles.projectButton} href={`/${project.links["Blog post"].replace(/^\/?/, "")}`}>View project →</Link>}
                {Object.entries(project.links).filter(([label]) => label !== "Blog post").map(([label, href]) => <a key={label} className={styles.projectButton} href={href} target="_blank" rel="noreferrer">{label} ↗</a>)}
              </div>
            </div>
          </article>
        ))}
      </div>
      {visible < projects.length && <button className={styles.more} onClick={() => setVisible((current) => current + 3)}>View more projects</button>}
    </>
  );
}
