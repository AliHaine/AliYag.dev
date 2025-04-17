import {Item} from "@/app/types/item";
import allPlayerStyle from "./alldisplayer.module.css";
import Card from "@/app/components/card";
import TextButton from "@/app/components/textbutton";

export default function AllDisplayer({item}: {item: Item[] }) {
    return (
        <div id={allPlayerStyle.mainAllDisplayer} className="mainPadding">
            <TextButton href="/" text="Back to home" />
            <section id={allPlayerStyle.projectsGrid}>
                {item.map(item => (
                    <Card key={item.id} item={item} />
                ))}
            </section>
        </div>
    );
}