import React, { useState } from "react";
import TerminalInput from "./TerminalInput";
import CommandResultList from "./CommandResultList";
import fileTree from "../../data/fileTree";

export default function Terminal() {
  const [commandResultHistory, setCommandResultHistory] = useState([]);
  const [currentPath, setCurrentPath] = useState("");

  const calculateLsResult = () => {
    const currentTree = currentPath === "" ? fileTree : fileTree[currentPath];
    return (
      <ul>
        {Object.keys(currentTree).map((key) => (
          <li key={key}>{key}</li>
        ))}
      </ul>
    );
  };

  const calculateCdResult = () => {
    setCurrentPath("/about-me");
    return <div></div>;
  };

  const calculateCatResult = () => {
    return <div>hago que muestro el contenido</div>;
  };

  const calculateClearResult = () => {
    return null;
  };

  const calculateCommandResult = (command: string) => {
    const commandHandlers = {
      ls: calculateLsResult,
      cd: calculateCdResult,
      cat: calculateCatResult,
    };

    const resultCalculator =
      commandHandlers[command] ||
      function () {
        return "Command not found: " + command;
      };

    return {
      command: command,
      result: resultCalculator(),
    };
  };

  const handleCommandEntered = function (userCommand: string) {
    if (userCommand === "clear") {
      setCommandResultHistory([]);
    } else {
      setCommandResultHistory((history) => [
        ...history,
        calculateCommandResult(userCommand),
      ]);
    }
  };

  return (
    <div className="pt-10 px-5">
      <CommandResultList list={commandResultHistory} />
      <TerminalInput
        onCommandEntered={handleCommandEntered}
        currentPath={currentPath}
      />
    </div>
  );
}
