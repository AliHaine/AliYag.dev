import Navbar from "@/app/components/navbar/navbar";
import Whoami from "@/app/components/whoami/whoami";
import About from "@/app/components/about/about";

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
        </div>
    </div>
  );
}
