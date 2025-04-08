"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
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

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { CreateNewCourseSchema } from "@/schema"
import { create_course_api } from "@/api/instructor_api"
import { CourseReqType, CourseResType } from "@/types/instructor_types"
import { CourseType } from "@/types"


interface BasicProps {
    handleBack: () => void;
    handleForward:()=> void; 
    step: number;
    addCourseInState : (courseData: CourseType) =>void;
}

const Basic = ({ handleBack, handleForward, step, addCourseInState }: BasicProps) => {
    const form = useForm({
        resolver: zodResolver(CreateNewCourseSchema),
        defaultValues: {
            title: "",
            category: "",
            level:"",
            image_url:"",
            description:""
        },
    })

    const onSubmit = async(data: z.infer<typeof CreateNewCourseSchema>)=>{
        console.log("is it submitted ?", data)
        
        try{
            const courseData : CourseReqType = {
                title: data.title,
                category:data.category,
                level:data.level,
                description:data.description,
                image_url:data.image_url
            }
            const response:CourseResType |null = await create_course_api(courseData)

            if(response){
                const courseData: CourseType = {
                    course_id: response.course_id,
                    title: data.title,
                    category:data.category,
                    level:data.level,
                    description:data.description,
                    image_url:data.image_url
                }
                addCourseInState(courseData)
                handleForward()
            }
        }catch(err){
            console.log("Error in course setup form ", err)
        }
    }

    return (
        <div className="flex items-center justify-center m-6">
            <Card className='w-3/5'>

                <CardHeader className='flex flex-col items-center'>
                    <CardTitle className='text-3xl font-bold'>Create new Course</CardTitle>
                    <CardDescription>Setup the course </CardDescription>
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
                                        <FormLabel>Course Title</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Input type="text" placeholder="Enter the course title" {...field} />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            
                            {/* select fields */}
                            <div className="flex gap-4">
                                <FormField
                                    control={form.control}
                                    name="category"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Category</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Select category" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent className="w-full">
                                                    <SelectItem value="Medical">Medical</SelectItem>
                                                    <SelectItem value="Technology">Technology</SelectItem>
                                                    <SelectItem value="Business">Business</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="level"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Course Level</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value} >
                                                <FormControl>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Select level" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent className="w-full">
                                                    <SelectItem value="Beginner">Beginner</SelectItem>
                                                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                                                    <SelectItem value="Advanced">Advanced</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* description field */}
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Course Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Enter course description"
                                                className="resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* image field */}
                            <FormField
                                control={form.control}
                                name="image_url"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Course Image</FormLabel>
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
                                    type="button" 
                                    className="rounded-sm bg-[#909090] hover:bg-[#7a7a7a]"
                                    onClick={handleBack}
                                    disabled={step === 0}
                                >
                                    Cancel 
                                </Button>
                                <Button 
                                    type="submit" 
                                    className="rounded-sm bg-[#2563EB] hover:bg-[#1d4ed8]"

                                >
                                    {step === 1 ? 'Submit' : 'Next Step'}
                                </Button>
                            </div>

                        </form>
                    </Form>
                        {/* <VideoForm/>
                        <PdfForm/> */}
                    
                </CardContent>
            </Card>
        </div>
    )
};

export default Basic;