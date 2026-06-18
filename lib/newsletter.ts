import { getAdminClient } from "./supabase";
import type { Paginated } from "./blog";

export interface NewsletterSubscriber {
  id: string;
  email: string;
  active: boolean;
  created_at: string;
}

const PAGE_SIZE = 10;

export async function getAllSubscribers(page = 1): Promise<Paginated<NewsletterSubscriber>> {
  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  const { data, error, count } = await getAdminClient()
    .from("newsletter_subscribers")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) { console.error(error); return { data: [], total: 0 }; }
  return { data: data ?? [], total: count ?? 0 };
}
