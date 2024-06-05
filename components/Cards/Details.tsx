import Highlighter from "react-highlight-words";

const Details = ({
  icon: Icon,
  text,
  className,
  highlight = "",
}: {
  icon: React.ElementType;
  text: string;
  highlight?: string;
  className?: string;
}) => {
  // Function to create a regex that matches the numeric sequence with commas
  const createHighlightRegex = (searchValue: string): string[] => {
    const digits = searchValue.split("");
    const regexPattern = digits.join(",?");

    // Find matches in the main text, considering formatted numbers
    const matches = text.match(new RegExp(regexPattern, "g"));
    if (matches) {
      return matches; // Return matched patterns, e.g., "2,4"
    }
    return [];
  };

  // Get the words to be highlighted based on the current text and highlight value
  const searchWords = createHighlightRegex(highlight);

  return (
    <div className={`flex items-center ${className} mb-2`}>
      <Icon className="mr-2 text-gray-400" />
      <Highlighter
        highlightClassName="YourHighlightClass"
        searchWords={searchWords}
        autoEscape={true}
        textToHighlight={text}
      />
    </div>
  );
};

export { Details };
