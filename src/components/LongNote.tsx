import { useRef, useEffect } from "react";

type LongNoteProps = {
  content: string;
  onChange: (val: string) => void;
};

export default function LongNote({ content, onChange }: LongNoteProps) {
  const editorRef = useRef<HTMLDivElement>(null);

  // Initialize editor content
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = content;
    }
  }, [content]);

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  return (
    <div className="flex flex-col flex-1 bg-gray-900 text-white">
      {/* Header */}
      <div className="p-4 border-b border-gray-800 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Long Note</h2>
      </div>

      {/* Full-page content editable area */}
      <div
        ref={editorRef}
        onInput={handleInput}
        className="flex-1 p-8 outline-none overflow-auto prose prose-invert max-w-5xl mx-auto"
        contentEditable
        suppressContentEditableWarning
        spellCheck={true}
      >
        {/* placeholder */}
        <p className="text-gray-500">Start typing your long note…</p>
      </div>
    </div>
  );
}
