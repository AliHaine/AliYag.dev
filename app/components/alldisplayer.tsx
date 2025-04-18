import {Item} from "@/app/types/item";
import allPlayerStyle from "./alldisplayer.module.css";
import TextButton from "@/app/components/textbutton";
import InlineCard from "@/app/components/InlineCard";

export default function AllDisplayer({item}: {item: Item[] }) {
    return (
        <section id={allPlayerStyle.mainAllDisplayer} className="mainPadding">
            <TextButton href="/" text="Back to home" />
            <div id={allPlayerStyle.projectsGrid}>
                <div id={allPlayerStyle.titleRow}>
                    <div>Type</div>
                    <div>Year</div>
                    <div>Name</div>
                    <div>Main stack</div>
                </div>
                {item.map(item => (
                    <InlineCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
}