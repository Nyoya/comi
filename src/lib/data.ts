'use server'

import { QueryData } from "@supabase/supabase-js";
import { supabase } from "./supabase";

export async function fetchAllRoast() {
  const allRoastQuery = supabase
    .from("t_roasts")
    .select(`
      id,
      note,
      level,
      total_time,
      created_at,
      t_beans(
        name,
        origin,
        process
      )  
    `)
    .eq('user_id', 1)
  type AllRoast = QueryData<typeof allRoastQuery>;

  const {data, error} = await allRoastQuery;
  if(error) throw error

  const allRoast: AllRoast = data;
  return allRoast;
}