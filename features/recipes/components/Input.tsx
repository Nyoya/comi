import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function RecipeInput({ name, required }: { name: string, required?: boolean }) {
  const style = cn("",
    required && 'after:content-["*"] after:text-red-700'
  )

  return (
    <div className="space-y-2">
      <label className={style} htmlFor={name}>{name}</label>
      <Input id={name} placeholder={name} />
    </div>
  )
}