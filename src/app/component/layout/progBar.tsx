import React from 'react'
import { Progress } from "@/components/ui/progress"


function ProgBar() {
  return (
    <div className='w-1/2 '>
        <Progress value={45} className="bg-gray-200 [&>div]:bg-blue-500" />
    </div>

  )
}

export default ProgBar