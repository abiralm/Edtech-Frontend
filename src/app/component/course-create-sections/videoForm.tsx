// import { zodResolver } from "@hookform/resolvers/zod";
// import { Form, useForm } from "react-hook-form";
// import { z } from "zod"
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { VideoSchema } from "@/schema";

// const VideoForm = () => {
//     const form = useForm({
//         resolver: zodResolver(VideoSchema),
//         defaultValues: {
//             title: "",
//             video_url: "", 
//         },
//     });

//     const onSubmit = (data: any) => {
//         console.log("Form submitted:", data);
//     };

//     return (
//         <div>
//             <Card className="border-2">
//             <CardContent>
//             <Form {...form}>
//                     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//                         {/* title field */}
//                         <FormField
//                             control={form.control}
//                             name="title"
//                             render={({ field }) => (
//                                 <FormItem>
//                                     <FormLabel>Chapter Title</FormLabel>
//                                     <FormControl>
//                                         <div className="relative">
//                                             <Input type="text" placeholder="Enter the chapter title" {...field} />
//                                         </div>
//                                     </FormControl>
//                                     <FormMessage />
//                                 </FormItem>
//                             )}
//                         />

//                         {/* description field */}
//                         <FormField
//                                 control={form.control}
//                                 name="image_url"
//                                 render={({ field }) => (
//                                     <FormItem>
//                                         <FormLabel>Course Image</FormLabel>
//                                         <FormControl>
//                                             <div className="relative">
//                                                 <Input 
//                                                     type="file" 
//                                                     placeholder="" 
//                                                     // onChange={(e) => {
//                                                     //     field.onChange(e.target.files ? e.target.files[0] : null)
//                                                     // }}
//                                                     {...field}
//                                                 />
//                                             </div>
//                                         </FormControl>
//                                         <FormMessage />
//                                     </FormItem>
//                                 )}
//                             />

//                         {/* buttons */}
//                         {/* <div className='flex justify-between items-center text-sm'>
//                             <Button 
//                                 type="submit" 
//                                 className="rounded-sm bg-[#2563EB] hover:bg-[#1d4ed8]"
//                                 // onClick={toggleForm}
//                             >
//                                 Add Chapter 
//                             </Button>
//                             <Button 
//                                 type="button" 
//                                 className="rounded-sm bg-[#2563EB] hover:bg-[#1d4ed8]"
//                                 onClick={toggleForm}
//                             >
//                                 cancel 
//                             </Button>
//                         </div> */}
//                     </form>
//                 </Form>
//             </CardContent>
            
//         </Card>
//         </div>
//     );
// };

// export default VideoForm;
