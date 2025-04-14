import React from 'react'
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
import { Card, CardContent} from "@/components/ui/card"
import { VideoSchema } from '@/schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { z} from 'zod'
import { LessonType, VideoType } from '@/types'
import { LessonReqType, LessonResType } from '@/types/instructor_types'
import { create_lesson_api } from '@/api/instructor_api'

interface VideoFormProps {
    // handleForward: () => void;
    // onAddChapter: (VideoData: z.infer<typeof VideoSchema>) => void;
    showAddLessonForm:boolean;
    toggleForm :()=>void;
    addLessonToChapters:(lessonData: LessonType,chapter_id:string)=>void
    chapter_id:string
    course_id:string
    order:number
}

const VideoForm = ({ toggleForm,addLessonToChapters,chapter_id,course_id,order }: VideoFormProps) => {
    const form = useForm({
        resolver: zodResolver(VideoSchema),
        defaultValues: {
            title: "",
            video_url: ""
        },
    })

    const onSubmit =async(data:z.infer<typeof VideoSchema>)=>{
        try{
            const videoData:VideoType={
                title:data.title,
                content_url:data.video_url
            }

            const lessonData:LessonReqType={
                type:"video",
                order:order,
                video:videoData
            }

        const response:LessonResType|null = await create_lesson_api(lessonData,course_id,chapter_id)

        if( response){
            const lessonData:LessonType={
                lesson_id:response.lesson_id,
                order:order,
                type:"video",
                video:videoData
            }
            addLessonToChapters(lessonData,chapter_id)
            toggleForm()
        }

        }catch(err){
            console.log(err)
        }
    }

  return (
    <div className="my-6">
        <Card className="border-2">
            <CardContent>
                <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}className="space-y-6">
                            {/* title field */}
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Video Title</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Input type="text" placeholder="Enter the chapter title" {...field} />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="video_url"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Video Link</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Input 
                                                    type="file" 
                                                    placeholder="" 
                                                    {...field}
                                                />
                                            </div>
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
                                    Add Video Lesson 
                                </Button>
                                <Button 
                                    type="button" 
                                    className="rounded-sm bg-[#2563EB] hover:bg-[#1d4ed8]"
                                    onClick={toggleForm}
                                >
                                    Cancel 
                                </Button>
                            </div>
                        </form>
                </Form>
            </CardContent>
            
        </Card>
    </div>
  )
}

export default VideoForm

