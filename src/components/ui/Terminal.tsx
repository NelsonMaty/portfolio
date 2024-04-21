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

type CommandResult = {
  command: string;
  result: React.ReactNode;
};

export default function Terminal() {
  const [commandResultHistory, setCommandResultHistory] = useState<
    CommandResult[]
  >([]);
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
      onPathChanged: (path: string) => {
        setCurrentPath(path);
      },
    };
    const resultCalculator =
      commandHandlers[command as keyof typeof commandHandlers] ||
      function () {
        return "Command not found: " + command;
      };
    return {
      command: [command].concat(args).join(" "),
      result: resultCalculator(calculatorParameters),
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
