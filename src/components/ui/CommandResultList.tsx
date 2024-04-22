import BasePrompt from "./BasePrompt";
import { rootPath } from "@/data/rootPath";

type CommandResultType = {
  path: string;
  command: string;
  result: React.ReactNode;
};

type CommandResultListProps = {
  list: CommandResultType[];
};

export default function CommandResultList({ list }: CommandResultListProps) {
  return (
    <>
      {list.map((commandResult: CommandResultType, index: number) => {
        const { command, result, path } = commandResult;
        const resultingPath = path !== "" ? rootPath + "/" + path : rootPath;
        return (
          <div key={index}>
            <BasePrompt path={resultingPath}>
              <>{command}</>
            </BasePrompt>
            <div>{result}</div>
          </div>
        );
      })}
    </>
  );
}
