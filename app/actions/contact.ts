"use server";

import { revalidatePath } from "next/cache";
import { getAdminClient } from "@/lib/supabase";

export async function submitContact(data: {
  name: string;
  email: string;
  range: string;
  message: string;
}) {
  const { error } = await getAdminClient()
    .from("contact_submissions")
    .insert({
      name: data.name,
      email: data.email,
      investment_range: data.range || null,
      message: data.message,
    });
  if (error) console.error("Contact submission error:", error);
}

export async function markContactRead(id: string, read: boolean) {
  await getAdminClient()
    .from("contact_submissions")
    .update({ read: !read })
    .eq("id", id);
  revalidatePath("/admin");
}
