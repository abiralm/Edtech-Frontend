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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChapterSchema } from "@/schema"

interface ChapterFormProps {
    // handleForward: () => void;
    onAddChapter: (chapterData: z.infer<typeof ChapterSchema>) => void;
    toggleForm :()=>void;
}

const ChapterForm = ({ toggleForm,onAddChapter }: ChapterFormProps) => {
    const form = useForm({
        resolver: zodResolver(ChapterSchema),
        defaultValues: {
            title: "",
            description: ""
        },
    })

    const onSubmit = async(data: z.infer<typeof ChapterSchema>) => {
        onAddChapter(data)
        console.log(data)
        toggleForm()
        // handleForward()
    }

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
                                Add Chapter 
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