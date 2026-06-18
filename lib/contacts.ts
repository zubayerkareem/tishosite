import { getAdminClient } from "./supabase";
import type { Paginated } from "./blog";

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  investment_range: string | null;
  message: string | null;
  read: boolean;
  created_at: string;
}

const PAGE_SIZE = 10;

export async function getAllContacts(page = 1): Promise<Paginated<ContactSubmission>> {
  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  const { data, error, count } = await getAdminClient()
    .from("contact_submissions")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) { console.error(error); return { data: [], total: 0 }; }
  return { data: data ?? [], total: count ?? 0 };
}

export async function getUnreadContactCount(): Promise<number> {
  const { count, error } = await getAdminClient()
    .from("contact_submissions")
    .select("*", { count: "exact", head: true })
    .eq("read", false);
  if (error) return 0;
  return count ?? 0;
}
