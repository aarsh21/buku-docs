interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

import { Editor } from "./editor";
import { Toolbar } from "./toolbar";

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;
  return (
    <div className="min-h-screen bg-[#fafbfd]">
      <Toolbar />
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
