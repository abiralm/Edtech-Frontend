import { SlOptionsVertical } from "react-icons/sl";
import { FaVideo,FaFilePdf} from "react-icons/fa";
import { MdEdit, MdQuiz } from "react-icons/md";
import { LessonType } from "@/types";
import LessonList from "./lessonList";


interface CourseItemsProps {
  lessons:LessonType[];

}



const CourseItems = ({lessons}:CourseItemsProps) => {


  console.log(lessons)
  return (
    
  );
}

export default CourseItems