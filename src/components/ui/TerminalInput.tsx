import { useRef } from "react";
import BasePrompt from "./BasePrompt";

interface TerminalInputProp {
  onCommandEntered: (cmd: string) => void;
}

export default function TerminalInput({ onCommandEntered }: TerminalInputProp) {
  const inputRef = useRef(null);

  function handleSubmit(event: KeyboardEvent) {
    event.preventDefault();
    let value = inputRef.current.value;
    onCommandEntered(value);
    inputRef.current.value = "";
  }

  return (
    <BasePrompt>
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
