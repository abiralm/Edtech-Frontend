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


export const CreateCourseReviewSchema = z.object({

    // this will be updated later
    // description: z.string().min(10, {
    //     message: "Description should be at least 10 characters long"
    // }),
    pricing: z.enum(["free", "paid"], {
        message: "Please select one"
    }),
    price: z.string().optional()

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
    title: z.string().min(3, {
        message: "Title should be at least 3 characters long"
    }),
    video_url: z.string().min(1, {
        message: "Please choose a video or video URL"
    })
})


export const PdfSchema = z.object({
    title: z.string().min(3, {
        message: "Title should be at least 3 characters long"
    }),
    pdf_file: z.string().min(1, {
        message: "Please choose a pdf file"
    })
})


export const QuizSchema = z.object({
    title: z.string().min(3, {
        message: "Title should be at least 3 characters long"
    }),
    description: z.string().min(10, {
        message: "Description should be at least 10 characters long"

    }),
})

export const LoginSchema = z.object({
    email: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(2, {
        message: "Password must be at least 2 characters.",
    })
})

export const QuestionSchema = z.object({
    title: z.string().min(1, { message: 'Title is required' }),
    type: z.string().min(1, { message: 'Type is required' }),
    explanation: z.string().min(6, { message: 'Explanation is required' }),
    answers: z
        .array(
            z.object({
                answer: z.string().min(1, { message: 'Answer is required' }),
                is_correct: z.boolean(),
            })
        )
        .min(1, { message: 'At least one answer is required' })
}).refine((ctx) => {
    // If type is 'single', only one answer can be correct
    if (ctx.type === 'single') {
        const correctAnswers = ctx.answers.filter(a => a.is_correct);
        if (correctAnswers.length !== 1) {
            return false;
        }
    }
    // If type is 'multiple', at least two answers must be correct
    if (ctx.type === 'multiple') {
        const correctAnswers = ctx.answers.filter(a => a.is_correct);
        if (correctAnswers.length < 2) {
            return false;
        }
    }
    return true; // Validates if the conditions are met
}, {
    path: [''],
    message: 'Validation error: Answer conditions are not met based on the question type',
});