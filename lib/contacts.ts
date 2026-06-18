import { getAdminClient } from "./supabase";

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  investment_range: string | null;
  message: string | null;
  read: boolean;
  created_at: string;
}

export async function getAllContacts(): Promise<ContactSubmission[]> {
  const { data, error } = await getAdminClient()
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) { console.error(error); return []; }
  return data ?? [];
}
