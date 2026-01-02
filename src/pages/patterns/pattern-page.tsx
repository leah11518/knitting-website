import CustomButton from "../../components/button";
import { usePatterns } from "../../redux/redux-store";
import { AddPattern } from "./add-pattern";
import { Link } from "react-router-dom";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { auto as autoFormat } from "@cloudinary/url-gen/qualifiers/format";
import { auto as autoQuality } from "@cloudinary/url-gen/qualifiers/quality";

export const Patterns = () => {
  const patterns = usePatterns();
  const cld = new Cloudinary({ cloud: { cloudName: "dufuwtyow" } });

  return (
    <div className="flex flex-col gap-4 p-2">
      <CustomButton onClick={() => localStorage.clear()}>
        clear local storage
      </CustomButton>
      {patterns.length === 0 ? (
        <div>
          <div className="text-muted-foreground p-1">No patterns yet</div>
          <AddPattern />
        </div>
      ) : (
        <div>
          <AddPattern />
          <div className="flex gap-4 pt-2">
            {patterns.map((pattern, index) => {
              const cldImg = cld
                .image(pattern.filePath)
                .format("auto")
                .quality(autoQuality());
              return (
                <Link
                  key={index}
                  to={`/patterns/${pattern.id}`}
                  className="w-64 rounded-lg overflow-hidden shadow hover:shadow-lg transform hover:scale-[1.03] transition"
                >
                  <AdvancedImage
                    cldImg={cldImg}
                    alt={pattern.name}
                    className="h-96 w-96 rounded-md object-cover"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
