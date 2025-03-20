import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

export const Testimonials = () => {
  return (
    <div className="p-12">
        <div className="flex flex-col items-center gap-y-4">
            <p className="text-4xl font-bold">Student Success Stories</p>
            <p className="text-xl">Hear from our community of learners</p>
        </div>
    
        <div className="p-10 flex gap-x-8 justify-around">
            <Card className=" max-w-[395px] w-full md:w-[50%] lg:w-[395px] aspect-[395/224]">
                <CardHeader className="flex items-center">
                    <Avatar className="w-16 h-16">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                        <CardTitle>Sarah Johnson</CardTitle>
                        <CardDescription>Data Scientist</CardDescription>
                    </div> 
                </CardHeader>
                <CardContent>
                    <p>"The AI-powered learning path helped me transition into data science within 6 months. Best investment in my career!"</p>
                </CardContent>
            </Card>
            <Card className=" max-w-[395px] w-full md:w-[50%] lg:w-[395px] aspect-[395/224]">
                <CardHeader className="flex items-center">
                    <Avatar className="w-16 h-16">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                        <CardTitle>Sarah Johnson</CardTitle>
                        <CardDescription>Data Scientist</CardDescription>
                    </div> 
                </CardHeader>
                <CardContent>
                    <p>"The AI-powered learning path helped me transition into data science within 6 months. Best investment in my career!"</p>
                </CardContent>
            </Card>
            <Card className=" max-w-[395px] w-full md:w-[50%] lg:w-[395px] aspect-[395/224]">
                <CardHeader className="flex items-center">
                    <Avatar className="w-16 h-16">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                        <CardTitle>Sarah Johnson</CardTitle>
                        <CardDescription>Data Scientist</CardDescription>
                    </div> 
                </CardHeader>
                <CardContent>
                    <p>"The AI-powered learning path helped me transition into data science within 6 months. Best investment in my career!"</p>
                </CardContent>
            </Card>

        </div>    
    
    </div>
  )
}

