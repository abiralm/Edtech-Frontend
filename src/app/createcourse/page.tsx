
'use client'

import {useState} from 'react'
import {useForm} from 'react-hook-form'

import {cn} from '@/lib/utils'
import Basic from '../component/course-create-sections/basic';
import Review from '../component/course-create-sections/review';
import CourseBuilder from '../component/course-create-sections/courseBuilder';
import { ChapterType, CourseType, LessonType, mainCourseType } from '@/types';
import { set } from 'zod';

const initalMainCourseState: mainCourseType = {
    course: {
        course_id:"",
        title:"",
        category: "",
        level: "",
        description: "",
        image_url :""
    },
    chapters:[],
    status: 'draft' 
}


const CourseCreate = () => {

    const [mainCourseState,setMainCourseState ] = useState<mainCourseType>(initalMainCourseState)

    const [step, setStep] = useState(0)
    const totalSteps = 3

    const form = useForm()

    const {
        handleSubmit,
        control,
        reset
    } = form

    //adding course in main course state
    const addCourseInState = (courseData: CourseType) =>{
        setMainCourseState({...mainCourseState, course:courseData})
        console.log(mainCourseState)
    }

    //Adding (or updating) chapter in our main course state
    const addChapterInState = (chapterData: ChapterType) =>{
        // setMainCourseState((prevState)=>({
        //     ...prevState,
        //     chapters: [...prevState.chapters, chapterData]
        // }))
        setMainCourseState((prevState)=>{
            const chapterIndex = prevState.chapters.findIndex((chap)=>chap.chapter_id == chapterData.chapter_id)
            
            const UpdatedChapters = chapterIndex >= 0? 
                prevState.chapters.map((chap, index)=>index == chapterIndex?chapterData: chap)
                : [...prevState.chapters, chapterData]

            return {
                ...prevState,
                chapters: UpdatedChapters
            }
        })
    }


    const deleteChapterFromState =(chapterData:ChapterType)=>{
        setMainCourseState((prevState)=>{
            const filtered = prevState.chapters.filter(
                (chapter)=>chapter.chapter_id !== chapterData.chapter_id
            )
            return{
                ...prevState,
                chapters:filtered
            }
        })
    }

    //add edit functionality
    const addLessonToChapters =(lessonData :LessonType,chapter_id:string)=>{
        // setMainCourseState((prevState)=>{
        //     const updatedChapters = prevState.chapters.map((chapter)=>{
        //         if (chapter.chapter_id == chapter_id){
        //             return {
        //                 ...chapter,
        //                 lessons:[...chapter.lessons,lessonData]
        //             }
        //         }
        //         return chapter
        //     })
        //     return{
        //         ...prevState,chapters:updatedChapters
        //     }
        // })
        setMainCourseState((prevState)=>{
            const updatedChapters = prevState.chapters.map((chapter)=>{
                if(chapter.chapter_id=== chapter_id){
                    const lessonIndex = chapter.lessons.findIndex((lesson)=>lesson.lesson_id==lessonData.lesson_id)

                    const updatedLessons = lessonIndex >=0?
                    chapter.lessons.map((less, index)=>index==lessonIndex?lessonData:less):[...chapter.lessons,lessonData]

                    return{
                        ...chapter,
                        lessons:updatedLessons
                    }
                }
                return chapter;
            });
            return{
                ...prevState,
                chapters:updatedChapters
            }
        })
    }

    const onSubmit = async (formData: unknown) => {
        if (step < totalSteps - 1) {
        setStep(step + 1)
        } else {
        console.log(formData)
        setStep(0)
        reset()

        // toast.success("Form successfully submitted")
        }
    }

    const handleBack = () => {
        if (step > 0) {
        setStep(step - 1)
        }
    }

    const handleForward = () => {
        if (step < 2) {
        setStep(step + 1)
        }
    }

    return (
        <div className="space-y-4 m-8">

            {/* connecting dots */}
            <div className="flex items-center justify-center">
            {Array.from({ length: totalSteps }).map((_, index) => (
                <div key={index} className="flex items-center">
                <div
                    className={cn(
                    "w-4 h-4 rounded-full transition-all duration-300 ease-in-out",
                    index <= step ? "bg-primary" : "bg-primary/30",
                    index < step && "bg-primary"
                    )}
                />
                {index < totalSteps - 1 && (
                    <div
                    className={cn(
                        "w-8 h-0.5",
                        index < step ? "bg-primary" : "bg-primary/30"
                    )}
                    />
                )}
                </div>
            ))}
            </div>

            {step === 0 && (
                <Basic 
                    handleBack={handleBack}
                    handleForward={handleForward} 
                    step={step}
                    addCourseInState={addCourseInState}
                />
            )}
        
            {step === 2 && (
                <Review 
                    handleBack={handleBack}
                    handleForward={handleForward} 
                    step={step}
                />
            )}

            
            
            {step === 1 && (
                <CourseBuilder
                    chapters={mainCourseState.chapters} 
                    handleBack={handleBack}
                    handleForward={handleForward} 
                    step={step}
                    course_id={mainCourseState.course.course_id}
                    addChapterInState={addChapterInState}
                    deleteChapterFromState={deleteChapterFromState}
                    addLessonToChapters={addLessonToChapters}
                    // lessons={mainCourseState.chapters.}
                />
            )}  
            
        </div>
    )
}

export default CourseCreate;
