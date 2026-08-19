import aboutStyles from "./about.module.css"


export default function About() {
    return (
        <section id='about'>
            <div id={aboutStyles.about}>
                <h2 className="title">À propos</h2>
                <div className={aboutStyles.paraBody}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London</p>
                    <p>took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets..</p>
                </div>
            </div>
        </section>
    )
}