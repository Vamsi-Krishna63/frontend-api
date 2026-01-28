import { useState } from "react";

function App() {
  const [output, setOutput] = useState<any>(null);

  const backendUrl = (window as any).BACKEND_URL;

  const checkHealth = async () => {
    const res = await fetch(`${backendUrl}/health`);
    setOutput(await res.json());
  };

  const greet = async () => {
    const res = await fetch(`${backendUrl}/greet`);
    setOutput(await res.json());
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>React Frontend → Backend Test</h2>

      <button onClick={checkHealth}>Check Health</button>
      <button onClick={greet} style={{ marginLeft: 10 }}>
        Greet
      </button>

      <pre>{JSON.stringify(output, null, 2)}</pre>
    </div>
  );
}

export default App;
