import { FaVideo,FaFilePdf} from "react-icons/fa";
import { MdQuiz } from "react-icons/md";

const AddNewContent = () => {
  return (
    <div className="mt-6 border-2 border-dashed p-4 rounded-2xl">
      <div className="font-bold">Add New Lesson</div>
      
      <div className="grid grid-cols-3 w-full gap-2 my-4">

        <div className="border-2 flex flex-col items-center p-4 rounded-xl gap-2 hover:bg-[#F9FAFB]">
        <FaFilePdf className="text-xl "/>
          <div className="flex flex-col items-center">
            <h2 className="font-bold">Add Pdf</h2>
            <h4>Upload pdf </h4>
          </div>
        </div>
      
        <div className="border-2 flex flex-col items-center p-4 rounded-xl gap-2 hover:bg-[#F9FAFB]">
          <FaVideo className="text-xl"/>
          <div className="flex flex-col items-center">
            <h2 className="font-bold">Add Video</h2>
            <h4>Upload or embed </h4>
          </div>
        </div>
      
        <div className="border-2 flex flex-col items-center p-4 rounded-xl gap-2 hover:bg-[#F9FAFB]">
          <MdQuiz className="text-xl"/>
          <div className="flex flex-col items-center">
            <h2 className="font-bold">Add Quiz</h2>
            <h4 >Create Quiz</h4>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AddNewContent