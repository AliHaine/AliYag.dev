import {PostItem, ProjectItem} from "@/app/types/projects-posts";
import allPlayerStyle from "./alldisplayer.module.css";
import Link from "next/link";

export default function AllDisplayer({item}: {item: ProjectItem[] | PostItem[] }) {
    return (
        <section id={allPlayerStyle.alldisplayMain}>
            <div>{item.map(item => (
                <Link key={item.id} href={`/project/${item.id}`}>
                    <div className={allPlayerStyle.itemRow} key={item.id}>
                        <div>{item.date}</div>
                        <div>{item.title}</div>
                    </div>
                </Link>
            ))}
            </div>
        </section>
    );
}