import { useState } from "react";
import "./App.css";
import LongNote from "./components/LongNote";

// ShortSession component stays the same
function ShortSession({ text, onChange }: { text: string; onChange: (val: string) => void }) {
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
  const [mode, setMode] = useState<"landing" | "short" | "long">("landing");
  const [shortSessions, setShortSessions] = useState<string[]>([""]);
  const [longNote, setLongNote] = useState("");

  const addShortSession = () => setShortSessions([...shortSessions, ""]);
  const updateShortSession = (idx: number, val: string) => {
    const newSessions = [...shortSessions];
    newSessions[idx] = val;
    setShortSessions(newSessions);
  };

  return (
    <div className="bg-gray-950 min-h-screen flex flex-col">
      {/* Landing */}
      {mode === "landing" && (
        <div className="flex flex-col items-center justify-center flex-1 p-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">BrainFlow 🧠</h1>
          <p className="text-gray-400 mb-8">
            Start a new thinking session. Choose your note style:
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => setMode("long")}
              className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition"
            >
              Long Note
            </button>
            <button
              onClick={() => setMode("short")}
              className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-500 transition"
            >
              Short Note
            </button>
          </div>
        </div>
      )}

      {/* Long Note */}
      {mode === "long" && (
        <>
          <header className="text-center py-4 border-b border-gray-800">
            <button
              onClick={() => setMode("landing")}
              className="text-indigo-400 hover:underline"
            >
              ← Back
            </button>
          </header>
          <LongNote text={longNote} onChange={setLongNote} />
        </>
      )}

      {/* Short Note */}
      {mode === "short" && (
        <>
          <header className="text-center py-8 border-b border-gray-800">
            <button
              onClick={() => setMode("landing")}
              className="text-indigo-400 hover:underline"
            >
              ← Back
            </button>
            <h2 className="text-3xl font-bold text-white mt-2">Short Notes</h2>
            <button
              onClick={addShortSession}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition"
            >
              + New Session
            </button>
          </header>

          <main className="flex-1 overflow-y-auto p-4">
            {shortSessions.map((text, idx) => (
              <ShortSession key={idx} text={text} onChange={(val) => updateShortSession(idx, val)} />
            ))}
          </main>
        </>
      )}
    </div>
  );
}

export default App;
