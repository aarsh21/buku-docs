import { create } from "zustand";
import { Editor } from "@tiptap/react";

interface EditorState {
  editor: Editor | null;
  setEditor: (Editor: Editor | null) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  editor: null,
  setEditor: (editor) => set({ editor }),
}));
