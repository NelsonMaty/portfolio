import { useRef } from "react";

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
    <div id="terminal__prompt">
      <div id="terminal__prompt--location">~</div>
      <span id="terminal__prompt--bling">$</span>
      <span id="terminal__prompt--cursor"></span>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          className="bg-inherit focus:outline-none"
          ref={inputRef}
        />
      </form>
    </div>
  );
}
