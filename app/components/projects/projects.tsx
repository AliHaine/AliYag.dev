import { getSortedCards } from "@/app/utils/ItemLoader";
import ProjectsList from "./projects-list";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="title">Projets</h2>
      <ProjectsList projects={getSortedCards()} />
    </section>
  );
}
