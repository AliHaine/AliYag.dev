import {Item} from "@/app/types/item";
import Link from "next/link";
import styles from "@/app/components/inlinecard.module.css";

export default function InlineCard({item}: {item: Item}) {
    return (
        <Link key={item.id} href={`/project/${item.id}`}>
            <div className={styles.main} >
                <div>{item.date}</div>
                <div>{item.title}</div>
                <div className={styles.techContent}>{item.tech.at(0)}</div>
                <div className={styles.shortDescription}>{item.shortDescription}</div>
            </div>
        </Link>
    )
}