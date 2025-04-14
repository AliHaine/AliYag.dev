import {getSortedItems} from "../libs/projects-blogs"

export default function AllProjects() {
    const projects = getSortedItems("projects");

    console.log(projects)
    return (
        <div>

        </div>);
}