export const dynamic = "force-dynamic";

import { getAllPostsAdmin, type Paginated, type BlogPost } from "@/lib/blog";
import { getAllContacts, getUnreadContactCount, type ContactSubmission } from "@/lib/contacts";
import { getAllSubscribers, type NewsletterSubscriber } from "@/lib/newsletter";
import { AdminShell } from "./AdminShell";

type Tab = "blog" | "contacts" | "newsletter";

const VALID_TABS: Tab[] = ["blog", "contacts", "newsletter"];

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string; page?: string }>;
}) {
  const { tab: rawTab, page: rawPage } = await searchParams;
  const tab: Tab = VALID_TABS.includes(rawTab as Tab) ? (rawTab as Tab) : "blog";
  const page = Math.max(1, parseInt(rawPage ?? "1", 10) || 1);

  const empty = <T,>(): Paginated<T> => ({ data: [], total: 0 });

  const [posts, contacts, newsletter, unreadContacts] = await Promise.all([
    tab === "blog" ? getAllPostsAdmin(page) : empty<BlogPost>(),
    tab === "contacts" ? getAllContacts(page) : empty<ContactSubmission>(),
    tab === "newsletter" ? getAllSubscribers(page) : empty<NewsletterSubscriber>(),
    getUnreadContactCount(),
  ]);

  return (
    <AdminShell
      tab={tab}
      page={page}
      posts={posts}
      contacts={contacts}
      newsletter={newsletter}
      unreadContacts={unreadContacts}
    />
  );
}
