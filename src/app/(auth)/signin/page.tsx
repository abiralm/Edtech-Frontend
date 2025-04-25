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
import { LoginSchema } from "@/schema"
// import useAuthStore from "@/stores/authStore"
import { loginReqDataType, loginResDataType } from "@/types/auth_types"

import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from "next-auth/react"

const SignIn = () => {

    const router = useRouter()

    // const {login} = useAuthStore()

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
        email: "",
        password:""
        },
    })

    // async function onSubmit(values: z.infer<typeof LoginSchema>) {
    //     const loginData : loginReqDataType = {
    //         email:values.email,
    //         password:values.password
    //     }
    //     const loggedIn = await login(loginData)
    //     //if logged in is true route to create course
    //     loggedIn? router.push("/createcourse"):console.log(values)


    // }

    async function onSubmit(values: z.infer<typeof LoginSchema>) {
        try {
            console.log({
                "email": values.email, 
                "password": values.password
            })
            const result = await signIn("credentials", {
                email: values.email,
                password: values.password,
                redirect: false,
            });

            console.log(result)

            if (result?.error) {
                console.error("Authentication error:", result.error);
            } else if (result?.ok) {
                router.push("/createcourse");
                router.refresh();
            }
        } catch (error) {
            console.error("Sign in error:", error);
        }
    }


    return (
    <div className="flex items-center  justify-center m-6">
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
                            name="email"
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
                                        <Input type="password" placeholder="Enter your password" {...field} className="pl-10" />
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
                <p className="text-[#2563EB] hover:underline hover:underline-offset-4 m-1"><Link href="/login/instructor">Sign up as an instructor</Link></p>
                <p className="text-[#2563EB] hover:underline hover:underline-offset-4 m-1"><Link href="/courses">Enroll in a course</Link></p>
            </CardFooter>
        </Card>
    </div>

    )
};

export default SignIn;



// import { useSession, signIn, signOut } from "next-auth/react"

// export default function Component() {
//     const { data: session } = useSession()
//     if (session) {
//         return (
//             <>
//                 Signed in as {session.user.email} <br />
//                 <button onClick={() => signOut()}>Sign out</button>
//             </>
//         )
//     }
//     return (
//         <>
//             Not signed in <br />
//             <button onClick={() => signIn()}>Sign in</button>
//         </>
//     )
// }