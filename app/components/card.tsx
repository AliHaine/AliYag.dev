import cardStyle from "./card.module.css"
import {Item} from "@/app/types/item";
import Link from "next/link";

export default function Card({item}: {item: Item }) {
    return (
        <Link key={item.id} href={`/project/${item.id}`}>
            <div className={cardStyle.card} >
                <div className={cardStyle.topContent}>
                    <div>{item.date}</div>
                    <div>{item.title}</div>
                    <img src="/ArrowRotateIcon.png"  alt='Arrow icon'/>
                </div>
                <div className={cardStyle.midContent}>
                    <img src="/item_images/cub3d/NetherMain.gif/" alt='Arrow icon'/>
                    <p className={cardStyle.cardDescription}>{item.shortDescription}</p>
                </div>
                <div className={cardStyle.techContent}>
                    {item.data.map(item => (
                        <div key={item} className={cardStyle.tech}>{item}</div>
                    ))}
                </div>
            </div>
        </Link>
    )
}