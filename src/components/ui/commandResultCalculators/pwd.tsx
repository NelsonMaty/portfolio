import { useContext } from "react";
import { CurrentPathContext } from "@/contexts/CurrentPathContext";

const CalculatePwdResult = () => {
  const { currentPath } = useContext(CurrentPathContext);
  return <div>{"/Users/guest/Nelson M. Rios/resume/" + currentPath}</div>;
};

export { CalculatePwdResult };
