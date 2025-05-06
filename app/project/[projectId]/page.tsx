import {getItemData} from "../../libs/ItemLoader"
import pageStyle from "./page.module.css"
import TextButton from "@/app/components/textbutton";

const Project = async ({params}: { params: { projectId: string} }) => {
    const project = await getItemData( params.projectId);

    return (
        <div id={pageStyle.pageMain}>
            <TextButton href="/allprojects" text="Back to work list" />

            <div id={pageStyle.header}>
                <h1>{project.title}</h1>
                <div id={pageStyle.techContent}>
                    <div id={pageStyle.techContainer}>
                        {project.tech.map((tech: string) => (
                            <img key={tech} src={`/tech_icons/${tech.toLowerCase()}.png`} className="techIcon" alt={`Icon of ${tech}`}/>
                        ))}
                    </div>
                    ({project.tech.join(", ")})
                </div>
            </div>

            <article
                className={`${pageStyle.articleMain} ${pageStyle.markdown}`}
                dangerouslySetInnerHTML={{__html: project.contentHtml}}
            />
        </div>);
}

export default Project;