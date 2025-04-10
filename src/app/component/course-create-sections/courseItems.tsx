import { SlOptionsVertical } from "react-icons/sl";
import { FaVideo,FaFilePdf} from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { LessonType } from "@/types";


interface CourseItemsProps {
  lessons:LessonType[];
}


const CourseItems = ({lessons}:CourseItemsProps) => {
  console.log(lessons)
  return (
    <div className="space-y-2">
      {lessons.map((lesson) => (
        <div 
          key={lesson.lesson_id} 
          className="flex gap-2 justify-between items-center bg-[#F9FAFB] p-3 rounded-md"
        >
          <div className="flex gap-2 items-center">
            {lesson.type === "video" ? (
              <FaVideo />
            ) : lesson.type === "pdf" ? (
              <FaFilePdf />
            ) : lesson.type === "quiz" ? (
              <MdQuiz />
            ) : null}
            <p>{lesson.type === "video" 
                ? (lesson.video?.title || "Untitled Video") 
                : lesson.type === "pdf" 
                  ? (lesson.pdf?.title || "Untitled PDF")
                  : "Quiz"}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            1:00
            <SlOptionsVertical 
              className="text-md cursor-pointer" 
              onClick={() => console.log("Options clicked for lesson:", lesson.lesson_id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CourseItems