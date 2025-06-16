import fs from "fs"
import matter from "gray-matter"
import path from "path"
import moment, {Moment} from "moment"
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import remarkGfm from "remark-gfm";

import rehypeStringify from 'rehype-stringify';
import { remark } from 'remark'

import type {CardProps, PostProps} from "./Props"

const itemsDirectory: string = path.join(process.cwd(), "items");
const cardsDirectory: string = path.join(process.cwd(), "card");

function buildCardProps(fileName: string): CardProps {
    if (!fileName.endsWith(".md"))
        fileName = fileName + ".md";
    const fullPath = path.join(cardsDirectory, fileName);
    const fileContents: string = fs.readFileSync(fullPath, "utf-8");
    const matterResult = matter(fileContents);

    return {
        id: fileName,
        name: matterResult.data.name,
        year: matterResult.data.year,
        date: matterResult.data.date,
        description: matterResult.data.description,
        links: matterResult.data.links,
        stacks: matterResult.data.stacks,
    }
}

export const getSortedCards = (): CardProps[] => {
    const fileNames: string[] = fs.readdirSync(cardsDirectory);

    const allCards = fileNames.map((fileName: string) => {
        return buildCardProps(fileName);
    });

    return allCards.sort((a, b) => {
        const format = "DD-MM-YYYY"
        const dateOne: Moment = moment(a.date, format)
        const dateTwo: Moment = moment(b.date, format)
        return dateTwo.diff(dateOne);
    });
}

export const getPostData = async (postFileName: string) => {
    const fullPath: string = path.join(itemsDirectory, postFileName + ".md");
    let fileContents: string;
    try {
        fileContents = fs.readFileSync(fullPath, "utf-8");
    } catch (error) {
        return null;
    }
    const matterResult = matter(fileContents);

    const processedContent = await remark().use(remarkRehype, { allowDangerousHtml: true }).
    use(remarkGfm).
    use(rehypeRaw).
    use(rehypeStringify).
    process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        contentHtml: contentHtml,
        statId: matterResult.data.statId,
        title: matterResult.data.title,
        cardProps: buildCardProps(postFileName),
    }
}

export const getTotalCards = async () => {
    const fileNames: string[] = fs.readdirSync(cardsDirectory);
    return fileNames.length;
}