import { supabase, getAdminClient } from "./supabase";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string | null;
  category: string | null;
  author: string;
  date: string;
  read_time: string | null;
  image_url: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
}

// Public: fetch published posts ordered by date desc
export async function getPublishedPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .order("date", { ascending: false });

  if (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
  return data ?? [];
}

// Public: fetch single published post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error) return null;
  return data;
}

// Admin: fetch all posts (published + drafts)
export async function getAllPostsAdmin(): Promise<BlogPost[]> {
  const { data, error } = await getAdminClient()
    .from("blog_posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching admin posts:", error);
    return [];
  }
  return data ?? [];
}

// Admin: fetch single post by id
export async function getPostByIdAdmin(id: string): Promise<BlogPost | null> {
  const { data, error } = await getAdminClient()
    .from("blog_posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return null;
  return data;
}
