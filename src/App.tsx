import { useState } from "react";
import "./App.css";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

// TipTap editor component
function TiptapEditor({ content, setContent }: { content: string; setContent: (val: string) => void }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  return (
    <div className="tiptap-container prose prose-invert max-w-4xl mx-auto p-8 bg-gray-900 text-white rounded-md">
      <EditorContent editor={editor} />
    </div>
  );
}

// ShortSession (unchanged)
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
  const [longContent, setLongContent] = useState("");

  const addShortSession = () => setShortSessions([...shortSessions, ""]);
  const updateShortSession = (idx: number, val: string) => {
    const sessions = [...shortSessions];
    sessions[idx] = val;
    setShortSessions(sessions);
  };

  return (
    <div className="bg-gray-950 min-h-screen flex flex-col">
      {/* Landing Page */}
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

      {/* Long Note with TipTap */}
      {mode === "long" && (
        <>
          <header className="flex justify-between p-4 border-b border-gray-800">
            <button
              onClick={() => setMode("landing")}
              className="text-indigo-400 hover:text-indigo-300 font-semibold px-4 py-2 rounded-md border border-indigo-400 hover:border-indigo-300 transition"
            >
              ← Back
            </button>
          </header>

          <TiptapEditor content={longContent} setContent={setLongContent} />
        </>
      )}

      {/* Short Notes */}
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
              <ShortSession
                key={idx}
                text={text}
                onChange={(val) => updateShortSession(idx, val)}
              />
            ))}
          </main>
        </>
      )}
    </div>
  );
}

export default App;
