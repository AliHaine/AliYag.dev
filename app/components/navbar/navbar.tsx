import navbarStyles from "./navbar.module.css"

export default function Navbar() {
    const links = {
        about: "#about",
        skills: "#skills",
        projects: "#projects",
        experience: "#experience"
    }

    return (
        <nav id={navbarStyles.header}>
            <div id={navbarStyles.navbar}>
                {Object.entries(links).map(([key, value]) => (
                    <a className={navbarStyles.navLink} key={key} href={value}>
                        {key}
                    </a>
                ))}
            </div>
        </nav>
    )
}