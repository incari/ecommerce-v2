"use client";

import { useSearchParams } from "next/navigation";
import Highlighter from "react-highlight-words";

const Title = ({ title }: { title?: string }) => {
  const searchParams = useSearchParams();
  const highlight = searchParams.get("search")?.toString() || "";

  return (
    <h1 className="text-4xl text-center py-8">
      <Highlighter
        highlightClassName="YourHighlightClass"
        searchWords={[highlight]}
        autoEscape={true}
        textToHighlight={title || ""}
      />
    </h1>
  );
};
export { Title };
