import {Item} from "@/app/types/item";
import allPlayerStyle from "./alldisplayer.module.css";
import TextButton from "@/app/components/textbutton";
import InlineCard from "@/app/components/InlineCard";

export default function AllDisplayer({item}: {item: Item[] }) {
    return (
        <div id={allPlayerStyle.mainAllDisplayer} className="mainPadding">
            <TextButton href="/" text="Back to home" />
            <section id={allPlayerStyle.projectsGrid}>
                {item.map(item => (
                    <InlineCard key={item.id} item={item} />
                ))}
            </section>
        </div>
    );
}