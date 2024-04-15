import React, { useState } from "react";
import TerminalInput from "./TerminalInput";
import CommandResultList from "./CommandResultList";

export default function Terminal() {
  const [commandResultHistory, setCommandResultHistory] = useState([]);

  const calculateCommandResult = (command: string) => {
    const results = {
      ls: <>retorno lista de archivos</>,
      cd: <>redirecciona al directorio</>,
      cat: <>muestra el contenido de un archivo</>,
    };
    return {
      command: command,
      result: results[command] || <>"Comando no encontrado"</>,
    };
  };

  const handleCommandEntered = function (userCommand: string) {
    const currentCommandResult = calculateCommandResult(userCommand);
    setCommandResultHistory((history) => [...history, currentCommandResult]);
  };

  return (
    <div className="pt-10 px-5">
      <CommandResultList list={commandResultHistory} />
      <TerminalInput onCommandEntered={handleCommandEntered} />
    </div>
  );
}
