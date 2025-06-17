import socialStyles from "./social.module.css"

export default function Social() {
    return (
        <div id={socialStyles.mainSocial}>
            <a href="https://github.com/AliHaine" target="_blank"> <div style={{ WebkitMask: "url('/GitHubIcon.png') center/contain"}} className={socialStyles.img}></div></a>
            <a href="https://www.linkedin.com/in/ali-yagmur-343920292/" target="_blank"> <div style={{ WebkitMask: "url('/LinkedInIcon.png') center/contain"}} className={socialStyles.img}></div></a>
            <a href="https://discord.gg/HQ6WnVTQJm" target="_blank"> <div style={{ WebkitMask: "url('/DiscordIcon.png') center/contain"}} className={socialStyles.img}></div></a>
            <a href="mailto:pro@aliyag.dev" target="_blank"> <div style={{ WebkitMask: "url('/ArobaseIcon.png') center/contain"}} className={socialStyles.img}></div></a>
        </div>
    )
}