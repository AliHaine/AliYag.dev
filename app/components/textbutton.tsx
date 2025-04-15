import styles from "./textbutton.module.css";

type ButtonProps = {
    href: string;
    text: string;
}

export default function TextButton({href, text}: ButtonProps) {
    return(
        <a id={styles.button} href={href}>{text}</a>
    )
}