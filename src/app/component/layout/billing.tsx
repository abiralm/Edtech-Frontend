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

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Please enter valid email.",
  }),
})

export function Billing() {
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
      <h1 className="my-2">Billing Information</h1>
      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4 ">
          <FormField
            
            control={form.control}
            name="username"
            render={({ field }) => (

              <FormItem >
                {/* <FormLabel>Username</FormLabel> */}
                <FormControl>
                  <Input placeholder="Full Name" className="py-6 px-2" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Username</FormLabel> */}
                <FormControl>
                  <Input placeholder="Email Address" className="py-6 px-2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Username</FormLabel> */}
                <FormControl>
                  <Input placeholder="Address" className="py-6 px-2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            />

            <div className="flex gap-x-4">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="w-1/2">  {/* Take half the space */}
                    <FormControl>
                      <Input placeholder="City" className="py-6 px-2" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="zip"
                render={({ field }) => (
                  <FormItem className="w-1/2">  {/* Take half the space */}
                    <FormControl>
                      <Input placeholder="ZIP Code" className="py-6 px-2" {...field} />
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