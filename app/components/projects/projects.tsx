import projectStyles from "./projects.module.css"

export default function Projects() {
    return (
        <section id='projects'>
            <h2 className="title">Projets</h2>

            <div className={projectStyles.projectsGrp}>
                <div className={projectStyles.project}>
                    <div className={projectStyles.projectHeader}>
                        <span className={projectStyles.projectHeaderName}>Title exe;ple</span>
                    </div>
                    <div className={projectStyles.projectBody}>
                        <p className={projectStyles.projectContent}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled
                        </p>
                        <div className={projectStyles.projectButtons}>
                            <span className={projectStyles.projectButton}><a>GitHub →</a></span>
                            <span className={projectStyles.projectButton}><a>Website →</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}