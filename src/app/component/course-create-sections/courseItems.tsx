import { SlOptionsVertical } from "react-icons/sl";
import { FaVideo,FaFilePdf} from "react-icons/fa";
import { MdQuiz } from "react-icons/md";


const x:string = "a";

const CourseItems = () => {
  return (
    <div className="flex gap-2 justify-between items-center bg-[#F9FAFB] p-3 rounded-md">
        <div className="flex gap-2 items-center">
            {x === "a" ? <FaVideo /> : x === "b" ? <FaFilePdf /> : x === "c" ? <MdQuiz /> : null}
            <p>Welcome Video</p>
        </div>
        <div className="flex gap-2 items-center">
            <p>1:00</p>
            {/* functionality needs to be updated */}
            <SlOptionsVertical className="text-md" onClick={()=>console.log("HELLO")}/>
        </div>
    </div>
    
  )
}

export default CourseItems