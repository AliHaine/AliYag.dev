import fs from "fs"
import matter from "gray-matter"
import path from "path"
import moment from "moment"

import type { PostItem, ProjectItem } from "../types/projects-posts"

const projectDirectory = path.join(process.cwd(), "projects")

export const getSortedProjects = (): ProjectItem[] => {
    const fileNames = fs.readdirSync(projectDirectory)

    const allProjectsData = fileNames.map((fileName, index) => {
        const id = index + "-" + fileName.replace(/\.md$/, "")

        const fullPath = path.join(projectDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf-8")

        const matterResult = matter(fileContents)

        return {
            id,
            title: matterResult.data.title,
            imgSrc: matterResult.data.imgSrc,
            date: matterResult.data.date,
            category: matterResult.data.category,
            shortDescription: matterResult.data.shortDescription,
            stacks: matterResult.data.stacks,
        }
    });

    return allProjectsData.sort((a, b) => {
        const format = "DD-MM-YYYY"
        const dateOne = moment(a.date, format)
        const dateTwo = moment(b.date, format)
        return dateOne.diff(dateTwo);
    });
}