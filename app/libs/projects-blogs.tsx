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

const projectDirectory = path.join(process.cwd(), "projects");
const blogDirectory = path.join(process.cwd(), "blogs");

export const getSortedItems = (type: string): Item[] => {
    let fileNames;
    if (type == 'projects')
        fileNames = fs.readdirSync(projectDirectory);
    else
        fileNames = fs.readdirSync(blogDirectory);


    const allItems = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, "")

        const fullPath = path.join(projectDirectory, fileName)
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
            data: matterResult.data.data,
        }
    });

    return allItems.sort((a, b) => {
        const format = "DD-MM-YYYY"
        const dateOne = moment(a.date, format)
        const dateTwo = moment(b.date, format)
        return dateOne.diff(dateTwo);
    });
}

export const getItemData = async (type: string, itemId: string) => {
    let fullPath;
    if (type == 'projects')
        fullPath = path.join(projectDirectory, itemId + ".md");
    else
        fullPath = path.join(blogDirectory, itemId + ".md");
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
        imgSrc: matterResult.data.imgSrc,
        date: matterResult.data.date,
        category: matterResult.data.category,
        shortDescription: matterResult.data.shortDescription,
        data: matterResult.data.data,
    }
}