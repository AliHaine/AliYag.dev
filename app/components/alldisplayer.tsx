import {Item} from "@/app/types/item";
import allPlayerStyle from "./alldisplayer.module.css";
import InlineCard from "@/app/components/InlineCard";
import Link from "next/link";

export default function AllDisplayer({item}: {item: Item[] }) {
    return (
        <section id={allPlayerStyle.mainAllDisplayer} className="mainPadding">
            <Link style={{"textAlign": "center"}} className="fontSizeMedium" href="/">Back to home</Link>
            <div id={allPlayerStyle.projectsGrid}>
                <div id={allPlayerStyle.titleRow}>
                    <div>Year</div>
                    <div>Name</div>
                    <div>Main stack</div>
                    <div id={allPlayerStyle.shortDesc}>Short description</div>
                </div>
                {item.map(item => (
                    <InlineCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
}