import cardStyle from "./card.module.css"

export default function Card() {
    return (
        <div className={cardStyle.card} >
            <div className={`${cardStyle.line} ${cardStyle.topContent}`}>
                <div>2022</div>
                <div>My tittle</div>
                <img src="/ArrowRotateIcon.png"  alt='Arrow icon'/>
            </div>
            <div className={`${cardStyle.line} ${cardStyle.midContent}`}>
                <img src="/testcard.png"  alt='Arrow icon'/>
                <p>
                    Lorem ipsum dolor sit amet. Eos dicta numquam non fugiat voluptatibus et quibusdam minus est explicabo assumenda. In
                    animi quod ab mollitia corporis est officia quaerat ut pariatur
                </p>
            </div>
            <div className={cardStyle.botContent}>

            </div>
        </div>
    )
}