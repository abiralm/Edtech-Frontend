"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

// import { toast } from "@/components/hooks/use-toast"
import { Button } from "@/components/ui/button"
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

import { FaCcVisa } from "react-icons/fa";


const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  date: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, {
    message: "Date must be in MM/YY format.",
  }),
  
})

export function Creditcard() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("hello")
  }

  return (
    <div> 
      <h1 className="my-2">Card Information</h1>
      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4 rounded-2xl border-2 p-4 my-4 ">
          <div className="flex gap-2 text-2xl">
            <FaCcVisa />
            <FaCcVisa />
            <FaCcVisa />
          </div>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (

              <FormItem >
                {/* <FormLabel>Username</FormLabel> */}
                <FormControl>
                  <Input placeholder="Card Number" className="py-6 px-2" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
            />

            <div className="flex gap-x-4">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="w-1/2">  {/* Take half the space */}
                    <FormControl>
                      <Input placeholder="MM/YY" className="py-6 px-2" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cvc"
                render={({ field }) => (
                  <FormItem className="w-1/2">  {/* Take half the space */}
                    <FormControl>
                      <Input placeholder="CVC" className="py-6 px-2" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            

          {/* <Button type="submit">Submit</Button> */}
        </form>
      </Form>
    </div>
  )
}