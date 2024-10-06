import { fetchRecipes } from "@/features/recipes/utils/data";
import type { recipe } from "@/features/recipes/types/index";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { Edit, Trash } from "@/components/ui/icons";

const RecipesContainer = async () => {

  const recipes = await fetchRecipes();

  return(
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
          {recipes.recipes.map((recipe: recipe) => {
            return (
              <TableRow key={recipe.id}>
                <TableCell>{recipe.bean}</TableCell>
                <TableCell>{recipe.description}</TableCell>
                <TableCell>
                  <div className="flex">
                    <Link href={`/dashboard/recipes/${recipe.id}`}>
                      <Edit />
                    </Link>
                    <form action="">
                      <Trash />
                    </form>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  )
}

export default RecipesContainer;