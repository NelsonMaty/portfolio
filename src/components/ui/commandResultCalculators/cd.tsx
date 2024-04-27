import { useContext, useEffect } from "react";
import { CurrentPathContext } from "@/contexts/CurrentPathContext";

function calculateResultingPath(currentPath: string, args: string[]): string {
  let targetPath = args[0] || "";
  let resultingPath;

  if (targetPath == "") {
    resultingPath = "";
  } else if (targetPath === "-") {
    resultingPath = window.previousPath;
  } else if (targetPath === ".") {
    resultingPath = currentPath;
  } else if (targetPath === "..") {
    if (currentPath.includes("/")) {
      resultingPath = currentPath.slice(0, currentPath.lastIndexOf("/"));
    } else {
      resultingPath = "";
    }
  } else if (targetPath.startsWith("../")) {
    let parts = targetPath.split("/");
    while (parts[0] === "..") {
      if (currentPath.includes("/")) {
        currentPath = currentPath.slice(0, currentPath.lastIndexOf("/"));
      } else {
        currentPath = "";
      }
      parts.shift();
    }
    if (parts.length > 0) {
      resultingPath = currentPath + "/" + parts.join("/");
    } else {
      resultingPath = currentPath;
    }
  } else if (targetPath === "~") {
    resultingPath = "";
  } else if (targetPath.startsWith("~/")) {
    currentPath = "";
    resultingPath = targetPath.slice(2);
  } else {
    if (currentPath === "") {
      resultingPath = targetPath;
    } else {
      resultingPath = currentPath + "/" + targetPath;
    }
  }

  return resultingPath || "";
}

function isValidPath(path: string) {
  return true;
}

const CalculateCdResult = (args: string[]) => {
  const { currentPath, setCurrentPath } = useContext(CurrentPathContext);
  const resultingPath = calculateResultingPath(currentPath, args);

  useEffect(() => {
    if (isValidPath(resultingPath)) {
      window.previousPath = currentPath;
      setCurrentPath(resultingPath);
    }
  }, []);

  if (isValidPath(resultingPath)) {
    return <div></div>;
  } else {
    return <div> cd: {resultingPath}: No such file or directory </div>;
  }
};

export { CalculateCdResult };
