import {getSortedItems} from "../libs/ItemLoader"
import AllDisplayer from "@/app/components/alldisplayer";

export default function AllProjects() {
    const projects = getSortedItems();

    return (
        <AllDisplayer item={projects}></AllDisplayer>
    )
}