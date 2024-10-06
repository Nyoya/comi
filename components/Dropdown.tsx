import { DropdownMenu, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import Ellipsis from './ui/icons/ellipsis';
import Link from "next/link";
import { Edit, Trash } from "./ui/icons";

const Dropdown = ({recipe}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Ellipsis />
      </DropdownMenuTrigger>
      <DropdownMenuLabel>Edit</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Link href={`/dashboard/recipes/${recipe.id}`}>
          <Edit />
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <form action="">
          <Trash />
        </form>
      </DropdownMenuItem>
    </DropdownMenu>
  )
}

export default Dropdown