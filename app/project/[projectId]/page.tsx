import {getPostData} from "@/app/utils/ItemLoader"
import pageStyle from "./page.module.css"
import Link from "next/link";
import Chart from '../../components/chart';
import cardStyle from "@/app/components/card.module.css";
import {PostProps} from "@/app/utils/Props";
import { redirect } from "next/navigation";

export default async function Project(props: { params: Promise<{ projectId: string }>; }) {
    const params = await props.params;
    const postProps: PostProps | null = await getPostData(params.projectId);

    if (!postProps)
        redirect("/");

    return (
        <div id={pageStyle.pageMain}>

            <Link className="fontSizeMedium" href="/">Home</Link>

            <div id={pageStyle.header}>
                <h1>{postProps.title}</h1>
                <div className={cardStyle.cardButtonsArea}>
                    {Object.entries(postProps.cardProps.links)
                        .filter(([key]) => key !== "Blog post")
                        .map(([key, link]) => (
                            <Link key={`${postProps.cardProps.id}-${key}`} href={link}><button className={cardStyle.cardButton}>{key}</button></Link>
                        ))}
                </div>

                <div className={cardStyle.techContent}>
                    {postProps.cardProps.stacks.map(stack => (
                        <div key={`${postProps.cardProps.id}-${stack}`} className={cardStyle.tech}>{stack}</div>
                    ))}
                </div>
            </div>

            {postProps.statId &&
                <div id={pageStyle.graphDiv}>
                    <h3 id={pageStyle.graphHeader} >Servers running this resource</h3>
                    <Chart id={postProps.statId} />
                </div>
            }

            <article
                className={`${pageStyle.articleMain} ${pageStyle.markdown}`}
                dangerouslySetInnerHTML={{__html: postProps.contentHtml}}
            />
        </div>);
}