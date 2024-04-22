import { useRef, useContext } from "react";
import BasePrompt from "./BasePrompt";
import { CurrentPathContext } from "@/contexts/CurrentPathContext";
import { rootPath } from "@/data/rootPath";

interface TerminalInputProp {
  onCommandEntered: (cmd: string, args: string[]) => void;
}

function removeExtraSpaces(input: string) {
  return input.replace(/\s+/g, " ").trim();
}

export default function TerminalInput({ onCommandEntered }: TerminalInputProp) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { currentPath } = useContext(CurrentPathContext);
  const resultingPath =
    currentPath !== "" ? rootPath + "/" + currentPath : rootPath;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const input = inputRef.current;

    if (input) {
      const value = removeExtraSpaces(input.value);
      const parts = value.split(" ");
      const command = parts[0];
      const args = parts.slice(1);

      onCommandEntered(command, args);
      inputRef.current.value = "";
    }
  }

  return (
    <BasePrompt path={resultingPath}>
      <form onSubmit={handleSubmit} className="inline">
        <input
          autoFocus
          className="bg-inherit focus:outline-none"
          ref={inputRef}
        />
      </form>
    </BasePrompt>
  );
}
