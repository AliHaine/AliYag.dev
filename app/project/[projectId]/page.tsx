import {getItemData} from "../../libs/projects-blogs"
import pageStyle from "./page.module.css"
import TextButton from "@/app/components/textbutton";

const Project = async ({params}: { params: { projectId: string} }) => {
    const project = await getItemData("projects", params.projectId);

    console.log(project)
    return (
        <div id={pageStyle.pageMain}>
            <TextButton href="/allprojects" text="Back to projects list" />

            <article
                className={pageStyle.articleMain}
                dangerouslySetInnerHTML={{ __html: project.contentHtml }}
            />
        </div>);
}

export default Project;