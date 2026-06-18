"use server";

import { revalidatePath } from "next/cache";
import { getAdminClient } from "@/lib/supabase";

export async function subscribeNewsletter(email: string) {
  const { error } = await getAdminClient()
    .from("newsletter_subscribers")
    .upsert({ email, active: true }, { onConflict: "email" });
  if (error) console.error("Newsletter subscribe error:", error);
  revalidatePath("/admin");
}
