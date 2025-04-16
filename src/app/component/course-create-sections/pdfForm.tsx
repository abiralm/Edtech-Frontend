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
import { PdfSchema } from '@/schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { z} from 'zod'
import { LessonType, PDFType } from '@/types'
import { LessonReqType, LessonResType } from '@/types/instructor_types'
import { create_lesson_api, edit_lesson_api } from '@/api/instructor_api'

interface PdfFormProps {
    lesson?: LessonType,
    showAddLessonForm:boolean;
    toggleForm :()=>void;
    addLessonToChapters: (lessonData :LessonType,chapter_id:string)=>void
    chapter_id: string;
    course_id: string
    order:number
}

const PdfForm = ({ toggleForm, addLessonToChapters, chapter_id, course_id ,lesson ,order}: PdfFormProps) => {
    const form = useForm({
        resolver: zodResolver(PdfSchema),
        defaultValues: {
            title: (lesson?.pdf)?lesson.pdf.title:"",
            pdf_file: ""
        },
    })

    const onSubmit = async(data: z.infer<typeof PdfSchema>) => {
        if(lesson){
            try{
                const pdfData : PDFType={
                    title:data.title,
                    content_url:data.pdf_file
                }

                const lessonData: LessonReqType={
                    type:"pdf",
                    pdf:pdfData
                }

                const response:LessonResType|null =await edit_lesson_api(
                    lessonData,course_id,chapter_id,lesson.lesson_id
                )

                if (response){
                    const lessonData:LessonType={
                        lesson_id:response.lesson_id,
                        order:order,
                        type: "pdf",
                        pdf: pdfData,
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
            const pdfData : PDFType={
                title:data.title,
                content_url:data.pdf_file
            }
            const lessonData: LessonReqType={
                type:"pdf",
                order: order,
                pdf:pdfData
            }

            const response:LessonResType|null = await create_lesson_api(lessonData,course_id,chapter_id)

            if (response){
                const lessonData:LessonType={
                    lesson_id:response.lesson_id,
                    order:order,
                    type: "pdf",
                    pdf: pdfData,
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
                                        <FormLabel>Pdf Title</FormLabel>
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
                                name="pdf_file"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Pdf Link</FormLabel>
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
                                    Add Pdf Lesson 
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

export default PdfForm

