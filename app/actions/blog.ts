"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getAdminClient } from "@/lib/supabase";

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const slug = (formData.get("slug") as string) || slugify(title);

  const { error } = await getAdminClient()
    .from("blog_posts")
    .insert({
      slug,
      title,
      excerpt: formData.get("excerpt") as string,
      content: formData.get("content") as string,
      category: formData.get("category") as string,
      author: (formData.get("author") as string) || "Tisho Editorial",
      date: formData.get("date") as string,
      read_time: formData.get("read_time") as string,
      image_url: (formData.get("image_url") as string) || null,
      published: formData.get("published") === "true",
    });

  if (error) {
    console.error("Create post error:", error);
    redirect("/admin/blog/new?error=1");
  }

  revalidatePath("/blog");
  redirect("/admin");
}

export async function updatePost(id: string, formData: FormData) {
  const title = formData.get("title") as string;

  const { error } = await getAdminClient()
    .from("blog_posts")
    .update({
      slug: (formData.get("slug") as string) || slugify(title),
      title,
      excerpt: formData.get("excerpt") as string,
      content: formData.get("content") as string,
      category: formData.get("category") as string,
      author: (formData.get("author") as string) || "Tisho Editorial",
      date: formData.get("date") as string,
      read_time: formData.get("read_time") as string,
      image_url: (formData.get("image_url") as string) || null,
      published: formData.get("published") === "true",
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) {
    console.error("Update post error:", error);
    redirect(`/admin/blog/${id}/edit?error=1`);
  }

  revalidatePath("/blog");
  redirect("/admin");
}

export async function deletePost(id: string) {
  await getAdminClient().from("blog_posts").delete().eq("id", id);
  revalidatePath("/blog");
  redirect("/admin");
}

export async function togglePublish(id: string, published: boolean) {
  await getAdminClient()
    .from("blog_posts")
    .update({ published: !published, updated_at: new Date().toISOString() })
    .eq("id", id);

  revalidatePath("/blog");
}
