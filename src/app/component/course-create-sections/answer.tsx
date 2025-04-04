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
import { Checkbox } from "@/components/ui/checkbox"
import { QuizSchema } from '@/schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "@/components/ui/textarea"

interface QuizFormProps {
    // handleForward: () => void;
    // onAddChapter: (QuizData: z.infer<typeof QuizSchema>) => void;
    showAddLessonForm:boolean;
    toggleForm :()=>void;
}

const Answer = ({ toggleForm }: QuizFormProps) => {
    const form = useForm({
        resolver: zodResolver(QuizSchema),
        defaultValues: {
            title: "",
            description: ""
        },
    })


  return (
    // <div className="my-6">
        
                <Form {...form}>
                        <form onSubmit={()=>console.log("Hi")}className="space-y-6">
                            {/* type of question field */}
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem className="flex-1">
                                        <div className='flex justify-between'>
                                            <FormLabel>Answer</FormLabel>
                                            <MdDeleteOutline className='hover:text-red-700'/>
                                        </div>
                                        
                                        <Textarea placeholder="Type your answer here." />
                                        <FormMessage />

                                        {/* the position of this div may change */}
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="correct"/>
                                            <label
                                                htmlFor="correct"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                This is the correct answer
                                            </label>
                                        </div>
                                    </FormItem>
                                    
                                )}
                            />

                            

                            {/* buttons */}
                            
                        </form>
                </Form>
    // </div>
  )
}

export default Answer

