import footerStyles from "./footer.module.css"

export default function Footer() {
    return (
        <footer id={footerStyles.footer}>
            <p>Made using <a className={footerStyles.a} href='https://react.dev/'>React</a> with <a className={footerStyles.a} href='https://nextjs.org/'>NextJs</a>. Designed with <a className={footerStyles.a} href='https://www.figma.com/'>Figma</a>.</p>
        </footer>
    );
}