import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostData, getPostSlugs } from "@/app/utils/ItemLoader";
import styles from "./page.module.css";

export function generateStaticParams() {
  return getPostSlugs().map((projectId) => ({ projectId }));
}

export default async function ProjectPage({ params }: { params: Promise<{ projectId: string }> }) {
  const { projectId } = await params;
  const project = await getPostData(projectId);
  if (!project) notFound();

  return <main className={styles.page}><Link href="/#projects" className={styles.back}>← Back to projects</Link><header className={styles.header}><p>Project · {project.cardProps.year}</p><h1>{project.title}</h1><p>{project.cardProps.description}</p><div>{Object.entries(project.cardProps.links).filter(([label]) => label !== "Blog post").map(([label, href]) => <a key={label} className="btn btnGhost" href={href} target="_blank" rel="noreferrer">{label} ↗</a>)}</div><aside>{project.cardProps.stacks.map((stack) => <span key={stack}>{stack}</span>)}</aside></header><article className={styles.markdown} dangerouslySetInnerHTML={{ __html: project.contentHtml }} /></main>;
}
