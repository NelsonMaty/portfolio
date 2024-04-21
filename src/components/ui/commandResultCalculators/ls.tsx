import fileTree from "../../../data/fileTree";
import { useContext } from "react";
import { CurrentPathContext } from "@/contexts/CurrentPathContext";

const CalculateLsResult = () => {
  let currentTree = fileTree;

  const { currentPath } = useContext(CurrentPathContext);

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

export { CalculateLsResult };
