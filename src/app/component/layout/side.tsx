import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function Side() {
  return (
    <div className="p-4 h-full">
      <h3 className="font-medium text-lg mb-4">Filter Courses</h3>
      
      <Accordion type="multiple" defaultValue={["category", "level", "price"]}>
        <AccordionItem value="category">
          <AccordionTrigger>Category</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2"><s></s>
              <div className="flex items-center space-x-2">
                <Checkbox id="development" />
                <Label htmlFor="development">Development</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="design" />
                <Label htmlFor="design">Design</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="business" />
                <Label htmlFor="business">Business</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="marketing" />
                <Label htmlFor="marketing">Marketing</Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="level">
          <AccordionTrigger>Level</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="beginner" />
                <Label htmlFor="beginner">Beginner</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="intermediate" />
                <Label htmlFor="intermediate">Intermediate</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="advanced" />
                <Label htmlFor="advanced">Advanced</Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider defaultValue={[50]} max={100} step={1} />
              <div className="flex justify-between">
                <span>$0</span>
                <span>$100</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="rating">
          <AccordionTrigger>Rating</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="five-star" />
                <Label htmlFor="five-star">5 Stars</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="four-star" />
                <Label htmlFor="four-star">4 Stars & Above</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="three-star" />
                <Label htmlFor="three-star">3 Stars & Above</Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}