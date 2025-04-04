import { Button } from '@/components/ui/button'
import { CardDescription, CardTitle } from '@/components/ui/card'
import React from 'react'
import { MdEdit } from 'react-icons/md'
import { ChapterSchema } from '@/schema'
import { z } from 'zod'
import ChapterForm from './chapterForm'

interface ChapterTitleProps {
  showEditForm: boolean,
  toggleForm: ()=>void,
  onAddChapter: (chapterData: z.infer<typeof ChapterSchema>) => void;
  chapter:any
}


const ChapterTitle = ({showEditForm, toggleForm, onAddChapter,chapter}:ChapterTitleProps) => {

  if(showEditForm){
    return(
      <ChapterForm onAddChapter={onAddChapter} toggleForm={toggleForm}/>
    )
  }

  return (
    <div className='flex justify-between items-center'>
        <div className='flex flex-col gap-2'>
            <p className='text-2xl font-bold'>{chapter.title} : {chapter.description}</p>
            <p>X Lessons • Y minutes total</p>
        </div>

        <Button onClick={toggleForm}>
            <MdEdit /> 
            Edit Chapter
        </Button>
    </div>
  )
}

export default ChapterTitle