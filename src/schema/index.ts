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





