import "server-only";
import type { Recipe } from "../types";
import { createClient } from "@/lib/supabase";

export const fetchRecipes = async (): Promise<Recipe[]> => {
  const supabase = createClient()
  const { data } = await supabase
    .from('t_recipes')
    .select('*, t_beans (name)')
  return data as Recipe[]
}