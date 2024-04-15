import Image from "next/image";
import Window from "/src/components/ui/Window.tsx";
import Terminal from "/src/components/ui/Terminal.tsx";

export default function Home() {
  return (
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
  );
}
