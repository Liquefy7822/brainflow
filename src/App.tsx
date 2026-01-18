import { useState } from "react";
import "./App.css";

// Simple Session component
function Session() {
  const [text, setText] = useState("");

  return (
    <div className="session p-4 bg-gray-900 text-white rounded-md shadow-md max-w-3xl mx-auto my-4">
      <h2 className="text-xl font-semibold mb-2">New Session</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start thinking..."
        className="w-full h-60 p-2 rounded-md bg-gray-800 text-white resize-none focus:outline-none"
      />
    </div>
  );
}

function App() {
  return (
    <div className="bg-gray-950 min-h-screen p-4">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white">BrainFlow 🧠</h1>
        <p className="text-gray-400 mt-2">
          A session-based, brain-inspired note app
        </p>
      </header>

      {/* First session */}
      <Session />

      {/* Placeholder for future sessions */}
      <Session />
    </div>
  );
}

export default App;
