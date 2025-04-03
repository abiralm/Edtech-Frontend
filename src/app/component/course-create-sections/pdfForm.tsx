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

interface PdfFormProps {
    // handleForward: () => void;
    // onAddChapter: (PdfData: z.infer<typeof PdfSchema>) => void;
    showAddLessonForm:boolean;
    toggleForm :()=>void;
}

const PdfForm = ({ toggleForm }: PdfFormProps) => {
    const form = useForm({
        resolver: zodResolver(PdfSchema),
        defaultValues: {
            title: "",
            pdf_file: ""
        },
    })


  return (
    <div className="my-6">
        <Card className="border-2">
            <CardContent>
                <Form {...form}>
                        <form onSubmit={()=>console.log("Hi")}className="space-y-6">
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
                                                    // onChange={(e) => {
                                                    //     field.onChange(e.target.files ? e.target.files[0] : null)
                                                    // }}
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

