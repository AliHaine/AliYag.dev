import cardStyle from "./card.module.css"

export default function Card() {
    return (
        <div className={cardStyle.card} >
            <div className={cardStyle.topContent}>
                <div>2022</div>
                <div>Cube3D</div>
                <img src="/ArrowRotateIcon.png"  alt='Arrow icon'/>
            </div>
            <div className={cardStyle.midContent}>
                <img src="/testcard.png"  alt='Arrow icon'/>
                <p className={cardStyle.cardDescription}>
                    2.5D game using Raycasting without GameEngine
                </p>
            </div>
            <div className={cardStyle.techContent}>
                <div>C</div>
                <div>Makefile</div>
            </div>
        </div>
    )
}