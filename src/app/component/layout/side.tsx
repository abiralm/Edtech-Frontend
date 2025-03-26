import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"


const Side = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Button className="bg-transparent text-black">All Category</Button>
          <Button className="bg-transparent text-black">All Category</Button>

        </CardContent>
      </Card>
    </div>
  )
}

export default Side