import React, { useState } from "react";
import TerminalInput from "./TerminalInput";
import CommandResultList from "./CommandResultList";
import {
  CalculatePwdResult,
  CalculateLsResult,
  CalculateCatResult,
  CalculateCdResult,
} from "./commandResultCalculators";

type CommandResult = {
  command: string;
  result: React.ReactNode;
};

export default function Terminal() {
  const [commandResultHistory, setCommandResultHistory] = useState<
    CommandResult[]
  >([]);

  const calculateCommandResult = (command: string, args: string[]) => {
    const commandHandlers = {
      ls: CalculateLsResult,
      cd: CalculateCdResult,
      cat: CalculateCatResult,
      pwd: CalculatePwdResult,
    };
    const resultCalculator =
      commandHandlers[command as keyof typeof commandHandlers] ||
      function () {
        return "Command not found: " + command;
      };
    return {
      command: [command].concat(args).join(" "),
      result: resultCalculator(args),
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
      <TerminalInput onCommandEntered={handleCommandEntered} />
    </div>
  );
}
