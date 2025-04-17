import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { MdDelete, MdDeleteOutline } from "react-icons/md";

import { Card, CardContent } from "@/components/ui/card"
import { QuestionSchema, QuizSchema } from '@/schema'
import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Answer from './answer'
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { AnswerType, QuestionType } from '@/types';
import { QuestionReqType, QuestionResType } from '@/types/instructor_types';
import { create_question_api } from '@/api/instructor_api';


interface QuizFormProps {
    // handleForward: () => void;
    // onAddChapter: (QuizData: z.infer<typeof QuizSchema>) => void;
    toggleQuizQuestions: () => void;
    addQuestions: (question: QuestionType) => void;
    quiz_id : string,
    question?: QuestionType
}

const QuizQuestionsForm = ({ toggleQuizQuestions, addQuestions, quiz_id ,question}: QuizFormProps) => {

    const [deletedAnswerIds, setDeletedAnswerIds] = useState<string[]>([])

    const form = useForm({
        resolver: zodResolver(QuestionSchema),
        defaultValues: {
            type: question?.type? question.type:"",
            title: question?.title? question.title:"",
            explanation: question?.explanation? question.explanation:"",
            answers: question?.answers? question.answers.map((ans)=>({
                answer: ans.answer,
                is_correct: ans.is_correct
            })):[{
                answer: "",
                is_correct: false
            }],

        }
    })

    const { fields, append, remove } = useFieldArray(
        {
            control: form.control,
            name: "answers"
        }
    )

    const onSubmit = async (data: z.infer<typeof QuestionSchema>) => {
        console.log(data)

        if(question){
            try {

                const questionData: QuestionReqType = {
                    title: data.title,
                    type: data.type,
                    answers: data.answers,
                    explanation: data.explanation
                }
                // some response from api call
                const response: QuestionResType | null = await create_question_api(questionData,quiz_id)
    
                if (response) {
                    
    
                    const questionData: QuestionType = {
                        question_id: response.question_id,
                        title: data.title,
                        type: data.type,
                        explanation: data.explanation,
                        answers: response.answers
                    }
    
                    addQuestions(questionData)
                    toggleQuizQuestions()
                }
            } catch (error) {
                console.error("Failed to add question:", error);
            }
    
        }else{
            try {

                const questionData: QuestionReqType = {
                    title: data.title,
                    type: data.type,
                    answers: data.answers,
                    explanation: data.explanation
                }
                // some response from api call
                const response: QuestionResType | null = await create_question_api(questionData,quiz_id)
    
                if (response) {
                    
    
                    const questionData: QuestionType = {
                        question_id: response.question_id,
                        title: data.title,
                        type: data.type,
                        explanation: data.explanation,
                        answers: response.answers
                    }
    
                    addQuestions(questionData)
                    toggleQuizQuestions()
                }
            } catch (error) {
                console.error("Failed to add question:", error);
            }
    
        }
    }


    return (
        <div className="my-6">
            <Card className="border-2">
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                            {/* type of question field */}
                            <FormField
                                control={form.control}
                                name="type"
                                render={({ field }) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>Type</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger >
                                                    <SelectValue placeholder="Select category" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent >
                                                <SelectItem value="single">Single</SelectItem>
                                                <SelectItem value="multiple"> Multiple</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Question</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Enter the question"
                                                className="resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* <Answer/> */}
                            {fields.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="space-y-2 border border-black rounded-sm p-3"
                                >
                                    <FormField
                                        control={form.control}
                                        name={`answers.${index}.answer`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <div className="flex flex-row justify-between items-center mb-5">
                                                    <FormLabel>Answer</FormLabel>
                                                    {/* Remove Button for each answer */}
                                                    <MdDelete
                                                        onClick={() => {
                                                            if (question && question.answers) {
                                                                const deletedAnswer = question.answers[index];
                                                                setDeletedAnswerIds((prev) => [
                                                                ...prev,
                                                                ...(deletedAnswer.answer_id ? [deletedAnswer.answer_id] : []),
                                                                ]);
                                                            }
                                                            remove(index);
                                                        }}
                                                        className="hover:cursor-pointer"
                                                    />
                                                </div>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="Enter an answer"
                                                        className="bg-white"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name={`answers.${index}.is_correct`}
                                        render={({ field }) => (
                                            <FormItem className="items-center flex flex-row">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={(checked) => field.onChange(checked)}
                                                        className="p-0 border-none"
                                                    />
                                                </FormControl>
                                                <FormLabel className="pb-2 pl-2">is correct</FormLabel>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            ))

                            }


                            <div className='flex justify-between items-center text-sm'>
                                <Button
                                    type="button"
                                    className="rounded-sm bg-[#2563EB] hover:bg-[#1d4ed8]"
                                    onClick={() => append({ answer: "", is_correct: false })}
                                >
                                    Add Choice
                                </Button>
                            </div>


                            <FormField
                                control={form.control}
                                name="explanation"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Explanation</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Enter the explanation for the question"
                                                className="resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {form.formState.errors.root && (
                                <div className="text-red-500 text-sm">
                                    {form.formState.errors.root.message}
                                </div>
                            )}

                            {/* buttons */}
                            <div className='flex justify-between items-center text-sm'>
                                <Button
                                    type="submit"
                                    className="rounded-sm bg-[#2563EB] hover:bg-[#1d4ed8]"

                                >
                                    Add Question
                                </Button>
                                <Button
                                    type="button"
                                    className="rounded-sm bg-[#2563EB] hover:bg-[#1d4ed8]"
                                    onClick={toggleQuizQuestions}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>

            </Card>

        </div>
    )
}

export default QuizQuestionsForm

