import { getSortedProjects } from "../libs/projects-blogs"

export default function AllProjects() {
    const projects = getSortedProjects();

    console.log(projects)
    return (
        <div>
            Hi its me
        </div>);
}