import fileTree from "../../../data/fileTree";
import type { CalculatorProps } from "./calculatorTypes";

const calculateLsResult = ({ currentPath }: CalculatorProps) => {
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

export { calculateLsResult };
