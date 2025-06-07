import fs from "fs"
import matter from "gray-matter"
import path from "path"
import moment from "moment"
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import remarkGfm from "remark-gfm";

import rehypeStringify from 'rehype-stringify';
import { remark } from 'remark'

import type { Item } from "../types/item"

const itemsDirectory = path.join(process.cwd(), "items");

export const getSortedItems = (): Item[] => {
    const fileNames = fs.readdirSync(itemsDirectory);

    const allItems = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, "")

        const fullPath = path.join(itemsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf-8")

        const matterResult = matter(fileContents)

        return {
            id,
            type: matterResult.data.type,
            title: matterResult.data.title,
            imgSrc: matterResult.data.imgSrc,
            fullDate: matterResult.data.date,
            date: matterResult.data.date.slice(6),
            category: matterResult.data.category,
            shortDescription: matterResult.data.shortDescription,
            tech: matterResult.data.tech,
        }
    });

    return allItems.sort((a, b) => {
        const format = "DD-MM-YYYY"
        const dateOne = moment(a.fullDate, format)
        const dateTwo = moment(b.fullDate, format)
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
        title: matterResult.data.title,
        github: matterResult.data.github,
        imgSrc: matterResult.data.imgSrc,
        date: matterResult.data.date,
        category: matterResult.data.category,
        shortDescription: matterResult.data.shortDescription,
        tech: matterResult.data.tech,
    }
}

export const getTotalItems = async () => {
    const fileNames = fs.readdirSync(itemsDirectory);
    return fileNames.length;
}