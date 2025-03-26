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

import { Input } from "@/components/ui/input"
import { MdMailOutline } from "react-icons/md";
import { FaLock } from "react-icons/fa";

const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(2, {
        message: "Password must be at least 2 characters.",
      }),
  })

const SignIn = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        username: "",
        password:""
        },
    })
    
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
    <div className="flex items-center  justify-center m-8">
        <Card className='w-3/10'>
            <CardHeader className='flex flex-col items-center'>
                <FaGraduationCap className='text-5xl'/>
                <CardTitle className='text-3xl font-bold'>Welcome Back</CardTitle>
                <CardDescription>Please enter your details to sign in</CardDescription>
            </CardHeader>
            <CardContent>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email address</FormLabel>
                                    <FormControl>
                                    <div className="relative">
                                        <MdMailOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
                                        <Input type="email" placeholder="Enter your email" {...field} className="pl-10" />
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
                                        <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5" />
                                        <Input type="password" placeholder="Enter your email" {...field} className="pl-10" />
                                    </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-between text-sm">
                            <Link href="/#" className="hover:underline hover:underline-offset-4 m-1">Remember me</Link>
                            {/* <p>Forgot password?</p> */}
                            <Link href="/#" className="text-[#2563EB] hover:underline hover:underline-offset-4 m-1">Forgot password?</Link>
                        </div>
                        <Button type="submit" className="w-full rounded-sm bg-[#2563EB] hover">Submit</Button>
                    </form>
                </Form>

            </CardContent>
            <CardFooter className='flex flex-col items-center text-sm'>
                <p className="hover:underline hover:underline-offset-4 m-1"><Link href="/login">Don't have an account?</Link></p>
                <p className="text-[#2563EB] hover:underline hover:underline-offset-4 m-1"><Link href="/instructor">Sign up as an instructor</Link></p>
                <p className="text-[#2563EB] hover:underline hover:underline-offset-4 m-1"><Link href="/courses">Enroll in a course</Link></p>
            </CardFooter>
        </Card>
    </div>
        
    )
};

export default SignIn;


