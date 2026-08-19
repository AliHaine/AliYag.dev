import skillsStyles from "./skills.module.css"

export default function Skills() {
    return (
        <section id='skills'>
            <h2 className="title">Compétences</h2>
            <div id={skillsStyles.SkillsGrp}>
                <div className={skillsStyles.skillRow}>
                    <div className={skillsStyles.skillLabel}>Développement</div>
                    <div className={skillsStyles.skills}>
                        <span className={skillsStyles.skill}>Angular</span>
                        <span className={skillsStyles.skill}>Java</span>
                        <span className={skillsStyles.skill}>C#.NET</span>
                        <span className={skillsStyles.skill}>Python</span>
                        <span className={skillsStyles.skill}>Docker</span>
                        <span className={skillsStyles.skill}>Git/Gitlab</span>
                        <span className={skillsStyles.skill}>Codex</span>
                    </div>
                </div>
                <div className={skillsStyles.skillRow}>
                    <div className={skillsStyles.skillLabel}>SCADA & IOT</div>
                    <div className={skillsStyles.skills}>
                        <span className={skillsStyles.skill}>Ignition</span>
                        <span className={skillsStyles.skill}>OpcUA</span>
                        <span className={skillsStyles.skill}>MQTT</span>
                        <span className={skillsStyles.skill}>BacNET</span>
                        <span className={skillsStyles.skill}>EMQX</span>
                    </div>
                </div>
                <div className={skillsStyles.skillRow}>
                    <div className={skillsStyles.skillLabel}>Data</div>
                    <div className={skillsStyles.skills}>
                        <span className={skillsStyles.skill}>SqlServer</span>
                        <span className={skillsStyles.skill}>PostgresSQL</span>
                        <span className={skillsStyles.skill}>TimeseriesDB</span>
                        <span className={skillsStyles.skill}>Pgadmin</span>
                        <span className={skillsStyles.skill}>Grafana</span>
                        <span className={skillsStyles.skill}>Indexation</span>
                        <span className={skillsStyles.skill}>Agrégation</span>
                        <span className={skillsStyles.skill}>HyperTable</span>

                    </div>
                </div>
                <div className={skillsStyles.skillRow}>
                    <div className={skillsStyles.skillLabel}>Notion</div>
                    <div className={skillsStyles.skills}>
                        <span className={skillsStyles.skill}>React</span>
                        <span className={skillsStyles.skill}>C/C++</span>
                        <span className={skillsStyles.skill}>Siemens portal</span>
                        <span className={skillsStyles.skill}>Yabe</span>
                        <span className={skillsStyles.skill}>VMware</span>
                        <span className={skillsStyles.skill}>Figma</span>
                    </div>
                </div>
            </div>
        </section>
    )
}