
'use client'

import {useState} from 'react'
import {useForm} from 'react-hook-form'

import {cn} from '@/lib/utils'
import Basic from '../component/course-create-sections/basic';
import Review from '../component/course-create-sections/review';
import CourseBuilder from '../component/course-create-sections/courseBuilder';
import ChapterInfo from '../component/course-create-sections/chapterInfo';

const CourseCreate = () => {
    const [step, setStep] = useState(0)
    const totalSteps = 2

    const form = useForm()

    const {
        handleSubmit,
        control,
        reset
    } = form

    const onSubmit = async (formData: unknown) => {
        if (step < totalSteps - 1) {
        setStep(step + 1)
        } else {
        console.log(formData)
        setStep(0)
        reset()

        toast.success("Form successfully submitted")
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
                />
            )}
        
            {step === 1 && (
                <Review 
                    handleBack={handleBack}
                    handleForward={handleForward} 
                    step={step}
                />
            )}

            <CourseBuilder/>
            <ChapterInfo/>
        </div>
    )
}

export default CourseCreate;
