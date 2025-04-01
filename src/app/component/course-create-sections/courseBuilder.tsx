import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { ChapterSchema } from "@/schema"
import { Textarea } from "@/components/ui/textarea"

interface BasicProps {
    handleBack: () => void;
    handleForward:()=> void; 
    step: number;
}

const CourseBuilder = ({ handleBack, handleForward, step }: BasicProps) => {
    const form = useForm({
        resolver: zodResolver(ChapterSchema),
        defaultValues: {
            title: "",
            description:""
        },
    })

const onSubmit = async(data: z.infer<typeof ChapterSchema>)=>{
    console.log("is it submitted ?", data)
    handleForward()
}


  return (
    <div className="flex items-center justify-center m-6">
      <Card className='w-3/5'>
        <CardHeader className='flex flex-col items-center'>
            <CardTitle className='text-3xl font-bold'>Course Builder</CardTitle>
            <CardDescription>Add lessons to your chapters</CardDescription>
        </CardHeader>
        
        <CardContent>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    {/* titel field */}
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
                            type="button" 
                            className="rounded-sm bg-[#2563EB] hover:bg-[#1d4ed8]"
                            onClick={handleBack}
                            disabled={step === 0}
                        >
                            Add Chapter 
                        </Button>
                    </div>

                </form>
            </Form>
        </CardContent>
      </Card>

    </div>
  )
};

export default CourseBuilder;