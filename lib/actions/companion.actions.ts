"use server";

import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "../supabase";

export const createCompanion = async (formData: CreateCompanion) => {
  const { userId: author } = await auth();

  const supabase = createSupabaseClient();

  const { data } = await supabase
    .from("companions")
    .insert({ ...formData, author })
    .select()
    .throwOnError();

  return data[0];
};
