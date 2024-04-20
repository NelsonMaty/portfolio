import type { CalculatorProps } from "./calculatorTypes";

function calculateResultingPath(currentPath: string, path: string) {
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

function isValidPath(path: string) {
  return true;
}

const calculateCdResult = ({
  currentPath,
  args,
  onPathChanged,
}: CalculatorProps) => {
  let resultingPath = calculateResultingPath(currentPath, args[0]);
  if (isValidPath(resultingPath)) {
    onPathChanged(resultingPath);
    return <div></div>;
  } else {
    return <div> cd: {resultingPath}: No such file or directory </div>;
  }
};

export { calculateCdResult };
