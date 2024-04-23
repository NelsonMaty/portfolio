import { useContext } from "react";
import { CurrentPathContext } from "@/contexts/CurrentPathContext";

function calculateResultingPath(currentPath: string, args: string[]) {
  let resultingPath;
  const path = args ? args[0] : "";
  if (path && path !== "~") {
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

function isValidPath(path: string) {
  return true;
}

const CalculateCdResult = (args: string[]) => {
  const { currentPath, setCurrentPath } = useContext(CurrentPathContext);
  let resultingPath = calculateResultingPath(currentPath, args);
  if (isValidPath(resultingPath)) {
    setCurrentPath(resultingPath);
    return <div></div>;
  } else {
    return <div> cd: {resultingPath}: No such file or directory </div>;
  }
};

export { CalculateCdResult };
