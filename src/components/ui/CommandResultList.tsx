import BasePrompt from "./BasePrompt";

type CommandResult = {
  command: string;
  result: () => React.ReactElement;
};

type CommandResultListProps = {
  list: CommandResult[];
};

export default function CommandResultList({ list }: CommandResultListProps) {
  return (
    <>
      {list.map((commandResult: CommandResult, index: int) => {
        return (
          <div key={index}>
            <BasePrompt>{commandResult.command}</BasePrompt>
            <div>{commandResult.result}</div>
          </div>
        );
      })}
    </>
  );
}
