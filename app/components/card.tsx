import cardStyle from "./card.module.css"
import {CardProps} from "@/app/utils/Props";
import Link from "next/link";

export default function Card({card}: {card: CardProps }) {

    return (
        <div key={card.id} className={cardStyle.card} >
            <div className={cardStyle.topContent}>
                <div className={cardStyle.cardTitle}>
                    <div>{card.name}</div>
                    <div className={cardStyle.cardDate}>{card.year}</div>
                </div>
                <div className={cardStyle.cardButtonsArea}>
                    {Object.entries(card.links).map(([key, link]) => (
                        <Link key={`${card.id}-${key}`} href={link}><button className={cardStyle.cardButton}>{key}</button></Link>
                    ))}
                </div>
            </div>
            <p className={cardStyle.cardDescription}>{card.description}</p>
            <div className={cardStyle.techContent}>
                {card.stacks.map(stack => (
                    <div key={`${card.id}-${stack}`} className={cardStyle.tech}>{stack}</div>
                ))}
            </div>
        </div>
    )
}