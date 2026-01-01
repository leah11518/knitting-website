import { useParams } from "react-router-dom";
import { usePatterns } from "../../redux/redux-store";
import PatternForm from "./pattern-form";

export const PatternSteps = () => {
  const { patternId } = useParams<{ patternId: string }>();
  const patterns = usePatterns();

  const pattern = patterns.find((p) => p.id === patternId);

  if (!pattern) return <div>Pattern not found</div>;

  return (
    <div className="flex rounded-md p-4">
      <div className="flex rounded-lg border-[1px] border-surface bg-background justify-center items-center p-8 gap-4">
        <div className="flex items-center">
          <img
            src={pattern.filePath}
            alt={pattern.name}
            className="h-3/4 rounded-md"
          />
          {/* Display more details if you want */}
        </div>
        <div className="items-center">
          <PatternForm pattern={pattern} />
        </div>
      </div>
    </div>
  );
};
