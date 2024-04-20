interface BasePromptProps {
  path: string;
  children: React.ReactNode;
}

export default function BasePrompt({ children, path }: BasePromptProps) {
  return (
    <div id="terminal__prompt">
      <div id="terminal__prompt--location">{path}</div>
      <span id="terminal__prompt--bling">&gt;&nbsp;</span>
      <span id="terminal__prompt--cursor"></span>
      {children}
    </div>
  );
}
