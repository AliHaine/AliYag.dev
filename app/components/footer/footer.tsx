import footerStyles from "./footer.module.css"

export default function Footer() {
    return (
        <section className={footerStyles.footerContent}>
            <div id={footerStyles.contacts}>
                <a>GitHub</a>
                <a>Linkedin</a>
                <a>Discord</a>
                <a>Email</a>
            </div>
            <div className={footerStyles.footer}>Made using
                <a href="https://react.dev/"> React </a>
                with
                <a href="https://nextjs.org/"> NextJs </a>.
                Hosted by
                <a href="https://www.ovhcloud.com/"> OVH</a>.
            </div>
        </section>
    )
}