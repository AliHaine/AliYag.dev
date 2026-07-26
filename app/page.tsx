import Navbar from "@/app/components/navbar/navbar";
import Whoami from "@/app/components/whoami/whoami";

export default function Home() {
  return (
    <div>
        <div id="bgGrid"></div>
        {Navbar()}
        <div id="main">
            {Whoami()}
            {about()}
        </div>
    </div>
  );
}
