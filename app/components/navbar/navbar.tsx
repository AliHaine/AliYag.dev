import navbarStyles from "./navbar.module.css"

export default function navbar() {
    const links = {
        about: "#about",
        skills: "#skills",
        projects: "#projects",
        experience: "#experience",
        contact: "#contact"
    }

    const renderNavLinks = () =>
        Object.entries(links).map(([key, value]) => (
            <a className={navbarStyles.navLink} key={key} href={value}>
                {key}
            </a>
        ));

    return (
        <div id={navbarStyles.header}>
            <div id={navbarStyles.navbar}>
                <div id={navbarStyles.dotName}>
                    <div id={navbarStyles.dot}>
                    </div>
                    <span>Ali YAGMUR</span>
                </div>
                <div className={navbarStyles.mobileMenu}>
                    <button
                        type="button"
                        className={navbarStyles.burger}
                        aria-label="Toggle navigation menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div className={navbarStyles.navLinks}>{renderNavLinks()}</div>
                </div>
                <div id={navbarStyles.navLinksDesktop}>{renderNavLinks()}</div>
            </div>
        </div>
    )
}