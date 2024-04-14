import Image from "next/image";
import TerminalWindow from "/src/components/ui/TerminalWindow.tsx";
export default function Home() {
  return (
    <div className="h-screen grid place-items-center">
      <TerminalWindow />
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
