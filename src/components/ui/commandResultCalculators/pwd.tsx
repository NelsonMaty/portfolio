import { CalculatorProps } from "./calculatorTypes";
const calculatePwdResult = ({ currentPath }: CalculatorProps) => {
  return <div>{"/Users/guest/Nelson M. Rios/resume/" + currentPath}</div>;
};

export { calculatePwdResult };
