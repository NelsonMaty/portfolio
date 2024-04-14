import React from "react";

interface WindowProps {
  children: React.ReactNode;
}

export default function TerminalWindow() {
  return (
    <div className="relative">
      <WindowControls />
      <Window>
        <WindowBody />
      </Window>
    </div>
  );

  function WindowControls() {
    return (
      <div className="relative top-8 left-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="14"
          viewBox="0 0 54 14"
        >
          <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
            <circle
              cx="6"
              cy="6"
              r="6"
              fill="#FF5F56"
              stroke="#E0443E"
              stroke-width=".5"
            ></circle>
            <circle
              cx="26"
              cy="6"
              r="6"
              fill="#FFBD2E"
              stroke="#DEA123"
              stroke-width=".5"
            ></circle>
            <circle
              cx="46"
              cy="6"
              r="6"
              fill="#27C93F"
              stroke="#1AAB29"
              stroke-width=".5"
            ></circle>
          </g>
        </svg>
      </div>
    );
  }

  function Window({ children }: WindowProps) {
    return (
      <div
        className="max-w-3xl rounded-md mx-auto h-55vh bg-black shadow-2xl shadow-black"
        style={{ "box-shadow": "0 20px 68px rgba(0, 0, 0, 0.55)" }}
      >
        {children}
      </div>
    );
  }

  function WindowBody() {
    return (
      <div className="pt-11 px-5">
        <div id="terminal__prompt">
          <div id="terminal__prompt--location">~</div>
          <span id="terminal__prompt--bling">$</span>
          <span id="terminal__prompt--cursor"></span>
          <input autoFocus className="bg-inherit focus:outline-none" />
        </div>
      </div>
    );
  }
}
