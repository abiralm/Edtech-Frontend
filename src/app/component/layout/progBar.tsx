import React from 'react'
import { Progress } from "@/components/ui/progress"


function ProgBar() {
  return (
    <div className='w-1/2'>
        <Progress value={45} />
    </div>

  )
}

export default ProgBar