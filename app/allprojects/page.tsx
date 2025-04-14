import {getSortedItems} from "../libs/projects-blogs"
import AllDisplayer from "@/app/components/alldisplayer";

export default function AllProjects() {
    const projects = getSortedItems("projects");

    return (
        <AllDisplayer item={projects}></AllDisplayer>
    )
}