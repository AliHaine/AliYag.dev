import fs from "fs"
import matter from "gray-matter"
import path from "path"
import moment from "moment"
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import remarkGfm from "remark-gfm";

import rehypeStringify from 'rehype-stringify';
import { remark } from 'remark'

import type {CardProps, Item} from "../types/item"

const itemsDirectory = path.join(process.cwd(), "items");
const cardsDirectory = path.join(process.cwd(), "card");

export const getSortedCards = (): CardProps[] => {
    const fileNames = fs.readdirSync(cardsDirectory);

    const allCards = fileNames.map((fileName: string) => {
        const id = fileNames.indexOf(fileName);

        const fullPath = path.join(cardsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf-8");
        const matterResult = matter(fileContents);

        return {
            id,
            name: matterResult.data.name,
            year: matterResult.data.year,
            date: matterResult.data.date,
            description: matterResult.data.description,
            links: matterResult.data.links,
            stacks: matterResult.data.stacks,
        }
    });

    return allCards.sort((a, b) => {
        const format = "DD-MM-YYYY"
        const dateOne = moment(a.date, format)
        const dateTwo = moment(b.date, format)
        return dateTwo.diff(dateOne);
    });
}

export const getItemData = async (itemId: string) => {
    const fullPath = path.join(itemsDirectory, itemId + ".md");
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const matterResult = matter(fileContents);

    const processedContent = await remark().use(remarkRehype, { allowDangerousHtml: true }).
    use(remarkGfm).
    use(rehypeRaw).
    use(rehypeStringify).
    process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        itemId,
        contentHtml,
        statId: matterResult.data.statId,
        title: matterResult.data.title,
        github: matterResult.data.github,
        imgSrc: matterResult.data.imgSrc,
        date: matterResult.data.date,
        category: matterResult.data.category,
        shortDescription: matterResult.data.shortDescription,
        tech: matterResult.data.tech,
    }
}

export const getTotalCards = async () => {
    const fileNames = fs.readdirSync(cardsDirectory);
    return fileNames.length;
}