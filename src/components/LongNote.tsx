type LongNoteProps = {
  content: string;
  onChange: (val: string) => void;
  onBack: () => void;
};

export default function LongNote({ content, onChange, onBack }: LongNoteProps) {
  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    onChange(target.innerText);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-gray-800">
        <button
          onClick={onBack}
          className="text-indigo-400 hover:text-indigo-300 font-semibold px-4 py-2 rounded-md border border-indigo-400 hover:border-indigo-300 transition"
        >
          ← Back
        </button>
        <h1 className="text-2xl font-bold text-white">Long Note</h1>
        <div className="w-24"></div> {/* empty space to balance layout */}
      </header>

      {/* Full-page content editable area */}
      <div
        onInput={handleInput}
        contentEditable
        suppressContentEditableWarning
        spellCheck={true}
        className="flex-1 p-8 prose prose-invert max-w-4xl mx-auto outline-none overflow-auto"
      >
        {content || (
          <p className="text-gray-500">
            Start typing your long note… Use Markdown syntax freely.
          </p>
        )}
      </div>
    </div>
  );
}
