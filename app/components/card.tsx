import cardStyle from "./card.module.css"
import {PostItem, ProjectItem} from "@/app/types/projects-posts";
import Link from "next/link";

export default function Card({item}: {item:  ProjectItem | PostItem }) {
    return (
        <Link key={item.id} href={`/project/${item.id}`}>
            <div className={cardStyle.card} >
                <div className={cardStyle.topContent}>
                    <div>{item.date}</div>
                    <div>{item.title}</div>
                    <img src="/ArrowRotateIcon.png"  alt='Arrow icon'/>
                </div>
                <div className={cardStyle.midContent}>
                    <img src="/miniatures/cub3d.png" alt='Arrow icon'/>
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