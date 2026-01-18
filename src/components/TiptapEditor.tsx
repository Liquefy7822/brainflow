import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

type TiptapEditorProps = {
  content: string;
  onUpdate: (val: string) => void;
};

export default function TiptapEditor({ content, onUpdate }: TiptapEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    onUpdate: ({ editor }) => {
      onUpdate(editor.getHTML());
    },
  });

  return (
    <div className="tiptap-editor prose prose-invert max-w-4xl mx-auto p-8 bg-gray-900 text-white rounded-md">
      <EditorContent editor={editor} />
    </div>
  );
}
