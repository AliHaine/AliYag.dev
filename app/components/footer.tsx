import footerStyles from "./footer.module.css"

export default function Footer() {
    return (
        <footer id={footerStyles.footer}>
            <p>Made using <a target="_blank" className={footerStyles.a} href='https://react.dev/'>React</a> with <a target="_blank" className={footerStyles.a} href='https://nextjs.org/'>NextJs</a>. Designed with <a target="_blank" className={footerStyles.a} href='https://www.figma.com/'>Figma</a>.</p>
        </footer>
    );
}