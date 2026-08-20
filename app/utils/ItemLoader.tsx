import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import type { CardProps, PostProps } from "./Props";

const itemsDirectory = path.join(process.cwd(), "items");
const cardsDirectory = path.join(process.cwd(), "card");

function buildCardProps(fileName: string): CardProps {
  const id = fileName.replace(/\.md$/, "");
  const fileContents = fs.readFileSync(path.join(cardsDirectory, `${id}.md`), "utf8");
  const { data } = matter(fileContents);

  return { id, name: data.name, year: data.year, date: data.date, description: data.description, links: data.links, stacks: data.stacks };
}

function dateValue(value: string) {
  const [day, month, year] = value.split(/[/-]/).map(Number);
  return new Date(year, month - 1, day).getTime();
}

export function getSortedCards(): CardProps[] {
  return fs.readdirSync(cardsDirectory).filter((file) => file.endsWith(".md")).map(buildCardProps)
    .sort((first, second) => dateValue(second.date) - dateValue(first.date));
}

export function getPostSlugs() {
  return fs.readdirSync(itemsDirectory).filter((file) => file.endsWith(".md")).map((file) => file.replace(/\.md$/, ""));
}

export async function getPostData(postFileName: string): Promise<PostProps | null> {
  const fullPath = path.join(itemsDirectory, `${postFileName}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));
  const contentHtml = String(await remark().use(remarkGfm).use(remarkRehype, { allowDangerousHtml: true }).use(rehypeRaw).use(rehypeStringify).process(content));

  return { title: data.title, contentHtml, cardProps: buildCardProps(postFileName) };
}
