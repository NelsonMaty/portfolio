import React, { useState } from "react";
import TerminalInput from "./TerminalInput";
import CommandResultList from "./CommandResultList";
import fileTree from "../../data/fileTree";

function isValidPath(path: string) {
  return true;
}

export default function Terminal() {
  const [commandResultHistory, setCommandResultHistory] = useState([]);
  const [currentPath, setCurrentPath] = useState("");

  const rootPath = "~/Nelson M. Ríos/resume";

  function calculateResultingPath(path: string) {
    let resultingPath;
    if (path) {
      if (currentPath === "") {
        resultingPath = path;
      } else {
        resultingPath = currentPath + "/" + path;
      }
    } else {
      resultingPath = "";
    }
    return resultingPath;
  }

  const calculateCdResult = (args: string[]) => {
    let resultingPath = calculateResultingPath(args[0]);
    if (isValidPath(resultingPath)) {
      setCurrentPath(resultingPath);
      return <div></div>;
    } else {
      return <div> cd: {resultingPath}: No such file or directory </div>;
    }
  };

  const calculateLsResult = () => {
    let currentTree = fileTree;

    if (currentPath !== "") {
      const pathParts = currentPath.split(".");
      for (const part of pathParts) {
        if (currentTree[part]) {
          currentTree = currentTree[part];
        }
      }
    }
    return (
      <ul>
        {Object.keys(currentTree).map((key) => (
          <li key={key}>{key}</li>
        ))}
      </ul>
    );
  };

  const calculateCatResult = (args: string[]) => {
    return <div>hago que muestro el contenido</div>;
  };

  const calculateClearResult = () => {
    return null;
  };

  const calculatePwdResult = () => {
    return <div>{rootPath + "/" + currentPath}</div>;
  };

  const calculateCommandResult = (command: string, args: string[]) => {
    const commandHandlers = {
      ls: calculateLsResult,
      cd: calculateCdResult,
      cat: calculateCatResult,
      pwd: calculatePwdResult,
    };

    const resultCalculator =
      commandHandlers[command].bind(null, args) ||
      function () {
        return "Command not found: " + command;
      };

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
