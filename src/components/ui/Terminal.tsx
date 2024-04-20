import React, { useState } from "react";
import TerminalInput from "./TerminalInput";
import CommandResultList from "./CommandResultList";
import {
  calculatePwdResult,
  calculateLsResult,
  calculateCatResult,
  calculateCdResult,
} from "./commandResultCalculators";

const rootPath = "~/Nelson M. Ríos/resume";

export default function Terminal() {
  const [commandResultHistory, setCommandResultHistory] = useState([]);
  const [currentPath, setCurrentPath] = useState("");

  const calculateCommandResult = (command: string, args: string[]) => {
    const commandHandlers = {
      ls: calculateLsResult,
      cd: calculateCdResult,
      cat: calculateCatResult,
      pwd: calculatePwdResult,
    };
    const calculatorParameters = {
      args,
      currentPath,
      onPathChanged: (path) => {
        setCurrentPath(path);
      },
    };
    const resultCalculator =
      commandHandlers[command].bind(null, calculatorParameters) ||
      function () {
        return "Command not found: " + command;
      };
    const result = resultCalculator();
    return {
      command: [command].concat(args).join(" "),
      result: resultCalculator(),
    };
  };

  const handleCommandEntered = function (command: string, args: string[]) {
    if (command === "clear") {
      setCommandResultHistory([]);
    } else {
      setCommandResultHistory((history) => [
        ...history,
        calculateCommandResult(command, args),
      ]);
    }
  };

  return (
    <div className="pt-10 px-5">
      <CommandResultList list={commandResultHistory} />
      <TerminalInput
        onCommandEntered={handleCommandEntered}
        currentPath={rootPath + "/" + currentPath}
      />
    </div>
  );
}
