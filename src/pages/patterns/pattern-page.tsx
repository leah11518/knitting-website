import { usePatterns } from "../../redux/redux-store";
import CustomButton from "../../components/button";
import { AddPattern } from "./add-pattern";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const Patterns = () => {
  const patterns = usePatterns();
  const dispatch = useDispatch();
  localStorage.clear();
  return (
    <div className="flex flex-col gap-4 p-2">
      <CustomButton onClick={() => localStorage.clear()}>
        Clear local storage
      </CustomButton>
      {patterns.length === 0 ? (
        <>
          <div className="text-muted-foreground">No patterns yet</div>
          <AddPattern />
        </>
      ) : (
        <div>
          <AddPattern />
          <div className="flex gap-4 pt-2">
            {patterns.map((pattern, index) => (
              <Link
                key={index}
                to={`/patterns/${pattern.id}`}
                className="w-64 rounded-lg overflow-hidden shadow hover:shadow-lg transform hover:scale-[1.03] transition"
              >
                <img
                  src={pattern.filePath}
                  alt={`Pattern ${index + 1}`}
                  className="h-96 w-96 rounded-md object-cover"
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
