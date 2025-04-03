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

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { CreateCourseReviewSchema } from "@/schema"


interface BasicProps {
    handleBack: () => void;
    handleForward:()=> void; // You may want to specify this type more precisely
    step: number;
}

const Review = ({ handleBack, handleForward, step }: BasicProps) => {
    const form = useForm({
        resolver: zodResolver(CreateCourseReviewSchema),
        defaultValues: {
            description: "",
            pricing:"free",
            price:""
        },
    })
    
    function onSubmit(values: z.infer<typeof CreateCourseReviewSchema>) {
        console.log(values)
        // handleForward();
    }
    const [selectedPricing, setSelectedPricing] = useState("all");

    return (
    <div className="flex items-center  justify-center m-6">
        <Card className='w-3/5'>
            <CardHeader className='flex flex-col items-center'>
                <CardTitle className='text-3xl font-bold'>Create new Course</CardTitle>
                <CardDescription>Complete your profile to start teaching</CardDescription>
            </CardHeader>
            <CardContent>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Course Requirements</FormLabel>
                                <FormControl>
                                    <Textarea
                                    placeholder="Enter course requirements"
                                    className="resize-none"
                                    {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                        control={form.control}
                        name="pricing"
                        render={({ field }) => (
                            <FormItem className="space-y-3">
                            <FormLabel>Pricing</FormLabel>
                            <FormControl>
                                <RadioGroup
                                onValueChange={(value) => {
                                    field.onChange(value);
                                    setSelectedPricing(value);
                                }}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                                >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                    <RadioGroupItem value="free" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Free Course</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                    <RadioGroupItem value="paid" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Paid Course</FormLabel>
                                </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                            
                            {/* Show price input only when "Paid Course" is selected */}
                            {selectedPricing === "paid" && (
                                <FormField
                                control={form.control}
                                name="price"
                                render={({ field }) => (
                                    <FormItem className="mt-4">
                                    <FormLabel>Price</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="Enter course price" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                            )}
                            </FormItem>
                        )}
                        />

                        <Button type="button" className="rounded-sm bg-[#909090] hover" onClick={handleBack}>Previous Step</Button>
                    <div className="flex gap-4">
                        <Button type="submit" className="rounded-sm bg-[#2563EB] hover">Save as Draft</Button>
                        <Button type="submit" className="rounded-sm bg-[#2563EB] hover">Save and Publish</Button>
                    </div>
                    </form>
                </Form>
                
            </CardContent>
            <CardFooter className='flex justify-between items-center text-sm'>
                
            </CardFooter>
        </Card>
    </div>
        
    )
};

export default Review;


