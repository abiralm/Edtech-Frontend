import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { MdEdit,MdDelete} from 'react-icons/md'
import { ChapterSchema } from '@/schema'
import { z } from 'zod'
import ChapterForm from './chapterForm'
import { ChapterType } from '@/types'
import { delete_chapter_api } from '@/api/instructor_api'

interface ChapterTitleProps {
  addChapterInState: (chapterData: ChapterType) =>void
  deleteChapterFromState: (chapterData: ChapterType) =>void
  chapter:ChapterType
  course_id: string
}


const ChapterTitle = ({ addChapterInState, deleteChapterFromState,chapter, course_id}:ChapterTitleProps) => {

  const [showEditForm, setShowEditForm] = useState(false)

  const toggleEdit = ()=>{
      setShowEditForm(!showEditForm)
  }

  const handleChapterDeletion = async () =>{
    try{
      const response = await delete_chapter_api(course_id, chapter.chapter_id)
      if(response){
        deleteChapterFromState(chapter)
      }
    }catch(error){
      console.log("Something bad occured when deleting chapter: ", error)
    }
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
          <Button onClick={handleChapterDeletion}>
          <MdDelete /> 
              Delete 
          </Button>
        </div>
        
    </div>
  )
}

export default ChapterTitle