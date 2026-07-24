import Image from "next/image";
import navbar from "@/app/components/navbar/navbar";

export default function Home() {
  return (
    <div>
      <div>{navbar()}</div>
    </div>
  );
}
