import fileTree from "../../../data/fileTree";
import { useContext } from "react";
import { CurrentPathContext } from "@/contexts/CurrentPathContext";

const CalculateLsResult = () => {
  let currentTree: Object = fileTree;

  const { currentPath } = useContext(CurrentPathContext);
  if (currentPath !== "") {
    const pathParts = currentPath.split("/");
    for (const part of pathParts) {
      type ValidPath = keyof typeof currentTree;
      if (currentTree[part as ValidPath] !== undefined) {
        currentTree = currentTree[part as ValidPath];
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
