import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DatePicker } from "@/features/recipes/components/DatePicker";
import Input from '@/features/recipes/components/Input'

export default function page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bean</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input name="Name" required={true} />
        <Input name="Origin" required={true} />
        <Input name="Process" required={true} />
        <Input name="Roast" required={true} />
        <DatePicker />
      </CardContent>
    </Card>
  )
}