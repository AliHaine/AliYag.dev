import Navbar from "@/app/components/navbar/navbar";
import Whoami from "@/app/components/whoami/whoami";
import About from "@/app/components/about/about";
import Skills from "@/app/components/skills/skills";
import Projects from "@/app/components/projects/projects";
import Footer from "@/app/components/footer/footer";

export default function Home() {
  return (
    <div>
        <div id="bgGrid"></div>
        {Navbar()}
        <div id="main">
            {Whoami()}
            <div className="hazard"></div>
            {About()}
            <div className="hazard"></div>
            {Skills()}
            <div className="hazard"></div>
            {Projects()}
        </div>
        {Footer()}
    </div>
  );
}
