import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { Recipe } from "../types";
import Dropdown from "./Dropdown";
import { replaceDot } from '../utils/index';

export default function Presentation({ recipes }: { recipes: Recipe[] }) {
  return (
    <Card className="overflow-scroll">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Bean</TableHead>
          <TableHead>description</TableHead>
          <TableHead>action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recipes.map((recipe) => (
          <TableRow key={recipe.id} className="overflow-x-scroll">
            <TableCell className="min-w-40">{replaceDot(recipe.t_beans.name)}</TableCell>
            <TableCell className="min-w-40">{replaceDot(recipe.description)}</TableCell>
            <TableCell className="flex justify-center">
              <Dropdown id={recipe.id} />
            </TableCell>
          </TableRow>
          )
        )}
      </TableBody>
    </Table>
  </Card>
  )
}

