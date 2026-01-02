import { useParams } from "react-router-dom";
import { usePatterns } from "../../redux/redux-store";
import PatternForm from "./pattern-form";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { auto as autoFormat } from "@cloudinary/url-gen/qualifiers/format";
import { auto as autoQuality } from "@cloudinary/url-gen/qualifiers/quality";

export const PatternSteps = () => {
  const { patternId } = useParams<{ patternId: string }>();
  const patterns = usePatterns();

  const pattern = patterns.find((p) => p.id === patternId);

  if (!pattern) return <div>Pattern not found</div>;
  const cld = new Cloudinary({ cloud: { cloudName: "dufuwtyow" } });
  const cldImg = cld
    .image(pattern.filePath)
    .format("auto")
    .quality(autoQuality());
  return (
    <div className="flex rounded-md p-4">
      <div className="flex rounded-lg border-[1px] border-surface bg-background justify-center items-center p-8 gap-4">
        <div className="flex items-center">
          <AdvancedImage
            cldImg={cldImg}
            className="h-3/4 max-h-[75vh] rounded-md"
            alt={pattern.name}
          />
        </div>
        <div className="items-center">
          <PatternForm pattern={pattern} />
        </div>
      </div>
    </div>
  );
};
