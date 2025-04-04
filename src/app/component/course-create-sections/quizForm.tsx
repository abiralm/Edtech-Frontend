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
import QuizQuestionsForm from './quizQuestionsForm'


interface QuizFormProps {
    // handleForward: () => void;
    // onAddChapter: (QuizData: z.infer<typeof QuizSchema>) => void;
    showAddLessonForm:boolean;
    toggleForm :()=>void;
}

 

const QuizForm = ({ toggleForm }: QuizFormProps) => {

    const [showQuizQuestions,setshowQuizQuestions] =useState<boolean>(false);

    const form = useForm({
        resolver: zodResolver(QuizSchema),
        defaultValues: {
            title: "",
            description: ""
        },
    })

    const Quizfunction = ()=>{
        // toggleForm()
        console.log(showQuizQuestions)
        setshowQuizQuestions(!showQuizQuestions)
    }


    // const openLessonForm = (type: string)=>{
    //     setLessonType(type)
    //     toggleAddLessonForm();
    //   }
    
    //   const toggleAddLessonForm = ()=>{
    //     console.log(showAddLessonForm)
    //     setshowAddLessonForm(!showAddLessonForm)
    //   }


  return (
    <div className="my-6">
        
        {!showQuizQuestions?(<Card className="border-2">
            <CardContent>
                <Form {...form}>
                        <form onSubmit={()=>console.log("Hi")}className="space-y-6">
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
                                    type="button" 
                                    className="rounded-sm bg-[#2563EB] hover:bg-[#1d4ed8]"
                                    onClick={Quizfunction}
                                >
                                    Add Quiz 
                                </Button>
                                {/* <Button 
                                    type="button" 
                                    className="rounded-sm bg-[#2563EB] hover:bg-[#1d4ed8]"
                                    onClick={toggleForm}
                                >
                                    Cancel 
                                </Button> */}
                            </div>
                        </form>
                </Form>
            </CardContent>
            
        </Card>):<QuizQuestionsForm showQuizQuestions={showQuizQuestions} toggleQuizQuestions={Quizfunction}/>}
    </div>
  )
}

export default QuizForm

