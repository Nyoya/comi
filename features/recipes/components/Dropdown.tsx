import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Ellipsis from '@/components/ui/icons/Ellipsis';
import Link from "next/link";
import { Edit, Trash } from "@/components/ui/icons";

const Dropdown = ({ id }: { id: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Ellipsis />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuItem>
          <Link className="flex items-center gap-1.5" href={`/dashboard/recipes/${id}`}>
            <Edit />
            <span>Edit</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <form action="">
            <button type="submit" className="flex items-center gap-1.5">
              <Trash />
              <span>delete</span>
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Dropdown