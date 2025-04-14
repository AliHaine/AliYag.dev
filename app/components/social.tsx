import socialStyles from "./social.module.css"

export default function Social() {
    return (
        <div id={socialStyles.mainSocial}>
            <a href="https://github.com/AliHaine" target="_blank"> <img className={socialStyles.img} src="/GitHubIcon.png" alt="GitHub Icon which redirect to https://github.com/AliHaine" /></a>
            <a href="https://github.com/AliHaine" target="_blank"> <img className={socialStyles.img} src="/LinkedInIcon.png" alt="GitHub Icon which redirect to https://github.com/AliHaine" /></a>
            <a href="https://discord.gg/HQ6WnVTQJm" target="_blank"> <img className={socialStyles.img} src="/DiscordIcon.png" alt="Discord Icon which redirect to https://discord.gg/HQ6WnVTQJm" /></a>
            <a href="https://github.com/AliHaine" target="_blank"> <img className={socialStyles.img} src="/ArobaseIcon.png" alt="GitHub Icon which redirect to https://github.com/AliHaine" /></a>
        </div>
    )
}