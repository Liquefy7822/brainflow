import { useState } from "react";

export default function Session() {
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
