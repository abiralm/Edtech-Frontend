import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { MdEdit,MdDelete} from 'react-icons/md'
import { ChapterSchema } from '@/schema'
import { z } from 'zod'
import ChapterForm from './chapterForm'
import { ChapterType } from '@/types'

interface ChapterTitleProps {
  addChapterInState: (chapterData: ChapterType) =>void
  chapter:ChapterType
  course_id: string
}


const ChapterTitle = ({ addChapterInState,chapter, course_id}:ChapterTitleProps) => {

  const [showEditForm, setShowEditForm] = useState(false)

  const toggleEdit = ()=>{
      setShowEditForm(!showEditForm)
  }

  if(showEditForm){
    return(
      <ChapterForm chapter={chapter} addChapterInState={addChapterInState} toggleForm={toggleEdit} course_id={course_id} order={chapter.order}/>
    )
  }

  return (
    <div className='flex justify-between items-center'>
        <div className='flex flex-col gap-2'>
            <p className='text-2xl font-bold'>{chapter.title} : {chapter.description}</p>
            <p>X Lessons • Y minutes total</p>
        </div>

        <div className='flex gap-2'>
          <Button onClick={toggleEdit}>
              <MdEdit /> 
              Edit 
          </Button>
          <Button onClick={()=>{console.log("delete button clicked")}}>
              <MdDelete /> 
              Delete 
          </Button>
        </div>
        
    </div>
  )
}

export default ChapterTitle