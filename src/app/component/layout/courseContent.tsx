"use client"

import * as React from "react"
import { IoIosArrowDown,IoIosArrowUp  } from "react-icons/io";
import { FaPlayCircle,FaFilePdf} from "react-icons/fa";
import { MdQuiz } from "react-icons/md";



import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function CourseContent() {
  const x:string = "a";  
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-2 "
    >
      <div className="flex items-center justify-between border-2 gap-4 p-2 rounded-md bg-[#F9FAFB]">
        <div className="flex items-center">
            <CollapsibleTrigger asChild>
            <Button variant="ghost" size="default">
                {!isOpen?<IoIosArrowDown className="h-4 w-4" />:<IoIosArrowUp className="h-4 w-4" />}
            </Button>
            </CollapsibleTrigger>
            <h4 className="text-sm font-semibold">
                1. Introduction to Web Development
            </h4>
        </div>
        
        <div>
            <span>X Lectures • Y min</span>
        </div>
        
      </div>
      
        <CollapsibleContent>
            <div>

                <div className="flex items-center justify-between gap-4 p-2 rounded-md">
                    <div className="flex items-center p-2 gap-x-4">
                        {x === "a" ? <FaPlayCircle /> : x === "b" ? <FaFilePdf /> : x === "c" ? <MdQuiz /> : null}
                    <h4 className="text-sm font-semibold">
                            1.1 Introduction to Web Development
                        </h4>
                    </div>
                    <div>
                        <span>15:00</span>
                    </div>
                </div>

                <div className="flex items-center justify-between gap-4 p-2 rounded-md">
                    <div className="flex items-center p-2 gap-x-4">
                        {x === "a" ? <FaPlayCircle /> : x === "b" ? <FaFilePdf /> : x === "c" ? <MdQuiz /> : null}
                    <h4 className="text-sm font-semibold">
                            1.2 Introduction to Web Development
                        </h4>
                    </div>
                    <div>
                        <span>15:00</span>
                    </div>
                </div>

            </div>      
        </CollapsibleContent>
        
    </Collapsible>
  )
}

