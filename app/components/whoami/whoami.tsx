import whoamiStyles from "./whoami.module.css"

export default function Whoami()  {
    return (
        <div id={whoamiStyles.whoami}>
            <h1 className={whoamiStyles.name}>Ali YAGMUR</h1>
            <div className={whoamiStyles.heroArt}>
                <img
                    src="/ind1.svg"
                    alt="Dashboard Icon"
                />
            </div>
            <div className={whoamiStyles.plateTag}><span className={whoamiStyles.sq}></span>Industrie 4.0 · SCADA · IoT industriel</div>
            <p className="para">
                Je conçois du firmware bas niveau et des passerelles IoT pour des lignes de production — du PCB au
                cloud, en passant par le protocole industriel qu'il faut faire parler à tout le monde.
            </p>
            <div className={whoamiStyles.buttons}>
                <a href="#projects" className="btn btnPrimary">→ voir mes projets</a>
                <a href="#contact" className="btn btnGhost">me contacter</a>
            </div>
        </div>
    )
}