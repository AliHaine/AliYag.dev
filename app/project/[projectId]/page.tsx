import {getItemData} from "../../libs/ItemLoader"
import pageStyle from "./page.module.css"
import Link from "next/link";
import Chart from '../../components/chart';

const Project = async ({params}: { params: { projectId: string} }) => {
    const project = await getItemData( params.projectId);

    return (
        <div id={pageStyle.pageMain}>

            <Link className="fontSizeMedium" href="/allprojects">Back to work list</Link>

            <div id={pageStyle.header}>
                <h1>{project.title}</h1>
                {project.github &&
                    <div>
                        <a href={project.github} target="_blank" rel="noreferrer">
                            Github page
                        </a>
                    </div>
                }
                <div id={pageStyle.techContent}>
                    <div id={pageStyle.techContainer}>
                        {project.tech.map((tech: string) => (
                            <img key={tech} src={`/tech_icons/${tech.toLowerCase()}.png`} className="techIcon" alt={`Icon of ${tech}`}/>
                        ))}
                    </div>
                    ({project.tech.join(", ")})
                </div>
            </div>

            {project.statId &&
                <div id={pageStyle.graphDiv}>
                    <h3 id={pageStyle.graphHeader} >Servers running this resource</h3>
                    <Chart id={project.statId} />
                </div>
            }

            <article
                className={`${pageStyle.articleMain} ${pageStyle.markdown}`}
                dangerouslySetInnerHTML={{__html: project.contentHtml}}
            />
        </div>);
}

export default Project;