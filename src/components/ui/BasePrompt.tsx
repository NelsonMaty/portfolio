interface BasePromptProps {
  children: React.ReactNode;
}

export default function BasePrompt({ children }: BasePromptProps) {
  return (
    <div id="terminal__prompt">
      <div id="terminal__prompt--location">~/Nelson Rios/resume</div>
      <span id="terminal__prompt--bling">&gt;&nbsp;</span>
      <span id="terminal__prompt--cursor"></span>
      {children}
    </div>
  );
}
