import { useState } from "react";
import "./App.css";

// Single Session component
function Session({ text, onChange }: { text: string; onChange: (val: string) => void }) {
  return (
    <div className="session p-4 bg-gray-800 text-white rounded-lg shadow-md max-w-3xl w-full mx-auto my-4">
      <textarea
        value={text}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Start thinking..."
        className="w-full h-40 p-2 rounded-md bg-gray-700 text-white resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
}

function App() {
  const [sessions, setSessions] = useState<string[]>([""]); // start with 1 session

  const addSession = () => setSessions([...sessions, ""]);

  const updateSession = (index: number, value: string) => {
    const newSessions = [...sessions];
    newSessions[index] = value;
    setSessions(newSessions);
  };

  return (
    <div className="bg-gray-950 min-h-screen flex flex-col">
      {/* Header */}
      <header className="text-center py-8 border-b border-gray-800">
        <h1 className="text-4xl font-bold text-white mb-2">BrainFlow 🧠</h1>
        <p className="text-gray-400">
          A session-based, brain-inspired note app. Thoughts flow, links grow, structure emerges naturally.
        </p>
        <button
          onClick={addSession}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition"
        >
          + New Session
        </button>
      </header>

      {/* Sessions List */}
      <main className="flex-1 overflow-y-auto p-4">
        {sessions.map((text, idx) => (
          <Session key={idx} text={text} onChange={(val) => updateSession(idx, val)} />
        ))}
      </main>

      {/* Footer */}
      <footer className="text-center p-4 text-gray-600 border-t border-gray-800">
        BrainFlow &copy; 2026 — built with ❤️
      </footer>
    </div>
  );
}

export default App;
