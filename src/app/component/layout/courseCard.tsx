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


export function Coursecard() {
  return (
    <Card className="w-full">
        <CardHeader className="flex items-baseline justify-between">
            <CardTitle>$8.99</CardTitle>
            <CardDescription>$10.99</CardDescription>
        </CardHeader>
        <CardContent>
            <div>
                <Button variant="outline" className="w-full my-2">Enroll</Button>
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
