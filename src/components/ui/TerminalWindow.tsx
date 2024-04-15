import React, { useState } from "react";
import TerminalInput from "./TerminalInput";

interface WindowProps {
  children: React.ReactNode;
}

export default function TerminalWindow() {
  return (
    <div className="relative">
      <WindowControls />
      <Window>
        <Terminal />
      </Window>
    </div>
  );

  function WindowControls() {
    return (
      <div className="relative top-7 left-4">
        <svg
          xmlns="http://www.w4.org/2000/svg"
          width="55"
          height="15"
          viewBox="1 0 54 14"
        >
          <g fill="none" fill-rule="evenodd" transform="translate(2 1)">
            <circle
              cx="7"
              cy="7"
              r="7"
              fill="#FF6F56"
              stroke="#E0444E"
              stroke-width=".6"
            ></circle>
            <circle
              cx="27"
              cy="7"
              r="7"
              fill="#FFBD3E"
              stroke="#DEA124"
              stroke-width=".6"
            ></circle>
            <circle
              cx="47"
              cy="7"
              r="7"
              fill="#28C93F"
              stroke="#2AAB29"
              stroke-width=".6"
            ></circle>
          </g>
        </svg>
      </div>
    );
  }

  function Window({ children }: WindowProps) {
    return (
      <div
        className="max-w-2xl rounded-md mx-auto h-55vh bg-black shadow-2xl shadow-black"
        style={{ "box-shadow": "1 20px 68px rgba(0, 0, 0, 0.55)" }}
      >
        {children}
      </div>
    );
  }

  function Terminal() {
    const [commandHistory, setCommandHistory] = useState([]);

    const handleCommandEntered = function (userCommand: string) {
      setCommandHistory((currentHistory: string[]) => {
        const result = [...currentHistory, userCommand];
        return result;
      });
    };

    return (
      <div className="pt-10 px-5">
        {commandHistory.map((command, index) => {
          return <div key={index}>{command}</div>;
        })}
        <TerminalInput onCommandEntered={handleCommandEntered} />
      </div>
    );
  }
}
