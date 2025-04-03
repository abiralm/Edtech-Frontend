import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import CourseItems from "./courseItems"
import AddNewContent from "./addNewContent"
import ChapterTitle from "./chapterTitle";
import { ChapterSchema } from "@/schema";
import { z } from "zod";
import { useState } from "react";

interface ChapterInfoProps {
    chapters: z.infer<typeof ChapterSchema>[];
    onAddChapter: (chapterData: z.infer<typeof ChapterSchema>) => void;
}

const ChapterInfo = ({ chapters, onAddChapter }: ChapterInfoProps) => {
    const [showEditForm, setShowEditForm] = useState(false)

    const toggleEdit = ()=>{
        setShowEditForm(!showEditForm)
    }

    if (chapters.length === 0) {
        return null;
    }else{
        return(<div className="flex items-center justify-center my-6">
            <Card className="w-full">
                <CardHeader>
                    <ChapterTitle onAddChapter={onAddChapter} toggleForm={toggleEdit} showEditForm={showEditForm}/>  
                </CardHeader>
    
                <CardContent>
                    {/* add new content and list of content  */}
                    <CourseItems/>
                    <AddNewContent/>
                </CardContent>
    
                <CardFooter className="justify-between">
                    
                    {/* <Button>
                        Save Changes
                    </Button> */}
                </CardFooter>
            </Card>
        </div>
      )
    }
    
}

export default ChapterInfo