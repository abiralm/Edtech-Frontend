// courseForm.tsx
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent} from "@/components/ui/card"
import { ChapterSchema } from "@/schema"
import { ChapterType } from "@/types"
import { ChapterReqType, ChapterResType } from "@/types/instructor_types"
import { create_chapter_api, edit_chapter_api } from "@/api/instructor_api"

interface ChapterFormProps {
    // handleForward: () => void;
    chapter?: ChapterType
    toggleForm :()=>void;
    addChapterInState: (chapterData: ChapterType) =>void
    course_id: string
    order:number
}

const ChapterForm = ({ toggleForm, addChapterInState, course_id ,order, chapter}: ChapterFormProps) => {
    const form = useForm({
        resolver: zodResolver(ChapterSchema),
        defaultValues: {
            title: chapter?chapter.title:"",
            description: chapter?chapter.description:""
        },
    })

    const onSubmit = async(data: z.infer<typeof ChapterSchema>) => {
        if(chapter){
            // This will update the chapter
            try{
                const chapterData: ChapterReqType ={
                    title:data.title,
                    description: data.description
                }
    
                // // call another api endpoint
                // const response:ChapterResType | null = await create_chapter_api(chapterData,course_id)
                const response:ChapterResType |null = await edit_chapter_api(chapterData,course_id,chapter.chapter_id)

                if(response){
                    const chapterData: ChapterType ={
                        chapter_id: chapter.chapter_id,
                        title:data.title,
                        description:data.description,
                        order:order,
                        lessons:chapter.lessons
                    }

    
                    addChapterInState(chapterData)
                    console.log(chapterData)
                    
                    toggleForm()
                }
    
            }catch(err){
                console.log("Error in course setup form ", err)
            }
        }else{
            // this will add the chapter
            try{
                const chapterData: ChapterReqType ={
                    title:data.title,
                    description: data.description,
                    order: order
                }
    
                const response:ChapterResType | null = await create_chapter_api(chapterData,course_id)
    
                if(response){
                    const chapterData: ChapterType ={
                        chapter_id: response.chapter_id,
                        title:data.title,
                        description:data.description,
                        order:order,
                        lessons:[]
                    }
    
                    addChapterInState(chapterData)
                    console.log(chapterData)
                    
                    toggleForm()
                }
    
            }catch(err){
                console.log("Error in course setup form ", err)
            }
        }
    }

    // inside try catch we will do api call and after response only we will update chapter data
    
    // if there is chapter prop in this form, then lessons will be chapter.lessons

    return (
        <Card className="border-2">
            <CardContent>
            <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        
                        {/* title field */}
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Chapter Title</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Input type="text" placeholder="Enter the chapter title" {...field} />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* description field */}
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Chapter Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Enter chapter description"
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* buttons */}
                        <div className='flex justify-between items-center text-sm'>
                            <Button 
                                type="submit" 
                                className="rounded-sm bg-[#2563EB] hover:bg-[#1d4ed8]"
                                // onClick={toggleForm}
                            >
                                {chapter?"Edit Chapter":"Add Chapter"} 
                            </Button>
                            <Button 
                                type="button" 
                                className="rounded-sm bg-[#4B5563] hover:bg-[#979ea8]"
                                onClick={toggleForm}
                            >
                                Cancel 
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
            
        </Card>
        
    )
}

export default ChapterForm;