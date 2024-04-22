import { createContext, useState, PropsWithChildren } from "react";

export const CurrentPathContext = createContext({
  currentPath: "",
  setCurrentPath: (path: string) => {},
});

export const CurrentPathProvider = ({ children }: PropsWithChildren) => {
  const [currentPath, setCurrentPath] = useState("");
  return (
    <CurrentPathContext.Provider value={{ currentPath, setCurrentPath }}>
      {children}
    </CurrentPathContext.Provider>
  );
};
