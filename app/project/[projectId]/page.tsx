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
                    <div>
                        <img src="/tech_icons/js.png" className="techIcon"/>
                        <img src="/tech_icons/html5.png" className="techIcon"/>
                        <img src="/tech_icons/css3.png" className="techIcon"/>
                    </div>
                    (JavaScript, HTML5, CSS3)
                </div>
            </div>

            <article
                className={`${pageStyle.articleMain} ${pageStyle.markdown}`}
                dangerouslySetInnerHTML={{__html: project.contentHtml}}
            />
        </div>);
}

export default Project;