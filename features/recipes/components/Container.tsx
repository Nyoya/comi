import { fetchRecipes } from "@/features/recipes/utils/data";
import Presentation from "./Presentation";
import { Suspense } from "react";

export default async function Container() {
  const recipes = await fetchRecipes();

  return (
    <Suspense fallback={'loading....'}>
      <Presentation recipes={recipes} />
    </Suspense>
  )
}