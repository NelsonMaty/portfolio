import Image from "next/image";
import Window from "@/components/ui/Window";
import Terminal from "@/components/ui/Terminal";
import { CurrentPathProvider } from "@/contexts/CurrentPathContext";

export default function Home() {
  return (
    <CurrentPathProvider>
      <div className="h-screen grid place-items-center">
        <Window>
          <Terminal />
        </Window>
        <Image
          src="/wallpapers/Sonoma.jpg"
          fill
          sizes="100vw"
          alt="background image"
          objectFit="cover"
          className="-z-10"
        />
      </div>
    </CurrentPathProvider>
  );
}
