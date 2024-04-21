import { useRef, useContext } from "react";
import BasePrompt from "./BasePrompt";
import { CurrentPathContext } from "@/contexts/CurrentPathContext";

const rootPath = "~/Nelson M. Ríos/resume";

interface TerminalInputProp {
  onCommandEntered: (cmd: string, args: string[]) => void;
}

function removeExtraSpaces(input: string) {
  return input.replace(/\s+/g, " ").trim();
}

export default function TerminalInput({ onCommandEntered }: TerminalInputProp) {
  const inputRef = useRef(null);
  let { currentPath } = useContext(CurrentPathContext);
  function handleSubmit(event: KeyboardEvent) {
    event.preventDefault();

    let value = inputRef.current.value;
    value = removeExtraSpaces(value);

    const parts = value.split(" ");
    const command = parts[0];
    const args = parts.slice(1);

    onCommandEntered(command, args);
    inputRef.current.value = "";
  }

  return (
    <BasePrompt path={rootPath + currentPath}>
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
