import BasePrompt from "./BasePrompt";

type CommandResult = {
  command: string;
  result: React.ReactNode;
};

type CommandResultListProps = {
  list: CommandResult[];
};

export default function CommandResultList({ list }: CommandResultListProps) {
  return (
    <>
      {list.map((commandResult: CommandResult, index: number) => {
        return (
          <div key={index}>
            <BasePrompt path={"hola"}>
              <>{commandResult.command}</>
            </BasePrompt>
            <div>{commandResult.result}</div>
          </div>
        );
      })}
    </>
  );
}
