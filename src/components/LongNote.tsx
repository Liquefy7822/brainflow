import { useState } from "react";
import ReactMarkdown from "react-markdown";

type LongNoteProps = {
  text: string;
  onChange: (val: string) => void;
};

export default function LongNote({ text, onChange }: LongNoteProps) {
  const [isPreview, setIsPreview] = useState(false);

  return (
    <div className="flex flex-col flex-1 p-8 bg-gray-900 text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Long Note (Markdown)</h2>
        <button
          onClick={() => setIsPreview(!isPreview)}
          className="px-4 py-2 bg-indigo-600 rounded-md hover:bg-indigo-500 transition"
        >
          {isPreview ? "Edit" : "Preview"}
        </button>
      </div>

      {!isPreview ? (
        <textarea
          value={text}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Write your long note here using Markdown..."
          className="w-full h-[70vh] p-4 rounded-md bg-gray-800 text-white resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
        />
      ) : (
        <div className="w-full h-[70vh] p-4 rounded-md bg-gray-800 overflow-auto prose prose-invert">
          <ReactMarkdown>{text || "_Nothing yet…_"}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}
