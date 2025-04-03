import { title } from "process";
import * as z from "zod";

export const CreateNewCourseSchema = z.object({
    title: z.string().min(3, {
        message: "Title is required"
    }),
    category: z.string().min(3, {
        message: "Please select a category"
    }),
    level: z.string().min(3, {
        message: "Please select a level"
    }),
    description: z.string().min(10, {
        message: "Description should be at least 10 characters long"
    }),
    image_url: z.string().min(1, {
        message: "Please choose an image"
    })
})


export const CreateCourseReviewSchema =z.object({
    description: z.string().min(10, {
        message: "Description should be at least 10 characters long"
    }),
    pricing: z.enum(["free", "paid"], {
        message: "Please select one"
    }),
    price : z.string().optional()

})


export const ChapterSchema = z.object({
    description: z.string().min(10, {
        message: "Description should be at least 10 characters long"
    }),
    title: z.string().min(3, {
        message: "Title is required"
    }),

})

export const VideoSchema = z.object({
    title: z.string().min(3,{
        message: "Title should be at least 3 characters long"
    }),
    video_url: z.string().min(1, {
        message: "Please choose a video or video URL"
    })
})


export const PdfSchema = z.object({
    title: z.string().min(3,{
        message: "Title should be at least 3 characters long"
    }),
    pdf_file: z.string().min(1, {
        message: "Please choose a pdf file"
    })
})



