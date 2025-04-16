import React, { useState } from 'react'
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
import { QuizSchema } from '@/schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "@/components/ui/textarea"
import { z } from 'zod'
import { LessonType, QuizType } from '@/types'
import { LessonReqType, LessonResType } from '@/types/instructor_types'
import { create_lesson_api, edit_lesson_api } from '@/api/instructor_api'


interface QuizFormProps {
    lesson?: LessonType,
    showAddLessonForm:boolean;
    toggleForm :()=>void;
    addLessonToChapters: (lessonData :LessonType,chapter_id:string)=>void
    chapter_id: string;
    course_id: string
    order:number
}


const QuizForm = ({ toggleForm, addLessonToChapters, chapter_id, course_id ,lesson ,order }: QuizFormProps) => {

    // const [showQuizQuestions,setshowQuizQuestions] =useState<boolean>(false);

    const form = useForm({
        resolver: zodResolver(QuizSchema),
        defaultValues: {
            title: (lesson?.quiz)?lesson.quiz.title:"",
            description: (lesson?.quiz)?lesson.quiz.description:""
        },
    })

    // const Quizfunction = ()=>{
    //     // toggleForm()
    //     console.log(showQuizQuestions)
    //     setshowQuizQuestions(!showQuizQuestions)
    // }


    const onSubmit = async(data: z.infer<typeof QuizSchema>) => {
        if(lesson){
            try{
                const quizData : QuizType={
                    title:data.title,
                    description:data.description
                }
                const lessonData: LessonReqType={
                    type:"quiz",
                    quiz:quizData
                }

                const response:LessonResType|null =await edit_lesson_api(
                    lessonData,course_id,chapter_id,lesson.lesson_id
                )

                if (response){
                    const lessonData:LessonType={
                        lesson_id:response.lesson_id,
                        order:order,
                        type: "quiz",
                        quiz: quizData,
                    }
    
                    addLessonToChapters(lessonData,chapter_id)
                    console.log(lessonData)
                    toggleForm()
                }
            }catch(err){
                console.log(err)
            }
        }else{
            try{
                const quizData : QuizType={
                    title:data.title,
                    description:data.description
                }
                const lessonData: LessonReqType={
                    type:"quiz",
                    order: order,
                    quiz:quizData
                }
    
                const response:LessonResType|null = await create_lesson_api(lessonData,course_id,chapter_id)
    
                if (response){
                    // const quizData : QuizType={
                    //     quiz_id: response.quiz_id,
                    //     title:data.title,
                    //     description:data.description
                    // }
                    const lessonData:LessonType={
                        lesson_id:response.lesson_id,
                        order:order,
                        type: "quiz",
                        quiz: quizData,
                    }
    
                    addLessonToChapters(lessonData,chapter_id)
                    console.log(lessonData)
                    toggleForm()
                    
                }
                
                // prepare the lesson request data
                // call the api
    
                // if response, create the lesson data with id
                // and then call addLessonToChapters with prepare data just above
                // and then toggleForm
            }catch(error){
                console.log(error)
            }
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
                                        <FormLabel>Quiz Title</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Input type="text" placeholder="Enter the quiz title" {...field} />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Quiz description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Enter quiz description"
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
                                    // onClick={Quizfunction}
                                >
                                    Add Quiz 
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

export default QuizForm

