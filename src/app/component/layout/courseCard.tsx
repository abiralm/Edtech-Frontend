"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { useRouter } from 'next/navigation'

export function Coursecard() {
  const router = useRouter()
  
  return (
    <Card className="w-full">
        <CardHeader className="flex items-baseline justify-between">
            <CardTitle>$8.99</CardTitle>
            <CardDescription>$10.99</CardDescription>
        </CardHeader>
        <CardContent>
            <div>
                <Button variant="outline" className="w-full my-2" onClick={() => router.push(`/checkout`)}>Enroll</Button>
                <Button className="w-full my-2">Add to wishlist</Button>
            </div>
        </CardContent>
      <CardFooter className="flex justify-between">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
      </CardFooter>
    </Card>
  )
}
