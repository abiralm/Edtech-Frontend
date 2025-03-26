"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { FaGraduationCap } from "react-icons/fa6";
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
    FormDescription,
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
import { MdMailOutline } from "react-icons/md";
import { FaLock } from "react-icons/fa";

const formSchema = z.object({
    fullname: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().min(2, {
        message: "Password must be at least 2 characters.",
      }),
  })

const Instructor = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        fullname: "",
        email:""
        },
    })
    
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
    <div className="flex items-center  justify-center m-6">
        <Card className='w-3/10'>
            <CardHeader className='flex flex-col items-center'>
                <FaGraduationCap className='text-5xl'/>
                <CardTitle className='text-3xl font-bold'>Instructor Sign Up</CardTitle>
                <CardDescription>Complete your profile to start teaching</CardDescription>
            </CardHeader>
            <CardContent>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                        <FormField
                            control={form.control}
                            name="fullname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                    <div className="relative">
                                        <Input type="text" placeholder="Enter your fullname" {...field} />
                                    </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                    <div className="relative">
                                        <Input type="email" placeholder="Enter your email" {...field}  />
                                    </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                    <div className="relative">
                                        <Input type="number" placeholder="Enter your phone number" {...field} />
                                    </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                    <div className="relative">
                                        <Input type="password" placeholder="Enter your password" {...field}  />
                                    </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="cpassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                    <div className="relative">
                                        <Input type="password" placeholder="Confirm your password" {...field} />
                                    </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            
                            control={form.control}
                            name="role"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel>Area of expertise</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value} className="w-full">
                                        <FormControl>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select your expertise" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="w-full">

                                            <SelectItem value="student">Student</SelectItem>
                                            <SelectItem value="instructor">Instructor</SelectItem>
                                            <SelectItem value="admin">Admin</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="text-sm">
                            I agree to the
                            <Link href="/terms" className="text-[#2563EB] hover:underline hover:underline-offset-4 m-1">Terms and Conditons</Link>
                        </div>
                    </form>
                </Form>

            </CardContent>
            <CardFooter className='flex justify-between items-center text-sm'>
                <Button type="submit" className="rounded-sm bg-[#2563EB] hover">Back</Button>
                <Button type="submit" className="rounded-sm bg-[#2563EB] hover">Next</Button>
            </CardFooter>
        </Card>
    </div>
        
    )
};

export default Instructor;


