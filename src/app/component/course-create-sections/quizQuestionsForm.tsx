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
import { MdDeleteOutline } from "react-icons/md";

import { Card, CardContent} from "@/components/ui/card"
import { QuizSchema } from '@/schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Answer from './answer'


interface QuizFormProps {
    // handleForward: () => void;
    // onAddChapter: (QuizData: z.infer<typeof QuizSchema>) => void;
    showQuizQuestions:boolean;
    toggleQuizQuestions :()=>void;
}

const QuizQuestionsForm = ({ toggleQuizQuestions ,showQuizQuestions}: QuizFormProps) => {
    const form = useForm({
        resolver: zodResolver(QuizSchema),
        defaultValues: {
            title: "",
            description: "",
            explanation:""
        },
    })


  return (
    <div className="my-6">
        <Card className="border-2">
            <CardContent>
                <Form {...form}>
                        <form onSubmit={()=>console.log("Hi")}className="space-y-6">

                            {/* type of question field */}
                                <FormField
                                    control={form.control}
                                    name="category"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Category</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger >
                                                        <SelectValue placeholder="Select category" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent >
                                                    <SelectItem value="single">Single</SelectItem>
                                                    <SelectItem value="multiple"> Multiple</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Question</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Enter the question"
                                                className="resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Answer/>
                                
                            <div className='flex justify-between items-center text-sm'>
                                <Button 
                                    type="submit" 
                                    className="rounded-sm bg-[#2563EB] hover:bg-[#1d4ed8]"
                                    // onClick={toggleForm}
                                >
                                    Add Choice
                                </Button>
                            </div>
                            

                            <FormField
                                control={form.control}
                                name="explanation"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Explanation</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Enter the explanation for the question"
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
                                    
                                >
                                    Add Quiz Lesson 
                                </Button>
                                <Button 
                                    type="button" 
                                    className="rounded-sm bg-[#2563EB] hover:bg-[#1d4ed8]"
                                    onClick={toggleQuizQuestions}
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

export default QuizQuestionsForm

