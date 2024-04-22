import { PropsWithChildren, CSSProperties } from "react";

export default function Window({ children }: PropsWithChildren) {
  return (
    <div className="relative">
      <WindowControls />
      <WindowFrame>{children}</WindowFrame>
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
          <g fill="none" fillRule="evenodd" transform="translate(2 1)">
            <circle
              cx="7"
              cy="7"
              r="7"
              fill="#FF6F56"
              stroke="#E0444E"
              strokeWidth=".6"
            ></circle>
            <circle
              cx="27"
              cy="7"
              r="7"
              fill="#FFBD3E"
              stroke="#DEA124"
              strokeWidth=".6"
            ></circle>
            <circle
              cx="47"
              cy="7"
              r="7"
              fill="#28C93F"
              stroke="#2AAB29"
              strokeWidth=".6"
            ></circle>
          </g>
        </svg>
      </div>
    );
  }

  function WindowFrame({ children }: PropsWithChildren) {
    return (
      <div
        className="max-w-2xl rounded-md mx-auto h-55vh bg-black shadow-2xl shadow-black"
        style={
          {
            boxShadow: "1 20px 68px rgba(0, 0, 0, 0.55)",
          } as CSSProperties
        }
      >
        {children}
      </div>
    );
  }
}
