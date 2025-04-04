import { useState } from "react";
import { FaVideo,FaFilePdf} from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import VideoForm from "./videoForm";
import PdfForm from "./pdfForm";
import QuizForm from "./quizForm";
import QuizQuestionsForm from "./quizQuestionsForm";

const AddNewContent = () => {

  const [showAddLessonForm,setshowAddLessonForm] =useState<boolean>(false);
  const [lessonType, setLessonType] = useState("");

  const openLessonForm = (type: string)=>{
    setLessonType(type)
    toggleAddLessonForm();
  }

  const toggleAddLessonForm = ()=>{
    console.log(showAddLessonForm)
    setshowAddLessonForm(!showAddLessonForm)
  }
  
  if (showAddLessonForm){
    switch (lessonType) {
      case "video":
        return(<VideoForm toggleForm={toggleAddLessonForm} showAddLessonForm={false}/>)
      case "pdf":
        return(<PdfForm toggleForm={toggleAddLessonForm} showAddLessonForm={false}/>)
      case "quiz":
        return(<QuizForm toggleForm={toggleAddLessonForm} showAddLessonForm={false}/>)
    } 
  }

  return (
    (
      <div className="mt-6 border-2 border-dashed p-4 rounded-2xl">
        <div className="font-bold">Add New Lesson</div>
          
        <div className="grid grid-cols-3 w-full gap-2 my-4">

          <div className="cursor-pointer border-2 flex flex-col items-center p-4 rounded-xl gap-2 hover:bg-[#F9FAFB] " onClick={()=>openLessonForm("pdf")}>
            <FaFilePdf className="text-xl "/>
            <div className="flex flex-col items-center">
              <h2 className="font-bold">Add Pdf</h2>
              <h4>Upload pdf </h4>
            </div>  
          </div>
        
          <div className="cursor-pointer border-2 flex flex-col items-center p-4 rounded-xl gap-2 hover:bg-[#F9FAFB]" onClick={()=>openLessonForm("video")}>
            <FaVideo className="text-xl"/>
            <div className="flex flex-col items-center">
              <h2 className="font-bold">Add Video</h2>
              <h4>Upload or embed </h4>
            </div>
          </div>
        
          <div className="cursor-pointer border-2 flex flex-col items-center p-4 rounded-xl gap-2 hover:bg-[#F9FAFB]" onClick={()=>openLessonForm("quiz")}>
            <MdQuiz className="text-xl"/>
            <div className="flex flex-col items-center">
              <h2 className="font-bold">Add Quiz</h2>
              <h4 >Create Quiz</h4>
            </div>
          </div>

        </div>
      </div>
    )
  )
}

export default AddNewContent