import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

type Page = "home" | "long";

function TiptapEditor({
  content,
  setContent,
  onBack,
}: {
  content: string;
  setContent: (val: string) => void;
  onBack: () => void;
}) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content || "<p><br></p>",
    autofocus: true,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#1e1e1e] text-white">
      
      {/* Top Bar */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <button
          onClick={onBack}
          className="text-gray-300 hover:text-white transition"
        >
          ← Back
        </button>

        <span className="text-sm text-gray-400">Long Note</span>

        <div className="w-10" />
      </header>

      {/* Writing Area */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-6 py-10">
          <EditorContent
            editor={editor}
            className="min-h-[70vh] outline-none prose prose-invert"
          />
        </div>
      </main>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [longNote, setLongNote] = useState("");

  if (page === "long") {
    return (
      <TiptapEditor
        content={longNote}
        setContent={setLongNote}
        onBack={() => setPage("home")}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">New Session</h1>
        <p className="text-gray-400">What kind of note do you want to make?</p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setPage("long")}
            className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition"
          >
            Long Note
          </button>

          <button
            className="px-6 py-3 border border-gray-600 rounded-lg text-gray-400 hover:text-white hover:border-white transition"
          >
            Short Note (Coming Soon)
          </button>
        </div>
      </div>
    </div>
  );
}
