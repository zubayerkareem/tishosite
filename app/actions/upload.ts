"use server";

import { getAdminClient } from "@/lib/supabase";

export async function uploadBlogImage(
  formData: FormData
): Promise<{ url: string } | { error: string }> {
  const file = formData.get("file") as File;
  if (!file || !file.size) return { error: "No file provided" };

  const ext = file.name.split(".").pop()?.toLowerCase() ?? "jpg";
  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const client = getAdminClient();
  const { error } = await client.storage
    .from("blog-images")
    .upload(fileName, buffer, { contentType: file.type, upsert: false });

  if (error) return { error: error.message };

  const { data } = client.storage.from("blog-images").getPublicUrl(fileName);
  return { url: data.publicUrl };
}
