import { getAdminClient } from "./supabase";

export interface NewsletterSubscriber {
  id: string;
  email: string;
  active: boolean;
  created_at: string;
}

export async function getAllSubscribers(): Promise<NewsletterSubscriber[]> {
  const { data, error } = await getAdminClient()
    .from("newsletter_subscribers")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) { console.error(error); return []; }
  return data ?? [];
}
